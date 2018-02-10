declare const require: (name: string) => any

const { SyncHook } = require("../lib");

type ISyncHook = { _args: string[] } & any

export class TSyncHook<Args extends object, Context={}> {
	_mapIn: (args: Args) => any[]
	_mapOut: (argsArr: any[]) => Args
	_syncHook: ISyncHook
	constructor(argsOrHook: (keyof Args)[] | ISyncHook = []) {
		let argArr: string[]
		if (Array.isArray(argsOrHook)) {
			// is args
			this._syncHook = new SyncHook(argsOrHook)
			argArr = argsOrHook
		} else {
			// is synchook
			this._syncHook = argsOrHook
			argArr = this._syncHook._args
		}

		// map args from object to array
		this._mapIn = new Function('a', "\"use strict\";\n" +
			"return [" + argArr.map(key => 'a.' + key).join(',') +
			"]") as any

		// map args from array to object
		this._mapOut = new Function('a', "\"use strict\";\n" +
			"return {" + argArr.map((key, idx) => `${key}: a[${idx}]`).join(',') +
			"}") as any
	}

	call(args: Args) {
		return this._syncHook.call(...this._mapIn(args))
	}

	tap(name: string, listener: (args: Args) => void) {
		return this._syncHook.tap({ name }, (...args: any[]) => listener(this._mapOut(args)))
	}
}

class Car {
	hooks = {
		accelerate: new TSyncHook<{ newSpeed: number }>(["newSpeed"]),
		break: new TSyncHook<{ isBreaking: boolean }>(["isBreaking"]),
	}

	showBrakeLights: boolean

	/* ... */
}

const myCar = new Car()

myCar.hooks.break.tap("BrakeLightPlugin", ({ isBreaking }) => {
	myCar.showBrakeLights = isBreaking
})

myCar.hooks.accelerate.tap("SpeedDisplayPlugin", ({ newSpeed }) => {
	console.log("New speed", newSpeed)
})

console.log(myCar)
console.log(myCar.hooks.accelerate._mapIn)
console.log(myCar.hooks.accelerate._mapOut)
console.log(myCar.hooks.accelerate._syncHook)

myCar.hooks.accelerate.call({newSpeed: 12})
myCar.hooks.accelerate.call({newSpeed: 20})
