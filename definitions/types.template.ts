import { HookInterceptor0 } from "tapable";

// Type definitions for tapable v1.0.0-beta.5
// Project: https://github.com/webpack/tapable
// Definitions by: Cole Lawrence <https://github.com/colelawrence>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// >>> replace 'module tapable', 'declare module "tapable"'
module tapable {
	// <<< replace

	type TapType = "sync" | "promise" | "async"

	// The following parameters should be added by intersection typing (&)
	//  fn?: Function
	//  context?: boolean
	export type TapSharedOptions = {
		/** Name of Tap for debugging and referencing for execution order (using before) */
		name: string,

		/** Type of Tap @type {"sync" | "async" | "promise"} */
		type?: TapType,

		/** Ensure Tap inserted at this index in call chain */
		stage?: number,

		// tests/Hook.js
		/** Ensure Tap executes before this Tap or these Taps (by name) */
		before?: string | string[]
	}

	type TapResult = any

	// >>> loopTapGenerics
	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn1<A> = (a: A) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn1<A> = (a: A) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn1<A> = (a: A, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn1<T, A> = (ctx: T, a: A) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn1<T, A> = (ctx: T, a: A) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn1<T, A> = (ctx: T, a: A, callback: (err: Error | null, result?: TapResult) => void) => void;
	// <<< loopTapGenerics

	// >>> loopTapGenerics
	type HookSyncTaps1<A> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn1<A> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn1<A>): void;
	}
	// <<< loopTapGenerics

	// >>> loopTapGenerics
	type HookAsyncTaps1<A> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn1<A> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn1<A>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn1<A> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn1<A>): void;
	}
	// <<< loopTapGenerics


	// Taps with context
	type TapCtxOptions = { context: true } & TapSharedOptions;

	// >>> loopTapGenerics
	type HookSyncCtxTaps1<T, A> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn1<T, A> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn1<T, A>): void;
	}
	// <<< loopTapGenerics


	// >>> loopTapGenerics
	type HookAsyncCtxTaps1<T, A> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn1<T, A> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn1<T, A>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn1<T, A> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn1<T, A>): void;
	}
	// <<< loopTapGenerics

	// Hook Calls

	// TODO: I'm pretty sure it will always be void... but putting this here as placeholder
	type HookResult = void;

	// >>> loopTapGenerics
	type HookSyncCall1<A> = (a: A) => HookResult;
	type HookSyncCalls1<A> = {
		call: HookSyncCall1<A>;
	}
	// <<< loopTapGenerics

	// >>> loopTapGenerics
	type HookAsyncCall1<A> = (a: A, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall1<A> = (a: A) => Promise<HookResult>;
	type HookAsyncCalls1<A> = {
		promise: HookPromiseCall1<A>;
		callAsync: HookAsyncCall1<A>;
	}
	// <<< loopTapGenerics


	// >>> loopTapGenerics
	// Shared properties between async and sync
	type HookSharedProps1<T, A> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject1<A> | TapCtxObject1<T, A>)[]
		intercept(interceptor: HookInterceptor1<A> | HookCtxInterceptor1<T, A>): void
	}
	// <<< loopTapGenerics


	// >>> loopTapGenerics
	// Generics: Context, First Argument
	export type HookSync1<T, A>
		= HookSyncCalls1<A>
		& HookSyncCtxTaps1<T, A>
		& HookSyncTaps1<A>
		& HookSharedProps1<T, A>;
	// <<< loopTapGenerics

	// >>> loopTapGenerics
	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync1<T, A>
		= HookSync1<T, A>
		& HookAsyncCalls1<A>
		& HookAsyncCtxTaps1<T, A>
		& HookAsyncTaps1<A>
		& HookSharedProps1<T, A>;
	// <<< loopTapGenerics


	// >>> loopTapGenerics
	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook1<T, A>
		= HookSync1<T, A>
		& HookAsyncCalls1<A>
		& HookAsyncCtxTaps1<T, A>
		& HookAsyncTaps1<A>
		& HookSharedProps1<T, A>;
	// <<< loopTapGenerics

	// TODO: double check if `args` is optional
	// TODO: Is there a zero arg Hookable?
	interface HookableAsync {
		// >>> loopHookConstructor
		new <T = any, A = any>(args: [string]): HookAsync1<T, A>
		// <<< loopHookConstructor
	}
	interface HookableSync {
		// >>> loopHookConstructor
		new <T = any, A = any>(args: [string]): HookSync1<T, A>
		// <<< loopHookConstructor
	}

	// TODO: type permutations
	// TapObjects are the full form of a Tap
	// >>> loopTapGenerics
	export type TapCtxObject1<T, A> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn1<T, A> }
		| { type: "sync", fn: TapSyncCtxFn1<T, A> }
		| { type: "promise", fn: TapPromiseCtxFn1<T, A> });
	// <<< loopTapGenerics

	// >>> loopTapGenerics
	export type TapObject1<A> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn1<A> }
		| { type: "sync", fn: TapSyncFn1<A> }
		| { type: "promise", fn: TapPromiseFn1<A> });
	// <<< loopTapGenerics

	// >>> loopTapGenerics
	// Non-context interceptor
	export type HookInterceptor1<A> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn1<A>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn1<A>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject1<A>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject1<A>) => TapObject1<A>

		// This is false because HookInterceptor1 is the non-context version
		/** context defaults to false */
		context?: false
	}
	// <<< loopTapGenerics

	// >>> loopTapGenerics
	export type HookCtxInterceptor1<T, A> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn1<T, A>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn1<T, A>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject1<T, A>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject1<T, A>) => TapCtxObject1<T, A>

		context: true
	}
	// <<< loopTapGenerics

	export type HookMapInterceptor<K = any> = {
		factory?: (key: K, hook: HookObject) => HookObject
	}

	export interface HookMap<K = any, Hook = HookObject> {
		new(factory: (key: K) => Hook): this
		get(key: K): Hook
		for(key: K): Hook
		intercept(interceptor: HookMapInterceptor<K>): void
		tap<Tap extends TapObject>(key: K, options: Tap | string, fn?: Tap["fn"]): any | void
		tapAsync<Tap extends TapObject>(key: K, options: Tap | string, fn?: Tap["fn"]): any | void
		tapPromise<Tap extends TapObject>(key: K, options: Tap | string, fn?: Tap["fn"]): any | void
	}

	// >>> replace /declare /g, ""
	export declare const SyncHook: HookableSync;
	export declare const SyncBailHook: HookableSync;
	export declare const SyncWaterfallHook: HookableSync;
	export declare const SyncLoopHook: HookableSync;
	export declare const AsyncParallelHook: HookableAsync;
	export declare const AsyncParallelBailHook: HookableAsync;
	export declare const AsyncSeriesHook: HookableAsync;
	export declare const AsyncSeriesBailHook: HookableAsync;
	export declare const AsyncSeriesWaterfallHook: HookableAsync;
	export declare const HookMap: HookMap;

	export declare class Tapable {
		static addCompatLayer(instance: any): void;
	}
	// <<< replace

	// >>> removeAll
	let a = new AsyncParallelHook<{ letter: 'A' }, number>(["a"])
	// a.callAsync("2", e => console.log(`Error? ${e}`))
	a.tapAsync("HelloPlugin", (a) => {

	})
	a.tapAsync({ name: "GoodbyePlugin", context: true }, (ctx, a) => {
		return ctx.letter + ": " + a.toFixed(2)
	})
	// <<< removeAll

	// In-progress: All encompassing objects
	export type TapObject<
		T = any,
		// Loop produces A = any, B = any, C = any, etc... using /\bA\b/g replace
		// >>> loopLetter
		A = any,
		// <<< loopLetter_
		> =
		// >>> loopTapGenerics
		| TapObject1<A> | TapCtxObject1<T, A>
		// <<< loopTapGenerics_
		;

	export type HookObject<
		T = any,
		// Loop produces A = any, B = any, C = any, etc... using /\bA\b/g replace
		// >>> loopLetter
		A = any,
		// <<< loopLetter_
		> =
		// >>> loopTapGenerics
		| HookSync1<T, A> | HookAsync1<T, A>
		// <<< loopTapGenerics_
		;
}
