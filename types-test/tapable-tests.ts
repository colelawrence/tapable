/// <reference path="./index.d.ts" />

import {
    SyncHook,
    SyncBailHook,
    SyncWaterfallHook,
    SyncLoopHook,
    AsyncParallelHook,
    AsyncParallelBailHook,
    AsyncSeriesHook,
    AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook,
	HookMap,
	TapObject,
	HookObject,
	HookSync1
} from "tapable";

{
    const hook = new SyncHook(["arg1", "arg2", "arg3"]);
    // The best practice is to expose all hooks of a class in a hooks property:

}

type Loc = any

class Car {
    hooks = {
        accelerate: new SyncHook<void, number>(["newSpeed"]),
        break: new SyncHook(),
        calculateRoutes: new AsyncParallelHook<void, Loc, Loc, List<Route>>(["source", "target", "routesList"])
    }

    /* ... */
}

// Other people can now use these hooks:

const myCar = new Car();

type Route = any
class List<T = Route> {
    add(item: T) { }
    getRoutes(): T[] { return [] }
}
const warningLamp = { on() { } }
const google = {
    maps: {
        findRoute(src: Loc, trg: Loc): Promise<Route> {
            return
        }
    }
}
const bing = {
    findRoute(src: Loc, trg: Loc, cb: (err?: null | any, route?: Route) => void): void {
        return
    }
}

// Use the tap method to add a consument
myCar.hooks.break.tap("WarningLampPlugin", () => warningLamp.on());
// It's required to pass a name to identify the plugin/reason.

// You may receive arguments:

myCar.hooks.accelerate.tap("LoggerPlugin", newSpeed => console.log(`Accelerating to ${newSpeed}`));
// For sync hooks tap is the only valid method to add a plugin.Async hooks also support async plugins:

myCar.hooks.calculateRoutes.tapPromise("GoogleMapsPlugin", (source, target, routesList) => {
    // return a promise
    return google.maps.findRoute(source, target).then(route => {
        routesList.add(route);
    });
});

myCar.hooks.calculateRoutes.tapAsync("BingMapsPlugin", (source, target, routesList, callback) => {
    bing.findRoute(source, target, (err, route) => {
        if (err) return callback(err);
        routesList.add(route);
        // call the callback
        callback(null);
    });
});

const cache = {
	get(source: Loc, target: Loc): null | Route {
		return
	}
}

// You can still use sync plugins
myCar.hooks.calculateRoutes.tap("CachedRoutesPlugin", (source, target, routesList) => {
    const cachedRoute = cache.get(source, target);
    if (cachedRoute)
        routesList.add(cachedRoute);
})
// The class declaring these hooks need to call them:

class Car2 extends Car {
    /* ... */

    setSpeed(newSpeed: number) {
        this.hooks.accelerate.call(newSpeed);
    }

    useNavigationSystemPromise(source: Loc, target: Loc) {
        const routesList = new List();
        return this.hooks.calculateRoutes.promise(source, target, routesList).then(() => {
            return routesList.getRoutes();
        });
    }

    useNavigationSystemAsync(source: Loc, target: Loc, callback: (err?: any, routes?: Route[]) => void) {
        const routesList = new List();
        this.hooks.calculateRoutes.callAsync(source, target, routesList, err => {
            if (err) return callback(err);
            callback(null, routesList.getRoutes());
        });
    }
}

// The Hook will compile a method with the most efficient way of running your plugins.It generates code depending on:

// The number of registered plugins(none, one, many)
// The kind of registered plugins(sync, async, promise)
// The used call method(sync, async, promise)
// The number of arguments
// Whether interception is used
// This ensures fastest possible execution.

// Interception
// All Hooks offer an additional interception API:

myCar.hooks.calculateRoutes.intercept({
    call: (source: Loc, target: Loc, routesList: List) => {
        console.log("Starting to calculate routes");
	},

    tap: (tapInfo: TapObject) => {
        // tapInfo = { type: "promise", name: "GoogleMapsPlugin", fn: ... }
        console.log(`${tapInfo.name} is doing it's job`);
        return tapInfo; // may return a new tapInfo object
	}
})
/*
call: (...args) => void Adding call to your interceptor will trigger when hooks are triggered.You have access to the hooks arguments.

    tap: (tap: Tap) => void Adding tap to your interceptor will trigger when a plugin taps into a hook.Provided is the Tap object.Tap object can't be changed.

loop: (...args) => void Adding loop to your interceptor will trigger for each loop of a looping hook.

    register: (tap: Tap) => Tap | undefined Adding register to your interceptor will trigger for each added Tap and allows to modify it.
*/

// HookMap
// A HookMap is a helper class for a Map with Hooks

const keyedHook: HookMap<string, HookSync1<void, any>> = new HookMap((key: string) => new SyncHook(["arg"]))
keyedHook.tap("some-key", "MyPlugin", (arg: any) => { /* ... */ });
keyedHook.tapAsync("some-key", "MyPlugin", (arg: any, callback: () => void) => { /* ... */ });
keyedHook.tapPromise("some-key", "MyPlugin", (arg: any) => { /* ... */ });
const hook = keyedHook.get("some-key");
if (hook !== undefined) {
    // hook.callAsync("arg", err => { /* ... */ });
    hook.call("arg");
}

//  Hook/HookMap interface
//  Public:
/*
interface Hook {
    tap: (name: string | Tap, fn: (context?, ...args) => Result) => void,
    tapAsync: (name: string | Tap, fn: (context?, ...args, callback: (err, result: Result) => void) => void) => void,
    tapPromise: (name: string | Tap, fn: (context?, ...args) => Promise<Result>) => void,
    intercept: (interceptor: HookInterceptor) => void
}

interface HookInterceptor {
    call: (context?, ...args) => void,
    loop: (context?, ...args) => void,
    tap: (context?, tap: Tap) => void,
    register: (tap: Tap) => Tap,
    context: boolean
}

interface HookMap {
    for: (key: any) => Hook,
    tap: (key: any, name: string | Tap, fn: (context?, ...args) => Result) => void,
    tapAsync: (key: any, name: string | Tap, fn: (context?, ...args, callback: (err, result: Result) => void) => void) => void,
    tapPromise: (key: any, name: string | Tap, fn: (context?, ...args) => Promise<Result>) => void,
    intercept: (interceptor: HookMapInterceptor) => void
}

interface HookMapInterceptor {
    factory: (key: any, hook: Hook) => Hook
}

interface Tap {
    name: string,
    type: string
    fn: Function,
    stage: number,
    context: boolean
}
Protected(only for the class containing the hook):

interface Hook {
    isUsed: () => boolean,
    call: (...args) => Result,
    promise: (...args) => Promise<Result>,
    callAsync: (...args, callback: (err, result: Result) => void) => void,
}

interface HookMap {
    get: (key: any) => Hook | undefined,
    for: (key: any) => Hook
}
*/
// MultiHook
// A helper Hook - like class to redirect taps to multiple other hooks:

// const { MultiHook } = require("tapable");

const allHooks = new MultiHook([this.hooks.hookA, this.hooks.hookB]);
