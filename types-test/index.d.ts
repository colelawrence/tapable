/** Generated from ../definitions/types.template.ts */
import { HookInterceptor0 } from "tapable";

// Type definitions for tapable v1.0.0-beta.5
// Project: https://github.com/webpack/tapable
// Definitions by: Cole Lawrence <https://github.com/colelawrence>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module "tapable" {

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

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn0 = () => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn0 = () => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn0 = (callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn0<T> = (ctx: T) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn0<T> = (ctx: T) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn0<T> = (ctx: T, callback: (err: Error | null, result?: TapResult) => void) => void;

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

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn2<A, B> = (a: A, b: B) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn2<A, B> = (a: A, b: B) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn2<A, B> = (a: A, b: B, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn2<T, A, B> = (ctx: T, a: A, b: B) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn2<T, A, B> = (ctx: T, a: A, b: B) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn2<T, A, B> = (ctx: T, a: A, b: B, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn3<A, B, C> = (a: A, b: B, c: C) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn3<A, B, C> = (a: A, b: B, c: C) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn3<A, B, C> = (a: A, b: B, c: C, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn3<T, A, B, C> = (ctx: T, a: A, b: B, c: C) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn3<T, A, B, C> = (ctx: T, a: A, b: B, c: C) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn3<T, A, B, C> = (ctx: T, a: A, b: B, c: C, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn4<A, B, C, D> = (a: A, b: B, c: C, d: D) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn4<A, B, C, D> = (a: A, b: B, c: C, d: D) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn4<A, B, C, D> = (a: A, b: B, c: C, d: D, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn4<T, A, B, C, D> = (ctx: T, a: A, b: B, c: C, d: D) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn4<T, A, B, C, D> = (ctx: T, a: A, b: B, c: C, d: D) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn4<T, A, B, C, D> = (ctx: T, a: A, b: B, c: C, d: D, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn5<A, B, C, D, E> = (a: A, b: B, c: C, d: D, e: E) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn5<A, B, C, D, E> = (a: A, b: B, c: C, d: D, e: E) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn5<A, B, C, D, E> = (a: A, b: B, c: C, d: D, e: E, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn5<T, A, B, C, D, E> = (ctx: T, a: A, b: B, c: C, d: D, e: E) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn5<T, A, B, C, D, E> = (ctx: T, a: A, b: B, c: C, d: D, e: E) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn5<T, A, B, C, D, E> = (ctx: T, a: A, b: B, c: C, d: D, e: E, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn6<A, B, C, D, E, F> = (a: A, b: B, c: C, d: D, e: E, f: F) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn6<A, B, C, D, E, F> = (a: A, b: B, c: C, d: D, e: E, f: F) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn6<A, B, C, D, E, F> = (a: A, b: B, c: C, d: D, e: E, f: F, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn6<T, A, B, C, D, E, F> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn6<T, A, B, C, D, E, F> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn6<T, A, B, C, D, E, F> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn7<A, B, C, D, E, F, G> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn7<A, B, C, D, E, F, G> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn7<A, B, C, D, E, F, G> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn7<T, A, B, C, D, E, F, G> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn7<T, A, B, C, D, E, F, G> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn7<T, A, B, C, D, E, F, G> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn8<A, B, C, D, E, F, G, H> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn8<A, B, C, D, E, F, G, H> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn8<A, B, C, D, E, F, G, H> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn8<T, A, B, C, D, E, F, G, H> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn8<T, A, B, C, D, E, F, G, H> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn8<T, A, B, C, D, E, F, G, H> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn9<A, B, C, D, E, F, G, H, I> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn9<A, B, C, D, E, F, G, H, I> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn9<A, B, C, D, E, F, G, H, I> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn9<T, A, B, C, D, E, F, G, H, I> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn9<T, A, B, C, D, E, F, G, H, I> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn9<T, A, B, C, D, E, F, G, H, I> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn10<A, B, C, D, E, F, G, H, I, J> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn10<A, B, C, D, E, F, G, H, I, J> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn10<A, B, C, D, E, F, G, H, I, J> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn10<T, A, B, C, D, E, F, G, H, I, J> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn10<T, A, B, C, D, E, F, G, H, I, J> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn10<T, A, B, C, D, E, F, G, H, I, J> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn11<A, B, C, D, E, F, G, H, I, J, K> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn11<A, B, C, D, E, F, G, H, I, J, K> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn11<A, B, C, D, E, F, G, H, I, J, K> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn11<T, A, B, C, D, E, F, G, H, I, J, K> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn11<T, A, B, C, D, E, F, G, H, I, J, K> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn11<T, A, B, C, D, E, F, G, H, I, J, K> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn12<A, B, C, D, E, F, G, H, I, J, K, L> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn12<A, B, C, D, E, F, G, H, I, J, K, L> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn12<A, B, C, D, E, F, G, H, I, J, K, L> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn12<T, A, B, C, D, E, F, G, H, I, J, K, L> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn12<T, A, B, C, D, E, F, G, H, I, J, K, L> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn12<T, A, B, C, D, E, F, G, H, I, J, K, L> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn13<A, B, C, D, E, F, G, H, I, J, K, L, M> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn13<A, B, C, D, E, F, G, H, I, J, K, L, M> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn13<A, B, C, D, E, F, G, H, I, J, K, L, M> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn13<T, A, B, C, D, E, F, G, H, I, J, K, L, M> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn13<T, A, B, C, D, E, F, G, H, I, J, K, L, M> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn13<T, A, B, C, D, E, F, G, H, I, J, K, L, M> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn14<A, B, C, D, E, F, G, H, I, J, K, L, M, N> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn14<A, B, C, D, E, F, G, H, I, J, K, L, M, N> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn14<A, B, C, D, E, F, G, H, I, J, K, L, M, N> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W, x: X) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W, x: X) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W, x: X, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W, x: X) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W, x: X) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W, x: X, callback: (err: Error | null, result?: TapResult) => void) => void;

	// Tap Functions with context
	/** Tap Function called synchronously */
	export type TapSyncFn24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W, x: X, y: Y) => TapResult;
	/** Tap Function called asynchronously with promise */
	export type TapPromiseFn24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W, x: X, y: Y) => Promise<TapResult>;
	/** Tap Function called asynchronously with callback */
	export type TapAsyncFn24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W, x: X, y: Y, callback: (err: Error | null, result?: TapResult) => void) => void;

	/** Tap Function with context called synchronously */
	export type TapSyncCtxFn24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W, x: X, y: Y) => void;
	/** Tap Function with context called asynchronously with promise */
	export type TapPromiseCtxFn24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W, x: X, y: Y) => Promise<TapResult>;
	/** Tap Function with context called asynchronously with callback */
	export type TapAsyncCtxFn24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> = (ctx: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W, x: X, y: Y, callback: (err: Error | null, result?: TapResult) => void) => void;

	type HookSyncTaps0 = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn0 }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn0): void;
	}

	type HookSyncTaps1<A> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn1<A> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn1<A>): void;
	}

	type HookSyncTaps2<A, B> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn2<A, B> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn2<A, B>): void;
	}

	type HookSyncTaps3<A, B, C> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn3<A, B, C> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn3<A, B, C>): void;
	}

	type HookSyncTaps4<A, B, C, D> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn4<A, B, C, D> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn4<A, B, C, D>): void;
	}

	type HookSyncTaps5<A, B, C, D, E> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn5<A, B, C, D, E> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn5<A, B, C, D, E>): void;
	}

	type HookSyncTaps6<A, B, C, D, E, F> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn6<A, B, C, D, E, F> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn6<A, B, C, D, E, F>): void;
	}

	type HookSyncTaps7<A, B, C, D, E, F, G> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn7<A, B, C, D, E, F, G> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn7<A, B, C, D, E, F, G>): void;
	}

	type HookSyncTaps8<A, B, C, D, E, F, G, H> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn8<A, B, C, D, E, F, G, H> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn8<A, B, C, D, E, F, G, H>): void;
	}

	type HookSyncTaps9<A, B, C, D, E, F, G, H, I> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn9<A, B, C, D, E, F, G, H, I> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn9<A, B, C, D, E, F, G, H, I>): void;
	}

	type HookSyncTaps10<A, B, C, D, E, F, G, H, I, J> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn10<A, B, C, D, E, F, G, H, I, J> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn10<A, B, C, D, E, F, G, H, I, J>): void;
	}

	type HookSyncTaps11<A, B, C, D, E, F, G, H, I, J, K> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn11<A, B, C, D, E, F, G, H, I, J, K> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn11<A, B, C, D, E, F, G, H, I, J, K>): void;
	}

	type HookSyncTaps12<A, B, C, D, E, F, G, H, I, J, K, L> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn12<A, B, C, D, E, F, G, H, I, J, K, L> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn12<A, B, C, D, E, F, G, H, I, J, K, L>): void;
	}

	type HookSyncTaps13<A, B, C, D, E, F, G, H, I, J, K, L, M> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn13<A, B, C, D, E, F, G, H, I, J, K, L, M> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn13<A, B, C, D, E, F, G, H, I, J, K, L, M>): void;
	}

	type HookSyncTaps14<A, B, C, D, E, F, G, H, I, J, K, L, M, N> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn14<A, B, C, D, E, F, G, H, I, J, K, L, M, N> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn14<A, B, C, D, E, F, G, H, I, J, K, L, M, N>): void;
	}

	type HookSyncTaps15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>): void;
	}

	type HookSyncTaps16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>): void;
	}

	type HookSyncTaps17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>): void;
	}

	type HookSyncTaps18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>): void;
	}

	type HookSyncTaps19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>): void;
	}

	type HookSyncTaps20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>): void;
	}

	type HookSyncTaps21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>): void;
	}

	type HookSyncTaps22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>): void;
	}

	type HookSyncTaps23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>): void;
	}

	type HookSyncTaps24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> = {
		/** Tap with included function */
		tap(options: TapSharedOptions & { fn: TapSyncFn24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> }): void;

		/** Tap with function as second argument */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(name: string | TapSharedOptions, fn: TapSyncFn24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>): void;
	}

	type HookAsyncTaps0 = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn0 }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn0): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn0 }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn0): void;
	}

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

	type HookAsyncTaps2<A, B> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn2<A, B> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn2<A, B>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn2<A, B> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn2<A, B>): void;
	}

	type HookAsyncTaps3<A, B, C> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn3<A, B, C> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn3<A, B, C>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn3<A, B, C> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn3<A, B, C>): void;
	}

	type HookAsyncTaps4<A, B, C, D> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn4<A, B, C, D> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn4<A, B, C, D>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn4<A, B, C, D> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn4<A, B, C, D>): void;
	}

	type HookAsyncTaps5<A, B, C, D, E> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn5<A, B, C, D, E> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn5<A, B, C, D, E>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn5<A, B, C, D, E> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn5<A, B, C, D, E>): void;
	}

	type HookAsyncTaps6<A, B, C, D, E, F> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn6<A, B, C, D, E, F> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn6<A, B, C, D, E, F>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn6<A, B, C, D, E, F> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn6<A, B, C, D, E, F>): void;
	}

	type HookAsyncTaps7<A, B, C, D, E, F, G> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn7<A, B, C, D, E, F, G> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn7<A, B, C, D, E, F, G>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn7<A, B, C, D, E, F, G> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn7<A, B, C, D, E, F, G>): void;
	}

	type HookAsyncTaps8<A, B, C, D, E, F, G, H> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn8<A, B, C, D, E, F, G, H> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn8<A, B, C, D, E, F, G, H>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn8<A, B, C, D, E, F, G, H> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn8<A, B, C, D, E, F, G, H>): void;
	}

	type HookAsyncTaps9<A, B, C, D, E, F, G, H, I> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn9<A, B, C, D, E, F, G, H, I> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn9<A, B, C, D, E, F, G, H, I>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn9<A, B, C, D, E, F, G, H, I> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn9<A, B, C, D, E, F, G, H, I>): void;
	}

	type HookAsyncTaps10<A, B, C, D, E, F, G, H, I, J> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn10<A, B, C, D, E, F, G, H, I, J> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn10<A, B, C, D, E, F, G, H, I, J>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn10<A, B, C, D, E, F, G, H, I, J> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn10<A, B, C, D, E, F, G, H, I, J>): void;
	}

	type HookAsyncTaps11<A, B, C, D, E, F, G, H, I, J, K> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn11<A, B, C, D, E, F, G, H, I, J, K> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn11<A, B, C, D, E, F, G, H, I, J, K>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn11<A, B, C, D, E, F, G, H, I, J, K> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn11<A, B, C, D, E, F, G, H, I, J, K>): void;
	}

	type HookAsyncTaps12<A, B, C, D, E, F, G, H, I, J, K, L> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn12<A, B, C, D, E, F, G, H, I, J, K, L> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn12<A, B, C, D, E, F, G, H, I, J, K, L>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn12<A, B, C, D, E, F, G, H, I, J, K, L> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn12<A, B, C, D, E, F, G, H, I, J, K, L>): void;
	}

	type HookAsyncTaps13<A, B, C, D, E, F, G, H, I, J, K, L, M> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn13<A, B, C, D, E, F, G, H, I, J, K, L, M> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn13<A, B, C, D, E, F, G, H, I, J, K, L, M>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn13<A, B, C, D, E, F, G, H, I, J, K, L, M> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn13<A, B, C, D, E, F, G, H, I, J, K, L, M>): void;
	}

	type HookAsyncTaps14<A, B, C, D, E, F, G, H, I, J, K, L, M, N> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn14<A, B, C, D, E, F, G, H, I, J, K, L, M, N> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn14<A, B, C, D, E, F, G, H, I, J, K, L, M, N>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn14<A, B, C, D, E, F, G, H, I, J, K, L, M, N> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn14<A, B, C, D, E, F, G, H, I, J, K, L, M, N>): void;
	}

	type HookAsyncTaps15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>): void;
	}

	type HookAsyncTaps16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>): void;
	}

	type HookAsyncTaps17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>): void;
	}

	type HookAsyncTaps18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>): void;
	}

	type HookAsyncTaps19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>): void;
	}

	type HookAsyncTaps20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>): void;
	}

	type HookAsyncTaps21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>): void;
	}

	type HookAsyncTaps22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>): void;
	}

	type HookAsyncTaps23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>): void;
	}

	type HookAsyncTaps24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> = {
		// Tap with included function
		tapPromise(options: TapSharedOptions & { fn: TapPromiseFn24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> }): void;
		// Tap with function as second argument
		tapPromise(name: string | TapSharedOptions, fn: TapPromiseFn24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>): void;
		// Tap with included function
		tapAsync(options: TapSharedOptions & { fn: TapAsyncFn24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> }): void;
		// Tap with function as second argument
		tapAsync(name: string | TapSharedOptions, fn: TapAsyncFn24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>): void;
	}


	// Taps with context
	type TapCtxOptions = { context: true } & TapSharedOptions;

	type HookSyncCtxTaps0<T> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn0<T> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn0<T>): void;
	}

	type HookSyncCtxTaps1<T, A> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn1<T, A> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn1<T, A>): void;
	}

	type HookSyncCtxTaps2<T, A, B> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn2<T, A, B> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn2<T, A, B>): void;
	}

	type HookSyncCtxTaps3<T, A, B, C> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn3<T, A, B, C> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn3<T, A, B, C>): void;
	}

	type HookSyncCtxTaps4<T, A, B, C, D> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn4<T, A, B, C, D> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn4<T, A, B, C, D>): void;
	}

	type HookSyncCtxTaps5<T, A, B, C, D, E> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn5<T, A, B, C, D, E> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn5<T, A, B, C, D, E>): void;
	}

	type HookSyncCtxTaps6<T, A, B, C, D, E, F> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn6<T, A, B, C, D, E, F> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn6<T, A, B, C, D, E, F>): void;
	}

	type HookSyncCtxTaps7<T, A, B, C, D, E, F, G> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn7<T, A, B, C, D, E, F, G> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn7<T, A, B, C, D, E, F, G>): void;
	}

	type HookSyncCtxTaps8<T, A, B, C, D, E, F, G, H> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn8<T, A, B, C, D, E, F, G, H> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn8<T, A, B, C, D, E, F, G, H>): void;
	}

	type HookSyncCtxTaps9<T, A, B, C, D, E, F, G, H, I> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn9<T, A, B, C, D, E, F, G, H, I> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn9<T, A, B, C, D, E, F, G, H, I>): void;
	}

	type HookSyncCtxTaps10<T, A, B, C, D, E, F, G, H, I, J> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn10<T, A, B, C, D, E, F, G, H, I, J> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn10<T, A, B, C, D, E, F, G, H, I, J>): void;
	}

	type HookSyncCtxTaps11<T, A, B, C, D, E, F, G, H, I, J, K> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn11<T, A, B, C, D, E, F, G, H, I, J, K> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn11<T, A, B, C, D, E, F, G, H, I, J, K>): void;
	}

	type HookSyncCtxTaps12<T, A, B, C, D, E, F, G, H, I, J, K, L> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn12<T, A, B, C, D, E, F, G, H, I, J, K, L> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn12<T, A, B, C, D, E, F, G, H, I, J, K, L>): void;
	}

	type HookSyncCtxTaps13<T, A, B, C, D, E, F, G, H, I, J, K, L, M> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn13<T, A, B, C, D, E, F, G, H, I, J, K, L, M> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>): void;
	}

	type HookSyncCtxTaps14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>): void;
	}

	type HookSyncCtxTaps15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>): void;
	}

	type HookSyncCtxTaps16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>): void;
	}

	type HookSyncCtxTaps17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>): void;
	}

	type HookSyncCtxTaps18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>): void;
	}

	type HookSyncCtxTaps19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>): void;
	}

	type HookSyncCtxTaps20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>): void;
	}

	type HookSyncCtxTaps21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>): void;
	}

	type HookSyncCtxTaps22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>): void;
	}

	type HookSyncCtxTaps23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>): void;
	}

	type HookSyncCtxTaps24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> = {
		/** Tap with included function */
		tap(options: TapCtxOptions & { fn: TapSyncCtxFn24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> }): void;
		/** Tap with function */
		// TODO: Is the overriding behavior ambiguous? Currently, options.fn overrides second arg
		//  Same thing happens for type: "sync" | "async" | "promise"...
		tap(options: TapCtxOptions, fn: TapSyncCtxFn24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>): void;
	}


	type HookAsyncCtxTaps0<T> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn0<T> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn0<T>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn0<T> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn0<T>): void;
	}

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

	type HookAsyncCtxTaps2<T, A, B> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn2<T, A, B> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn2<T, A, B>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn2<T, A, B> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn2<T, A, B>): void;
	}

	type HookAsyncCtxTaps3<T, A, B, C> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn3<T, A, B, C> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn3<T, A, B, C>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn3<T, A, B, C> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn3<T, A, B, C>): void;
	}

	type HookAsyncCtxTaps4<T, A, B, C, D> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn4<T, A, B, C, D> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn4<T, A, B, C, D>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn4<T, A, B, C, D> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn4<T, A, B, C, D>): void;
	}

	type HookAsyncCtxTaps5<T, A, B, C, D, E> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn5<T, A, B, C, D, E> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn5<T, A, B, C, D, E>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn5<T, A, B, C, D, E> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn5<T, A, B, C, D, E>): void;
	}

	type HookAsyncCtxTaps6<T, A, B, C, D, E, F> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn6<T, A, B, C, D, E, F> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn6<T, A, B, C, D, E, F>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn6<T, A, B, C, D, E, F> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn6<T, A, B, C, D, E, F>): void;
	}

	type HookAsyncCtxTaps7<T, A, B, C, D, E, F, G> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn7<T, A, B, C, D, E, F, G> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn7<T, A, B, C, D, E, F, G>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn7<T, A, B, C, D, E, F, G> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn7<T, A, B, C, D, E, F, G>): void;
	}

	type HookAsyncCtxTaps8<T, A, B, C, D, E, F, G, H> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn8<T, A, B, C, D, E, F, G, H> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn8<T, A, B, C, D, E, F, G, H>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn8<T, A, B, C, D, E, F, G, H> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn8<T, A, B, C, D, E, F, G, H>): void;
	}

	type HookAsyncCtxTaps9<T, A, B, C, D, E, F, G, H, I> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn9<T, A, B, C, D, E, F, G, H, I> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn9<T, A, B, C, D, E, F, G, H, I>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn9<T, A, B, C, D, E, F, G, H, I> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn9<T, A, B, C, D, E, F, G, H, I>): void;
	}

	type HookAsyncCtxTaps10<T, A, B, C, D, E, F, G, H, I, J> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn10<T, A, B, C, D, E, F, G, H, I, J> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn10<T, A, B, C, D, E, F, G, H, I, J>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn10<T, A, B, C, D, E, F, G, H, I, J> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn10<T, A, B, C, D, E, F, G, H, I, J>): void;
	}

	type HookAsyncCtxTaps11<T, A, B, C, D, E, F, G, H, I, J, K> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn11<T, A, B, C, D, E, F, G, H, I, J, K> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn11<T, A, B, C, D, E, F, G, H, I, J, K>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn11<T, A, B, C, D, E, F, G, H, I, J, K> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn11<T, A, B, C, D, E, F, G, H, I, J, K>): void;
	}

	type HookAsyncCtxTaps12<T, A, B, C, D, E, F, G, H, I, J, K, L> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn12<T, A, B, C, D, E, F, G, H, I, J, K, L> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn12<T, A, B, C, D, E, F, G, H, I, J, K, L>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn12<T, A, B, C, D, E, F, G, H, I, J, K, L> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn12<T, A, B, C, D, E, F, G, H, I, J, K, L>): void;
	}

	type HookAsyncCtxTaps13<T, A, B, C, D, E, F, G, H, I, J, K, L, M> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn13<T, A, B, C, D, E, F, G, H, I, J, K, L, M> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn13<T, A, B, C, D, E, F, G, H, I, J, K, L, M> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>): void;
	}

	type HookAsyncCtxTaps14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>): void;
	}

	type HookAsyncCtxTaps15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>): void;
	}

	type HookAsyncCtxTaps16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>): void;
	}

	type HookAsyncCtxTaps17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>): void;
	}

	type HookAsyncCtxTaps18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>): void;
	}

	type HookAsyncCtxTaps19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>): void;
	}

	type HookAsyncCtxTaps20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>): void;
	}

	type HookAsyncCtxTaps21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>): void;
	}

	type HookAsyncCtxTaps22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>): void;
	}

	type HookAsyncCtxTaps23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>): void;
	}

	type HookAsyncCtxTaps24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> = {
		/** Tap with included function */
		tapAsync(options: TapCtxOptions & { fn: TapAsyncCtxFn24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> }): void;
		/** Tap with function as second argument */
		tapAsync(options: TapCtxOptions, fn: TapAsyncCtxFn24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>): void;
		/** Tap with included function */
		tapPromise(options: TapCtxOptions & { fn: TapPromiseCtxFn24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> }): void;
		/** Tap with function as second argument */
		tapPromise(options: TapCtxOptions, fn: TapPromiseCtxFn24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>): void;
	}

	// Hook Calls

	// TODO: I'm pretty sure it will always be void... but putting this here as placeholder
	type HookResult = void;

	type HookSyncCall0 = () => HookResult;
	type HookSyncCalls0 = {
		call: HookSyncCall0;
	}

	type HookSyncCall1<A> = (a: A) => HookResult;
	type HookSyncCalls1<A> = {
		call: HookSyncCall1<A>;
	}

	type HookSyncCall2<A, B> = (a: A, b: B) => HookResult;
	type HookSyncCalls2<A, B> = {
		call: HookSyncCall2<A, B>;
	}

	type HookSyncCall3<A, B, C> = (a: A, b: B, c: C) => HookResult;
	type HookSyncCalls3<A, B, C> = {
		call: HookSyncCall3<A, B, C>;
	}

	type HookSyncCall4<A, B, C, D> = (a: A, b: B, c: C, d: D) => HookResult;
	type HookSyncCalls4<A, B, C, D> = {
		call: HookSyncCall4<A, B, C, D>;
	}

	type HookSyncCall5<A, B, C, D, E> = (a: A, b: B, c: C, d: D, e: E) => HookResult;
	type HookSyncCalls5<A, B, C, D, E> = {
		call: HookSyncCall5<A, B, C, D, E>;
	}

	type HookSyncCall6<A, B, C, D, E, F> = (a: A, b: B, c: C, d: D, e: E, f: F) => HookResult;
	type HookSyncCalls6<A, B, C, D, E, F> = {
		call: HookSyncCall6<A, B, C, D, E, F>;
	}

	type HookSyncCall7<A, B, C, D, E, F, G> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => HookResult;
	type HookSyncCalls7<A, B, C, D, E, F, G> = {
		call: HookSyncCall7<A, B, C, D, E, F, G>;
	}

	type HookSyncCall8<A, B, C, D, E, F, G, H> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => HookResult;
	type HookSyncCalls8<A, B, C, D, E, F, G, H> = {
		call: HookSyncCall8<A, B, C, D, E, F, G, H>;
	}

	type HookSyncCall9<A, B, C, D, E, F, G, H, I> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => HookResult;
	type HookSyncCalls9<A, B, C, D, E, F, G, H, I> = {
		call: HookSyncCall9<A, B, C, D, E, F, G, H, I>;
	}

	type HookSyncCall10<A, B, C, D, E, F, G, H, I, J> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => HookResult;
	type HookSyncCalls10<A, B, C, D, E, F, G, H, I, J> = {
		call: HookSyncCall10<A, B, C, D, E, F, G, H, I, J>;
	}

	type HookSyncCall11<A, B, C, D, E, F, G, H, I, J, K> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => HookResult;
	type HookSyncCalls11<A, B, C, D, E, F, G, H, I, J, K> = {
		call: HookSyncCall11<A, B, C, D, E, F, G, H, I, J, K>;
	}

	type HookSyncCall12<A, B, C, D, E, F, G, H, I, J, K, L> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L) => HookResult;
	type HookSyncCalls12<A, B, C, D, E, F, G, H, I, J, K, L> = {
		call: HookSyncCall12<A, B, C, D, E, F, G, H, I, J, K, L>;
	}

	type HookSyncCall13<A, B, C, D, E, F, G, H, I, J, K, L, M> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M) => HookResult;
	type HookSyncCalls13<A, B, C, D, E, F, G, H, I, J, K, L, M> = {
		call: HookSyncCall13<A, B, C, D, E, F, G, H, I, J, K, L, M>;
	}

	type HookSyncCall14<A, B, C, D, E, F, G, H, I, J, K, L, M, N> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N) => HookResult;
	type HookSyncCalls14<A, B, C, D, E, F, G, H, I, J, K, L, M, N> = {
		call: HookSyncCall14<A, B, C, D, E, F, G, H, I, J, K, L, M, N>;
	}

	type HookSyncCall15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O) => HookResult;
	type HookSyncCalls15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> = {
		call: HookSyncCall15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>;
	}

	type HookSyncCall16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P) => HookResult;
	type HookSyncCalls16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> = {
		call: HookSyncCall16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>;
	}

	type HookSyncCall17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q) => HookResult;
	type HookSyncCalls17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> = {
		call: HookSyncCall17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>;
	}

	type HookSyncCall18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R) => HookResult;
	type HookSyncCalls18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> = {
		call: HookSyncCall18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>;
	}

	type HookSyncCall19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S) => HookResult;
	type HookSyncCalls19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> = {
		call: HookSyncCall19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>;
	}

	type HookSyncCall20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U) => HookResult;
	type HookSyncCalls20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> = {
		call: HookSyncCall20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>;
	}

	type HookSyncCall21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V) => HookResult;
	type HookSyncCalls21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> = {
		call: HookSyncCall21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>;
	}

	type HookSyncCall22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W) => HookResult;
	type HookSyncCalls22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> = {
		call: HookSyncCall22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>;
	}

	type HookSyncCall23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W, x: X) => HookResult;
	type HookSyncCalls23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> = {
		call: HookSyncCall23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>;
	}

	type HookSyncCall24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W, x: X, y: Y) => HookResult;
	type HookSyncCalls24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> = {
		call: HookSyncCall24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>;
	}

	type HookAsyncCall0 = (callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall0 = () => Promise<HookResult>;
	type HookAsyncCalls0 = {
		promise: HookPromiseCall0;
		callAsync: HookAsyncCall0;
	}

	type HookAsyncCall1<A> = (a: A, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall1<A> = (a: A) => Promise<HookResult>;
	type HookAsyncCalls1<A> = {
		promise: HookPromiseCall1<A>;
		callAsync: HookAsyncCall1<A>;
	}

	type HookAsyncCall2<A, B> = (a: A, b: B, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall2<A, B> = (a: A, b: B) => Promise<HookResult>;
	type HookAsyncCalls2<A, B> = {
		promise: HookPromiseCall2<A, B>;
		callAsync: HookAsyncCall2<A, B>;
	}

	type HookAsyncCall3<A, B, C> = (a: A, b: B, c: C, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall3<A, B, C> = (a: A, b: B, c: C) => Promise<HookResult>;
	type HookAsyncCalls3<A, B, C> = {
		promise: HookPromiseCall3<A, B, C>;
		callAsync: HookAsyncCall3<A, B, C>;
	}

	type HookAsyncCall4<A, B, C, D> = (a: A, b: B, c: C, d: D, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall4<A, B, C, D> = (a: A, b: B, c: C, d: D) => Promise<HookResult>;
	type HookAsyncCalls4<A, B, C, D> = {
		promise: HookPromiseCall4<A, B, C, D>;
		callAsync: HookAsyncCall4<A, B, C, D>;
	}

	type HookAsyncCall5<A, B, C, D, E> = (a: A, b: B, c: C, d: D, e: E, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall5<A, B, C, D, E> = (a: A, b: B, c: C, d: D, e: E) => Promise<HookResult>;
	type HookAsyncCalls5<A, B, C, D, E> = {
		promise: HookPromiseCall5<A, B, C, D, E>;
		callAsync: HookAsyncCall5<A, B, C, D, E>;
	}

	type HookAsyncCall6<A, B, C, D, E, F> = (a: A, b: B, c: C, d: D, e: E, f: F, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall6<A, B, C, D, E, F> = (a: A, b: B, c: C, d: D, e: E, f: F) => Promise<HookResult>;
	type HookAsyncCalls6<A, B, C, D, E, F> = {
		promise: HookPromiseCall6<A, B, C, D, E, F>;
		callAsync: HookAsyncCall6<A, B, C, D, E, F>;
	}

	type HookAsyncCall7<A, B, C, D, E, F, G> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall7<A, B, C, D, E, F, G> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => Promise<HookResult>;
	type HookAsyncCalls7<A, B, C, D, E, F, G> = {
		promise: HookPromiseCall7<A, B, C, D, E, F, G>;
		callAsync: HookAsyncCall7<A, B, C, D, E, F, G>;
	}

	type HookAsyncCall8<A, B, C, D, E, F, G, H> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall8<A, B, C, D, E, F, G, H> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => Promise<HookResult>;
	type HookAsyncCalls8<A, B, C, D, E, F, G, H> = {
		promise: HookPromiseCall8<A, B, C, D, E, F, G, H>;
		callAsync: HookAsyncCall8<A, B, C, D, E, F, G, H>;
	}

	type HookAsyncCall9<A, B, C, D, E, F, G, H, I> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall9<A, B, C, D, E, F, G, H, I> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => Promise<HookResult>;
	type HookAsyncCalls9<A, B, C, D, E, F, G, H, I> = {
		promise: HookPromiseCall9<A, B, C, D, E, F, G, H, I>;
		callAsync: HookAsyncCall9<A, B, C, D, E, F, G, H, I>;
	}

	type HookAsyncCall10<A, B, C, D, E, F, G, H, I, J> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall10<A, B, C, D, E, F, G, H, I, J> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => Promise<HookResult>;
	type HookAsyncCalls10<A, B, C, D, E, F, G, H, I, J> = {
		promise: HookPromiseCall10<A, B, C, D, E, F, G, H, I, J>;
		callAsync: HookAsyncCall10<A, B, C, D, E, F, G, H, I, J>;
	}

	type HookAsyncCall11<A, B, C, D, E, F, G, H, I, J, K> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall11<A, B, C, D, E, F, G, H, I, J, K> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => Promise<HookResult>;
	type HookAsyncCalls11<A, B, C, D, E, F, G, H, I, J, K> = {
		promise: HookPromiseCall11<A, B, C, D, E, F, G, H, I, J, K>;
		callAsync: HookAsyncCall11<A, B, C, D, E, F, G, H, I, J, K>;
	}

	type HookAsyncCall12<A, B, C, D, E, F, G, H, I, J, K, L> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall12<A, B, C, D, E, F, G, H, I, J, K, L> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L) => Promise<HookResult>;
	type HookAsyncCalls12<A, B, C, D, E, F, G, H, I, J, K, L> = {
		promise: HookPromiseCall12<A, B, C, D, E, F, G, H, I, J, K, L>;
		callAsync: HookAsyncCall12<A, B, C, D, E, F, G, H, I, J, K, L>;
	}

	type HookAsyncCall13<A, B, C, D, E, F, G, H, I, J, K, L, M> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall13<A, B, C, D, E, F, G, H, I, J, K, L, M> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M) => Promise<HookResult>;
	type HookAsyncCalls13<A, B, C, D, E, F, G, H, I, J, K, L, M> = {
		promise: HookPromiseCall13<A, B, C, D, E, F, G, H, I, J, K, L, M>;
		callAsync: HookAsyncCall13<A, B, C, D, E, F, G, H, I, J, K, L, M>;
	}

	type HookAsyncCall14<A, B, C, D, E, F, G, H, I, J, K, L, M, N> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall14<A, B, C, D, E, F, G, H, I, J, K, L, M, N> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N) => Promise<HookResult>;
	type HookAsyncCalls14<A, B, C, D, E, F, G, H, I, J, K, L, M, N> = {
		promise: HookPromiseCall14<A, B, C, D, E, F, G, H, I, J, K, L, M, N>;
		callAsync: HookAsyncCall14<A, B, C, D, E, F, G, H, I, J, K, L, M, N>;
	}

	type HookAsyncCall15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O) => Promise<HookResult>;
	type HookAsyncCalls15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> = {
		promise: HookPromiseCall15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>;
		callAsync: HookAsyncCall15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>;
	}

	type HookAsyncCall16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P) => Promise<HookResult>;
	type HookAsyncCalls16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> = {
		promise: HookPromiseCall16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>;
		callAsync: HookAsyncCall16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>;
	}

	type HookAsyncCall17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q) => Promise<HookResult>;
	type HookAsyncCalls17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> = {
		promise: HookPromiseCall17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>;
		callAsync: HookAsyncCall17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>;
	}

	type HookAsyncCall18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R) => Promise<HookResult>;
	type HookAsyncCalls18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> = {
		promise: HookPromiseCall18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>;
		callAsync: HookAsyncCall18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>;
	}

	type HookAsyncCall19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S) => Promise<HookResult>;
	type HookAsyncCalls19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> = {
		promise: HookPromiseCall19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>;
		callAsync: HookAsyncCall19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>;
	}

	type HookAsyncCall20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U) => Promise<HookResult>;
	type HookAsyncCalls20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> = {
		promise: HookPromiseCall20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>;
		callAsync: HookAsyncCall20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>;
	}

	type HookAsyncCall21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V) => Promise<HookResult>;
	type HookAsyncCalls21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> = {
		promise: HookPromiseCall21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>;
		callAsync: HookAsyncCall21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>;
	}

	type HookAsyncCall22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W) => Promise<HookResult>;
	type HookAsyncCalls22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> = {
		promise: HookPromiseCall22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>;
		callAsync: HookAsyncCall22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>;
	}

	type HookAsyncCall23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W, x: X, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W, x: X) => Promise<HookResult>;
	type HookAsyncCalls23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> = {
		promise: HookPromiseCall23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>;
		callAsync: HookAsyncCall23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>;
	}

	type HookAsyncCall24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W, x: X, y: Y, callback: (err: Error | null, result?: HookResult) => void) => void;
	type HookPromiseCall24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L, m: M, n: N, o: O, p: P, q: Q, r: R, s: S, u: U, v: V, w: W, x: X, y: Y) => Promise<HookResult>;
	type HookAsyncCalls24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> = {
		promise: HookPromiseCall24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>;
		callAsync: HookAsyncCall24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>;
	}


	// Shared properties between async and sync
	type HookSharedProps0<T> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject0 | TapCtxObject0<T>)[]
		intercept(interceptor: HookInterceptor0 | HookCtxInterceptor0<T>): void
	}

	// Shared properties between async and sync
	type HookSharedProps1<T, A> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject1<A> | TapCtxObject1<T, A>)[]
		intercept(interceptor: HookInterceptor1<A> | HookCtxInterceptor1<T, A>): void
	}

	// Shared properties between async and sync
	type HookSharedProps2<T, A, B> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject2<A, B> | TapCtxObject2<T, A, B>)[]
		intercept(interceptor: HookInterceptor2<A, B> | HookCtxInterceptor2<T, A, B>): void
	}

	// Shared properties between async and sync
	type HookSharedProps3<T, A, B, C> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject3<A, B, C> | TapCtxObject3<T, A, B, C>)[]
		intercept(interceptor: HookInterceptor3<A, B, C> | HookCtxInterceptor3<T, A, B, C>): void
	}

	// Shared properties between async and sync
	type HookSharedProps4<T, A, B, C, D> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject4<A, B, C, D> | TapCtxObject4<T, A, B, C, D>)[]
		intercept(interceptor: HookInterceptor4<A, B, C, D> | HookCtxInterceptor4<T, A, B, C, D>): void
	}

	// Shared properties between async and sync
	type HookSharedProps5<T, A, B, C, D, E> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject5<A, B, C, D, E> | TapCtxObject5<T, A, B, C, D, E>)[]
		intercept(interceptor: HookInterceptor5<A, B, C, D, E> | HookCtxInterceptor5<T, A, B, C, D, E>): void
	}

	// Shared properties between async and sync
	type HookSharedProps6<T, A, B, C, D, E, F> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject6<A, B, C, D, E, F> | TapCtxObject6<T, A, B, C, D, E, F>)[]
		intercept(interceptor: HookInterceptor6<A, B, C, D, E, F> | HookCtxInterceptor6<T, A, B, C, D, E, F>): void
	}

	// Shared properties between async and sync
	type HookSharedProps7<T, A, B, C, D, E, F, G> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject7<A, B, C, D, E, F, G> | TapCtxObject7<T, A, B, C, D, E, F, G>)[]
		intercept(interceptor: HookInterceptor7<A, B, C, D, E, F, G> | HookCtxInterceptor7<T, A, B, C, D, E, F, G>): void
	}

	// Shared properties between async and sync
	type HookSharedProps8<T, A, B, C, D, E, F, G, H> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject8<A, B, C, D, E, F, G, H> | TapCtxObject8<T, A, B, C, D, E, F, G, H>)[]
		intercept(interceptor: HookInterceptor8<A, B, C, D, E, F, G, H> | HookCtxInterceptor8<T, A, B, C, D, E, F, G, H>): void
	}

	// Shared properties between async and sync
	type HookSharedProps9<T, A, B, C, D, E, F, G, H, I> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject9<A, B, C, D, E, F, G, H, I> | TapCtxObject9<T, A, B, C, D, E, F, G, H, I>)[]
		intercept(interceptor: HookInterceptor9<A, B, C, D, E, F, G, H, I> | HookCtxInterceptor9<T, A, B, C, D, E, F, G, H, I>): void
	}

	// Shared properties between async and sync
	type HookSharedProps10<T, A, B, C, D, E, F, G, H, I, J> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject10<A, B, C, D, E, F, G, H, I, J> | TapCtxObject10<T, A, B, C, D, E, F, G, H, I, J>)[]
		intercept(interceptor: HookInterceptor10<A, B, C, D, E, F, G, H, I, J> | HookCtxInterceptor10<T, A, B, C, D, E, F, G, H, I, J>): void
	}

	// Shared properties between async and sync
	type HookSharedProps11<T, A, B, C, D, E, F, G, H, I, J, K> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject11<A, B, C, D, E, F, G, H, I, J, K> | TapCtxObject11<T, A, B, C, D, E, F, G, H, I, J, K>)[]
		intercept(interceptor: HookInterceptor11<A, B, C, D, E, F, G, H, I, J, K> | HookCtxInterceptor11<T, A, B, C, D, E, F, G, H, I, J, K>): void
	}

	// Shared properties between async and sync
	type HookSharedProps12<T, A, B, C, D, E, F, G, H, I, J, K, L> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject12<A, B, C, D, E, F, G, H, I, J, K, L> | TapCtxObject12<T, A, B, C, D, E, F, G, H, I, J, K, L>)[]
		intercept(interceptor: HookInterceptor12<A, B, C, D, E, F, G, H, I, J, K, L> | HookCtxInterceptor12<T, A, B, C, D, E, F, G, H, I, J, K, L>): void
	}

	// Shared properties between async and sync
	type HookSharedProps13<T, A, B, C, D, E, F, G, H, I, J, K, L, M> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject13<A, B, C, D, E, F, G, H, I, J, K, L, M> | TapCtxObject13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>)[]
		intercept(interceptor: HookInterceptor13<A, B, C, D, E, F, G, H, I, J, K, L, M> | HookCtxInterceptor13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>): void
	}

	// Shared properties between async and sync
	type HookSharedProps14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject14<A, B, C, D, E, F, G, H, I, J, K, L, M, N> | TapCtxObject14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>)[]
		intercept(interceptor: HookInterceptor14<A, B, C, D, E, F, G, H, I, J, K, L, M, N> | HookCtxInterceptor14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>): void
	}

	// Shared properties between async and sync
	type HookSharedProps15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> | TapCtxObject15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>)[]
		intercept(interceptor: HookInterceptor15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> | HookCtxInterceptor15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>): void
	}

	// Shared properties between async and sync
	type HookSharedProps16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> | TapCtxObject16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>)[]
		intercept(interceptor: HookInterceptor16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> | HookCtxInterceptor16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>): void
	}

	// Shared properties between async and sync
	type HookSharedProps17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> | TapCtxObject17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>)[]
		intercept(interceptor: HookInterceptor17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> | HookCtxInterceptor17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>): void
	}

	// Shared properties between async and sync
	type HookSharedProps18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> | TapCtxObject18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>)[]
		intercept(interceptor: HookInterceptor18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> | HookCtxInterceptor18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>): void
	}

	// Shared properties between async and sync
	type HookSharedProps19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> | TapCtxObject19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>)[]
		intercept(interceptor: HookInterceptor19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> | HookCtxInterceptor19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>): void
	}

	// Shared properties between async and sync
	type HookSharedProps20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> | TapCtxObject20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>)[]
		intercept(interceptor: HookInterceptor20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> | HookCtxInterceptor20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>): void
	}

	// Shared properties between async and sync
	type HookSharedProps21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> | TapCtxObject21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>)[]
		intercept(interceptor: HookInterceptor21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> | HookCtxInterceptor21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>): void
	}

	// Shared properties between async and sync
	type HookSharedProps22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> | TapCtxObject22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>)[]
		intercept(interceptor: HookInterceptor22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> | HookCtxInterceptor22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>): void
	}

	// Shared properties between async and sync
	type HookSharedProps23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> | TapCtxObject23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>)[]
		intercept(interceptor: HookInterceptor23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> | HookCtxInterceptor23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>): void
	}

	// Shared properties between async and sync
	type HookSharedProps24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> = {
		// TODO: private? what are the options for hook?
		withOptions(options: any): any

		isUsed(): boolean

		taps: (TapObject24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> | TapCtxObject24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>)[]
		intercept(interceptor: HookInterceptor24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> | HookCtxInterceptor24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>): void
	}


	// Generics: Context, First Argument
	export type HookSync0<T>
		= HookSyncCalls0
		& HookSyncCtxTaps0<T>
		& HookSyncTaps0
		& HookSharedProps0<T>;

	// Generics: Context, First Argument
	export type HookSync1<T, A>
		= HookSyncCalls1<A>
		& HookSyncCtxTaps1<T, A>
		& HookSyncTaps1<A>
		& HookSharedProps1<T, A>;

	// Generics: Context, First Argument
	export type HookSync2<T, A, B>
		= HookSyncCalls2<A, B>
		& HookSyncCtxTaps2<T, A, B>
		& HookSyncTaps2<A, B>
		& HookSharedProps2<T, A, B>;

	// Generics: Context, First Argument
	export type HookSync3<T, A, B, C>
		= HookSyncCalls3<A, B, C>
		& HookSyncCtxTaps3<T, A, B, C>
		& HookSyncTaps3<A, B, C>
		& HookSharedProps3<T, A, B, C>;

	// Generics: Context, First Argument
	export type HookSync4<T, A, B, C, D>
		= HookSyncCalls4<A, B, C, D>
		& HookSyncCtxTaps4<T, A, B, C, D>
		& HookSyncTaps4<A, B, C, D>
		& HookSharedProps4<T, A, B, C, D>;

	// Generics: Context, First Argument
	export type HookSync5<T, A, B, C, D, E>
		= HookSyncCalls5<A, B, C, D, E>
		& HookSyncCtxTaps5<T, A, B, C, D, E>
		& HookSyncTaps5<A, B, C, D, E>
		& HookSharedProps5<T, A, B, C, D, E>;

	// Generics: Context, First Argument
	export type HookSync6<T, A, B, C, D, E, F>
		= HookSyncCalls6<A, B, C, D, E, F>
		& HookSyncCtxTaps6<T, A, B, C, D, E, F>
		& HookSyncTaps6<A, B, C, D, E, F>
		& HookSharedProps6<T, A, B, C, D, E, F>;

	// Generics: Context, First Argument
	export type HookSync7<T, A, B, C, D, E, F, G>
		= HookSyncCalls7<A, B, C, D, E, F, G>
		& HookSyncCtxTaps7<T, A, B, C, D, E, F, G>
		& HookSyncTaps7<A, B, C, D, E, F, G>
		& HookSharedProps7<T, A, B, C, D, E, F, G>;

	// Generics: Context, First Argument
	export type HookSync8<T, A, B, C, D, E, F, G, H>
		= HookSyncCalls8<A, B, C, D, E, F, G, H>
		& HookSyncCtxTaps8<T, A, B, C, D, E, F, G, H>
		& HookSyncTaps8<A, B, C, D, E, F, G, H>
		& HookSharedProps8<T, A, B, C, D, E, F, G, H>;

	// Generics: Context, First Argument
	export type HookSync9<T, A, B, C, D, E, F, G, H, I>
		= HookSyncCalls9<A, B, C, D, E, F, G, H, I>
		& HookSyncCtxTaps9<T, A, B, C, D, E, F, G, H, I>
		& HookSyncTaps9<A, B, C, D, E, F, G, H, I>
		& HookSharedProps9<T, A, B, C, D, E, F, G, H, I>;

	// Generics: Context, First Argument
	export type HookSync10<T, A, B, C, D, E, F, G, H, I, J>
		= HookSyncCalls10<A, B, C, D, E, F, G, H, I, J>
		& HookSyncCtxTaps10<T, A, B, C, D, E, F, G, H, I, J>
		& HookSyncTaps10<A, B, C, D, E, F, G, H, I, J>
		& HookSharedProps10<T, A, B, C, D, E, F, G, H, I, J>;

	// Generics: Context, First Argument
	export type HookSync11<T, A, B, C, D, E, F, G, H, I, J, K>
		= HookSyncCalls11<A, B, C, D, E, F, G, H, I, J, K>
		& HookSyncCtxTaps11<T, A, B, C, D, E, F, G, H, I, J, K>
		& HookSyncTaps11<A, B, C, D, E, F, G, H, I, J, K>
		& HookSharedProps11<T, A, B, C, D, E, F, G, H, I, J, K>;

	// Generics: Context, First Argument
	export type HookSync12<T, A, B, C, D, E, F, G, H, I, J, K, L>
		= HookSyncCalls12<A, B, C, D, E, F, G, H, I, J, K, L>
		& HookSyncCtxTaps12<T, A, B, C, D, E, F, G, H, I, J, K, L>
		& HookSyncTaps12<A, B, C, D, E, F, G, H, I, J, K, L>
		& HookSharedProps12<T, A, B, C, D, E, F, G, H, I, J, K, L>;

	// Generics: Context, First Argument
	export type HookSync13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>
		= HookSyncCalls13<A, B, C, D, E, F, G, H, I, J, K, L, M>
		& HookSyncCtxTaps13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>
		& HookSyncTaps13<A, B, C, D, E, F, G, H, I, J, K, L, M>
		& HookSharedProps13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>;

	// Generics: Context, First Argument
	export type HookSync14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>
		= HookSyncCalls14<A, B, C, D, E, F, G, H, I, J, K, L, M, N>
		& HookSyncCtxTaps14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>
		& HookSyncTaps14<A, B, C, D, E, F, G, H, I, J, K, L, M, N>
		& HookSharedProps14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>;

	// Generics: Context, First Argument
	export type HookSync15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
		= HookSyncCalls15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
		& HookSyncCtxTaps15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
		& HookSyncTaps15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
		& HookSharedProps15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>;

	// Generics: Context, First Argument
	export type HookSync16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
		= HookSyncCalls16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
		& HookSyncCtxTaps16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
		& HookSyncTaps16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
		& HookSharedProps16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>;

	// Generics: Context, First Argument
	export type HookSync17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
		= HookSyncCalls17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
		& HookSyncCtxTaps17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
		& HookSyncTaps17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
		& HookSharedProps17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>;

	// Generics: Context, First Argument
	export type HookSync18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
		= HookSyncCalls18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
		& HookSyncCtxTaps18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
		& HookSyncTaps18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
		& HookSharedProps18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>;

	// Generics: Context, First Argument
	export type HookSync19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
		= HookSyncCalls19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
		& HookSyncCtxTaps19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
		& HookSyncTaps19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
		& HookSharedProps19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>;

	// Generics: Context, First Argument
	export type HookSync20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>
		= HookSyncCalls20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>
		& HookSyncCtxTaps20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>
		& HookSyncTaps20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>
		& HookSharedProps20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>;

	// Generics: Context, First Argument
	export type HookSync21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>
		= HookSyncCalls21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>
		& HookSyncCtxTaps21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>
		& HookSyncTaps21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>
		& HookSharedProps21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>;

	// Generics: Context, First Argument
	export type HookSync22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>
		= HookSyncCalls22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>
		& HookSyncCtxTaps22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>
		& HookSyncTaps22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>
		& HookSharedProps22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>;

	// Generics: Context, First Argument
	export type HookSync23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>
		= HookSyncCalls23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>
		& HookSyncCtxTaps23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>
		& HookSyncTaps23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>
		& HookSharedProps23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>;

	// Generics: Context, First Argument
	export type HookSync24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>
		= HookSyncCalls24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>
		& HookSyncCtxTaps24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>
		& HookSyncTaps24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>
		& HookSharedProps24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync0<T>
		= HookSync0<T>
		& HookAsyncCalls0
		& HookAsyncCtxTaps0<T>
		& HookAsyncTaps0
		& HookSharedProps0<T>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync1<T, A>
		= HookSync1<T, A>
		& HookAsyncCalls1<A>
		& HookAsyncCtxTaps1<T, A>
		& HookAsyncTaps1<A>
		& HookSharedProps1<T, A>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync2<T, A, B>
		= HookSync2<T, A, B>
		& HookAsyncCalls2<A, B>
		& HookAsyncCtxTaps2<T, A, B>
		& HookAsyncTaps2<A, B>
		& HookSharedProps2<T, A, B>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync3<T, A, B, C>
		= HookSync3<T, A, B, C>
		& HookAsyncCalls3<A, B, C>
		& HookAsyncCtxTaps3<T, A, B, C>
		& HookAsyncTaps3<A, B, C>
		& HookSharedProps3<T, A, B, C>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync4<T, A, B, C, D>
		= HookSync4<T, A, B, C, D>
		& HookAsyncCalls4<A, B, C, D>
		& HookAsyncCtxTaps4<T, A, B, C, D>
		& HookAsyncTaps4<A, B, C, D>
		& HookSharedProps4<T, A, B, C, D>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync5<T, A, B, C, D, E>
		= HookSync5<T, A, B, C, D, E>
		& HookAsyncCalls5<A, B, C, D, E>
		& HookAsyncCtxTaps5<T, A, B, C, D, E>
		& HookAsyncTaps5<A, B, C, D, E>
		& HookSharedProps5<T, A, B, C, D, E>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync6<T, A, B, C, D, E, F>
		= HookSync6<T, A, B, C, D, E, F>
		& HookAsyncCalls6<A, B, C, D, E, F>
		& HookAsyncCtxTaps6<T, A, B, C, D, E, F>
		& HookAsyncTaps6<A, B, C, D, E, F>
		& HookSharedProps6<T, A, B, C, D, E, F>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync7<T, A, B, C, D, E, F, G>
		= HookSync7<T, A, B, C, D, E, F, G>
		& HookAsyncCalls7<A, B, C, D, E, F, G>
		& HookAsyncCtxTaps7<T, A, B, C, D, E, F, G>
		& HookAsyncTaps7<A, B, C, D, E, F, G>
		& HookSharedProps7<T, A, B, C, D, E, F, G>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync8<T, A, B, C, D, E, F, G, H>
		= HookSync8<T, A, B, C, D, E, F, G, H>
		& HookAsyncCalls8<A, B, C, D, E, F, G, H>
		& HookAsyncCtxTaps8<T, A, B, C, D, E, F, G, H>
		& HookAsyncTaps8<A, B, C, D, E, F, G, H>
		& HookSharedProps8<T, A, B, C, D, E, F, G, H>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync9<T, A, B, C, D, E, F, G, H, I>
		= HookSync9<T, A, B, C, D, E, F, G, H, I>
		& HookAsyncCalls9<A, B, C, D, E, F, G, H, I>
		& HookAsyncCtxTaps9<T, A, B, C, D, E, F, G, H, I>
		& HookAsyncTaps9<A, B, C, D, E, F, G, H, I>
		& HookSharedProps9<T, A, B, C, D, E, F, G, H, I>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync10<T, A, B, C, D, E, F, G, H, I, J>
		= HookSync10<T, A, B, C, D, E, F, G, H, I, J>
		& HookAsyncCalls10<A, B, C, D, E, F, G, H, I, J>
		& HookAsyncCtxTaps10<T, A, B, C, D, E, F, G, H, I, J>
		& HookAsyncTaps10<A, B, C, D, E, F, G, H, I, J>
		& HookSharedProps10<T, A, B, C, D, E, F, G, H, I, J>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync11<T, A, B, C, D, E, F, G, H, I, J, K>
		= HookSync11<T, A, B, C, D, E, F, G, H, I, J, K>
		& HookAsyncCalls11<A, B, C, D, E, F, G, H, I, J, K>
		& HookAsyncCtxTaps11<T, A, B, C, D, E, F, G, H, I, J, K>
		& HookAsyncTaps11<A, B, C, D, E, F, G, H, I, J, K>
		& HookSharedProps11<T, A, B, C, D, E, F, G, H, I, J, K>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync12<T, A, B, C, D, E, F, G, H, I, J, K, L>
		= HookSync12<T, A, B, C, D, E, F, G, H, I, J, K, L>
		& HookAsyncCalls12<A, B, C, D, E, F, G, H, I, J, K, L>
		& HookAsyncCtxTaps12<T, A, B, C, D, E, F, G, H, I, J, K, L>
		& HookAsyncTaps12<A, B, C, D, E, F, G, H, I, J, K, L>
		& HookSharedProps12<T, A, B, C, D, E, F, G, H, I, J, K, L>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>
		= HookSync13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>
		& HookAsyncCalls13<A, B, C, D, E, F, G, H, I, J, K, L, M>
		& HookAsyncCtxTaps13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>
		& HookAsyncTaps13<A, B, C, D, E, F, G, H, I, J, K, L, M>
		& HookSharedProps13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>
		= HookSync14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>
		& HookAsyncCalls14<A, B, C, D, E, F, G, H, I, J, K, L, M, N>
		& HookAsyncCtxTaps14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>
		& HookAsyncTaps14<A, B, C, D, E, F, G, H, I, J, K, L, M, N>
		& HookSharedProps14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
		= HookSync15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
		& HookAsyncCalls15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
		& HookAsyncCtxTaps15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
		& HookAsyncTaps15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
		& HookSharedProps15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
		= HookSync16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
		& HookAsyncCalls16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
		& HookAsyncCtxTaps16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
		& HookAsyncTaps16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
		& HookSharedProps16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
		= HookSync17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
		& HookAsyncCalls17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
		& HookAsyncCtxTaps17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
		& HookAsyncTaps17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
		& HookSharedProps17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
		= HookSync18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
		& HookAsyncCalls18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
		& HookAsyncCtxTaps18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
		& HookAsyncTaps18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
		& HookSharedProps18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
		= HookSync19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
		& HookAsyncCalls19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
		& HookAsyncCtxTaps19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
		& HookAsyncTaps19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
		& HookSharedProps19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>
		= HookSync20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>
		& HookAsyncCalls20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>
		& HookAsyncCtxTaps20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>
		& HookAsyncTaps20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>
		& HookSharedProps20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>
		= HookSync21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>
		& HookAsyncCalls21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>
		& HookAsyncCtxTaps21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>
		& HookAsyncTaps21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>
		& HookSharedProps21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>
		= HookSync22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>
		& HookAsyncCalls22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>
		& HookAsyncCtxTaps22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>
		& HookAsyncTaps22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>
		& HookSharedProps22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>
		= HookSync23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>
		& HookAsyncCalls23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>
		& HookAsyncCtxTaps23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>
		& HookAsyncTaps23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>
		& HookSharedProps23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type HookAsync24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>
		= HookSync24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>
		& HookAsyncCalls24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>
		& HookAsyncCtxTaps24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>
		& HookAsyncTaps24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>
		& HookSharedProps24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>;


	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook0<T>
		= HookSync0<T>
		& HookAsyncCalls0
		& HookAsyncCtxTaps0<T>
		& HookAsyncTaps0
		& HookSharedProps0<T>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook1<T, A>
		= HookSync1<T, A>
		& HookAsyncCalls1<A>
		& HookAsyncCtxTaps1<T, A>
		& HookAsyncTaps1<A>
		& HookSharedProps1<T, A>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook2<T, A, B>
		= HookSync2<T, A, B>
		& HookAsyncCalls2<A, B>
		& HookAsyncCtxTaps2<T, A, B>
		& HookAsyncTaps2<A, B>
		& HookSharedProps2<T, A, B>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook3<T, A, B, C>
		= HookSync3<T, A, B, C>
		& HookAsyncCalls3<A, B, C>
		& HookAsyncCtxTaps3<T, A, B, C>
		& HookAsyncTaps3<A, B, C>
		& HookSharedProps3<T, A, B, C>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook4<T, A, B, C, D>
		= HookSync4<T, A, B, C, D>
		& HookAsyncCalls4<A, B, C, D>
		& HookAsyncCtxTaps4<T, A, B, C, D>
		& HookAsyncTaps4<A, B, C, D>
		& HookSharedProps4<T, A, B, C, D>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook5<T, A, B, C, D, E>
		= HookSync5<T, A, B, C, D, E>
		& HookAsyncCalls5<A, B, C, D, E>
		& HookAsyncCtxTaps5<T, A, B, C, D, E>
		& HookAsyncTaps5<A, B, C, D, E>
		& HookSharedProps5<T, A, B, C, D, E>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook6<T, A, B, C, D, E, F>
		= HookSync6<T, A, B, C, D, E, F>
		& HookAsyncCalls6<A, B, C, D, E, F>
		& HookAsyncCtxTaps6<T, A, B, C, D, E, F>
		& HookAsyncTaps6<A, B, C, D, E, F>
		& HookSharedProps6<T, A, B, C, D, E, F>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook7<T, A, B, C, D, E, F, G>
		= HookSync7<T, A, B, C, D, E, F, G>
		& HookAsyncCalls7<A, B, C, D, E, F, G>
		& HookAsyncCtxTaps7<T, A, B, C, D, E, F, G>
		& HookAsyncTaps7<A, B, C, D, E, F, G>
		& HookSharedProps7<T, A, B, C, D, E, F, G>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook8<T, A, B, C, D, E, F, G, H>
		= HookSync8<T, A, B, C, D, E, F, G, H>
		& HookAsyncCalls8<A, B, C, D, E, F, G, H>
		& HookAsyncCtxTaps8<T, A, B, C, D, E, F, G, H>
		& HookAsyncTaps8<A, B, C, D, E, F, G, H>
		& HookSharedProps8<T, A, B, C, D, E, F, G, H>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook9<T, A, B, C, D, E, F, G, H, I>
		= HookSync9<T, A, B, C, D, E, F, G, H, I>
		& HookAsyncCalls9<A, B, C, D, E, F, G, H, I>
		& HookAsyncCtxTaps9<T, A, B, C, D, E, F, G, H, I>
		& HookAsyncTaps9<A, B, C, D, E, F, G, H, I>
		& HookSharedProps9<T, A, B, C, D, E, F, G, H, I>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook10<T, A, B, C, D, E, F, G, H, I, J>
		= HookSync10<T, A, B, C, D, E, F, G, H, I, J>
		& HookAsyncCalls10<A, B, C, D, E, F, G, H, I, J>
		& HookAsyncCtxTaps10<T, A, B, C, D, E, F, G, H, I, J>
		& HookAsyncTaps10<A, B, C, D, E, F, G, H, I, J>
		& HookSharedProps10<T, A, B, C, D, E, F, G, H, I, J>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook11<T, A, B, C, D, E, F, G, H, I, J, K>
		= HookSync11<T, A, B, C, D, E, F, G, H, I, J, K>
		& HookAsyncCalls11<A, B, C, D, E, F, G, H, I, J, K>
		& HookAsyncCtxTaps11<T, A, B, C, D, E, F, G, H, I, J, K>
		& HookAsyncTaps11<A, B, C, D, E, F, G, H, I, J, K>
		& HookSharedProps11<T, A, B, C, D, E, F, G, H, I, J, K>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook12<T, A, B, C, D, E, F, G, H, I, J, K, L>
		= HookSync12<T, A, B, C, D, E, F, G, H, I, J, K, L>
		& HookAsyncCalls12<A, B, C, D, E, F, G, H, I, J, K, L>
		& HookAsyncCtxTaps12<T, A, B, C, D, E, F, G, H, I, J, K, L>
		& HookAsyncTaps12<A, B, C, D, E, F, G, H, I, J, K, L>
		& HookSharedProps12<T, A, B, C, D, E, F, G, H, I, J, K, L>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>
		= HookSync13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>
		& HookAsyncCalls13<A, B, C, D, E, F, G, H, I, J, K, L, M>
		& HookAsyncCtxTaps13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>
		& HookAsyncTaps13<A, B, C, D, E, F, G, H, I, J, K, L, M>
		& HookSharedProps13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>
		= HookSync14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>
		& HookAsyncCalls14<A, B, C, D, E, F, G, H, I, J, K, L, M, N>
		& HookAsyncCtxTaps14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>
		& HookAsyncTaps14<A, B, C, D, E, F, G, H, I, J, K, L, M, N>
		& HookSharedProps14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
		= HookSync15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
		& HookAsyncCalls15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
		& HookAsyncCtxTaps15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
		& HookAsyncTaps15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
		& HookSharedProps15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
		= HookSync16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
		& HookAsyncCalls16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
		& HookAsyncCtxTaps16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
		& HookAsyncTaps16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
		& HookSharedProps16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
		= HookSync17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
		& HookAsyncCalls17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
		& HookAsyncCtxTaps17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
		& HookAsyncTaps17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
		& HookSharedProps17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
		= HookSync18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
		& HookAsyncCalls18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
		& HookAsyncCtxTaps18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
		& HookAsyncTaps18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
		& HookSharedProps18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
		= HookSync19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
		& HookAsyncCalls19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
		& HookAsyncCtxTaps19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
		& HookAsyncTaps19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
		& HookSharedProps19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>
		= HookSync20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>
		& HookAsyncCalls20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>
		& HookAsyncCtxTaps20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>
		& HookAsyncTaps20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>
		& HookSharedProps20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>
		= HookSync21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>
		& HookAsyncCalls21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>
		& HookAsyncCtxTaps21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>
		& HookAsyncTaps21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>
		& HookSharedProps21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>
		= HookSync22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>
		& HookAsyncCalls22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>
		& HookAsyncCtxTaps22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>
		& HookAsyncTaps22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>
		& HookSharedProps22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>
		= HookSync23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>
		& HookAsyncCalls23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>
		& HookAsyncCtxTaps23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>
		& HookAsyncTaps23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>
		& HookSharedProps23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>;

	// Generics: Context, First Argument
	// HookAsync has all the options of sync
	export type Hook24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>
		= HookSync24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>
		& HookAsyncCalls24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>
		& HookAsyncCtxTaps24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>
		& HookAsyncTaps24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>
		& HookSharedProps24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>;

	// TODO: double check if `args` is optional
	// TODO: Is there a zero arg Hookable?
	interface HookableAsync {
		new <T = any>(): HookAsync0<T>
		new <T = any, A = any>(args: [string]): HookAsync1<T, A>
		new <T = any, A = any, B = any>(args: [string, string]): HookAsync2<T, A, B>
		new <T = any, A = any, B = any, C = any>(args: [string, string, string]): HookAsync3<T, A, B, C>
		new <T = any, A = any, B = any, C = any, D = any>(args: [string, string, string, string]): HookAsync4<T, A, B, C, D>
		new <T = any, A = any, B = any, C = any, D = any, E = any>(args: [string, string, string, string, string]): HookAsync5<T, A, B, C, D, E>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any>(args: [string, string, string, string, string, string]): HookAsync6<T, A, B, C, D, E, F>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any>(args: [string, string, string, string, string, string, string]): HookAsync7<T, A, B, C, D, E, F, G>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any>(args: [string, string, string, string, string, string, string, string]): HookAsync8<T, A, B, C, D, E, F, G, H>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any>(args: [string, string, string, string, string, string, string, string, string]): HookAsync9<T, A, B, C, D, E, F, G, H, I>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any>(args: [string, string, string, string, string, string, string, string, string, string]): HookAsync10<T, A, B, C, D, E, F, G, H, I, J>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any>(args: [string, string, string, string, string, string, string, string, string, string, string]): HookAsync11<T, A, B, C, D, E, F, G, H, I, J, K>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string]): HookAsync12<T, A, B, C, D, E, F, G, H, I, J, K, L>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string]): HookAsync13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookAsync14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any, O = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookAsync15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any, O = any, P = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookAsync16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any, O = any, P = any, Q = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookAsync17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any, O = any, P = any, Q = any, R = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookAsync18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any, O = any, P = any, Q = any, R = any, S = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookAsync19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any, O = any, P = any, Q = any, R = any, S = any, U = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookAsync20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any, O = any, P = any, Q = any, R = any, S = any, U = any, V = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookAsync21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any, O = any, P = any, Q = any, R = any, S = any, U = any, V = any, W = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookAsync22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any, O = any, P = any, Q = any, R = any, S = any, U = any, V = any, W = any, X = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookAsync23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any, O = any, P = any, Q = any, R = any, S = any, U = any, V = any, W = any, X = any, Y = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookAsync24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>
	}
	interface HookableSync {
		new <T = any>(): HookSync0<T>
		new <T = any, A = any>(args: [string]): HookSync1<T, A>
		new <T = any, A = any, B = any>(args: [string, string]): HookSync2<T, A, B>
		new <T = any, A = any, B = any, C = any>(args: [string, string, string]): HookSync3<T, A, B, C>
		new <T = any, A = any, B = any, C = any, D = any>(args: [string, string, string, string]): HookSync4<T, A, B, C, D>
		new <T = any, A = any, B = any, C = any, D = any, E = any>(args: [string, string, string, string, string]): HookSync5<T, A, B, C, D, E>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any>(args: [string, string, string, string, string, string]): HookSync6<T, A, B, C, D, E, F>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any>(args: [string, string, string, string, string, string, string]): HookSync7<T, A, B, C, D, E, F, G>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any>(args: [string, string, string, string, string, string, string, string]): HookSync8<T, A, B, C, D, E, F, G, H>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any>(args: [string, string, string, string, string, string, string, string, string]): HookSync9<T, A, B, C, D, E, F, G, H, I>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any>(args: [string, string, string, string, string, string, string, string, string, string]): HookSync10<T, A, B, C, D, E, F, G, H, I, J>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any>(args: [string, string, string, string, string, string, string, string, string, string, string]): HookSync11<T, A, B, C, D, E, F, G, H, I, J, K>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string]): HookSync12<T, A, B, C, D, E, F, G, H, I, J, K, L>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string]): HookSync13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookSync14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any, O = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookSync15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any, O = any, P = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookSync16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any, O = any, P = any, Q = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookSync17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any, O = any, P = any, Q = any, R = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookSync18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any, O = any, P = any, Q = any, R = any, S = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookSync19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any, O = any, P = any, Q = any, R = any, S = any, U = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookSync20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any, O = any, P = any, Q = any, R = any, S = any, U = any, V = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookSync21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any, O = any, P = any, Q = any, R = any, S = any, U = any, V = any, W = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookSync22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any, O = any, P = any, Q = any, R = any, S = any, U = any, V = any, W = any, X = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookSync23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>
		new <T = any, A = any, B = any, C = any, D = any, E = any, F = any, G = any, H = any, I = any, J = any, K = any, L = any, M = any, N = any, O = any, P = any, Q = any, R = any, S = any, U = any, V = any, W = any, X = any, Y = any>(args: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]): HookSync24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>
	}

	// TODO: type permutations
	// TapObjects are the full form of a Tap
	export type TapCtxObject0<T> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn0<T> }
		| { type: "sync", fn: TapSyncCtxFn0<T> }
		| { type: "promise", fn: TapPromiseCtxFn0<T> });

	export type TapCtxObject1<T, A> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn1<T, A> }
		| { type: "sync", fn: TapSyncCtxFn1<T, A> }
		| { type: "promise", fn: TapPromiseCtxFn1<T, A> });

	export type TapCtxObject2<T, A, B> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn2<T, A, B> }
		| { type: "sync", fn: TapSyncCtxFn2<T, A, B> }
		| { type: "promise", fn: TapPromiseCtxFn2<T, A, B> });

	export type TapCtxObject3<T, A, B, C> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn3<T, A, B, C> }
		| { type: "sync", fn: TapSyncCtxFn3<T, A, B, C> }
		| { type: "promise", fn: TapPromiseCtxFn3<T, A, B, C> });

	export type TapCtxObject4<T, A, B, C, D> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn4<T, A, B, C, D> }
		| { type: "sync", fn: TapSyncCtxFn4<T, A, B, C, D> }
		| { type: "promise", fn: TapPromiseCtxFn4<T, A, B, C, D> });

	export type TapCtxObject5<T, A, B, C, D, E> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn5<T, A, B, C, D, E> }
		| { type: "sync", fn: TapSyncCtxFn5<T, A, B, C, D, E> }
		| { type: "promise", fn: TapPromiseCtxFn5<T, A, B, C, D, E> });

	export type TapCtxObject6<T, A, B, C, D, E, F> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn6<T, A, B, C, D, E, F> }
		| { type: "sync", fn: TapSyncCtxFn6<T, A, B, C, D, E, F> }
		| { type: "promise", fn: TapPromiseCtxFn6<T, A, B, C, D, E, F> });

	export type TapCtxObject7<T, A, B, C, D, E, F, G> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn7<T, A, B, C, D, E, F, G> }
		| { type: "sync", fn: TapSyncCtxFn7<T, A, B, C, D, E, F, G> }
		| { type: "promise", fn: TapPromiseCtxFn7<T, A, B, C, D, E, F, G> });

	export type TapCtxObject8<T, A, B, C, D, E, F, G, H> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn8<T, A, B, C, D, E, F, G, H> }
		| { type: "sync", fn: TapSyncCtxFn8<T, A, B, C, D, E, F, G, H> }
		| { type: "promise", fn: TapPromiseCtxFn8<T, A, B, C, D, E, F, G, H> });

	export type TapCtxObject9<T, A, B, C, D, E, F, G, H, I> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn9<T, A, B, C, D, E, F, G, H, I> }
		| { type: "sync", fn: TapSyncCtxFn9<T, A, B, C, D, E, F, G, H, I> }
		| { type: "promise", fn: TapPromiseCtxFn9<T, A, B, C, D, E, F, G, H, I> });

	export type TapCtxObject10<T, A, B, C, D, E, F, G, H, I, J> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn10<T, A, B, C, D, E, F, G, H, I, J> }
		| { type: "sync", fn: TapSyncCtxFn10<T, A, B, C, D, E, F, G, H, I, J> }
		| { type: "promise", fn: TapPromiseCtxFn10<T, A, B, C, D, E, F, G, H, I, J> });

	export type TapCtxObject11<T, A, B, C, D, E, F, G, H, I, J, K> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn11<T, A, B, C, D, E, F, G, H, I, J, K> }
		| { type: "sync", fn: TapSyncCtxFn11<T, A, B, C, D, E, F, G, H, I, J, K> }
		| { type: "promise", fn: TapPromiseCtxFn11<T, A, B, C, D, E, F, G, H, I, J, K> });

	export type TapCtxObject12<T, A, B, C, D, E, F, G, H, I, J, K, L> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn12<T, A, B, C, D, E, F, G, H, I, J, K, L> }
		| { type: "sync", fn: TapSyncCtxFn12<T, A, B, C, D, E, F, G, H, I, J, K, L> }
		| { type: "promise", fn: TapPromiseCtxFn12<T, A, B, C, D, E, F, G, H, I, J, K, L> });

	export type TapCtxObject13<T, A, B, C, D, E, F, G, H, I, J, K, L, M> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn13<T, A, B, C, D, E, F, G, H, I, J, K, L, M> }
		| { type: "sync", fn: TapSyncCtxFn13<T, A, B, C, D, E, F, G, H, I, J, K, L, M> }
		| { type: "promise", fn: TapPromiseCtxFn13<T, A, B, C, D, E, F, G, H, I, J, K, L, M> });

	export type TapCtxObject14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N> }
		| { type: "sync", fn: TapSyncCtxFn14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N> }
		| { type: "promise", fn: TapPromiseCtxFn14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N> });

	export type TapCtxObject15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> }
		| { type: "sync", fn: TapSyncCtxFn15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> }
		| { type: "promise", fn: TapPromiseCtxFn15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> });

	export type TapCtxObject16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> }
		| { type: "sync", fn: TapSyncCtxFn16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> }
		| { type: "promise", fn: TapPromiseCtxFn16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> });

	export type TapCtxObject17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> }
		| { type: "sync", fn: TapSyncCtxFn17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> }
		| { type: "promise", fn: TapPromiseCtxFn17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> });

	export type TapCtxObject18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> }
		| { type: "sync", fn: TapSyncCtxFn18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> }
		| { type: "promise", fn: TapPromiseCtxFn18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> });

	export type TapCtxObject19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> }
		| { type: "sync", fn: TapSyncCtxFn19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> }
		| { type: "promise", fn: TapPromiseCtxFn19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> });

	export type TapCtxObject20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> }
		| { type: "sync", fn: TapSyncCtxFn20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> }
		| { type: "promise", fn: TapPromiseCtxFn20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> });

	export type TapCtxObject21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> }
		| { type: "sync", fn: TapSyncCtxFn21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> }
		| { type: "promise", fn: TapPromiseCtxFn21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> });

	export type TapCtxObject22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> }
		| { type: "sync", fn: TapSyncCtxFn22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> }
		| { type: "promise", fn: TapPromiseCtxFn22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> });

	export type TapCtxObject23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> }
		| { type: "sync", fn: TapSyncCtxFn23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> }
		| { type: "promise", fn: TapPromiseCtxFn23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> });

	export type TapCtxObject24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> = TapSharedOptions & {
		context: true
	} & ({ type: "async", fn: TapAsyncCtxFn24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> }
		| { type: "sync", fn: TapSyncCtxFn24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> }
		| { type: "promise", fn: TapPromiseCtxFn24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> });

	export type TapObject0 = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn0 }
		| { type: "sync", fn: TapSyncFn0 }
		| { type: "promise", fn: TapPromiseFn0 });

	export type TapObject1<A> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn1<A> }
		| { type: "sync", fn: TapSyncFn1<A> }
		| { type: "promise", fn: TapPromiseFn1<A> });

	export type TapObject2<A, B> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn2<A, B> }
		| { type: "sync", fn: TapSyncFn2<A, B> }
		| { type: "promise", fn: TapPromiseFn2<A, B> });

	export type TapObject3<A, B, C> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn3<A, B, C> }
		| { type: "sync", fn: TapSyncFn3<A, B, C> }
		| { type: "promise", fn: TapPromiseFn3<A, B, C> });

	export type TapObject4<A, B, C, D> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn4<A, B, C, D> }
		| { type: "sync", fn: TapSyncFn4<A, B, C, D> }
		| { type: "promise", fn: TapPromiseFn4<A, B, C, D> });

	export type TapObject5<A, B, C, D, E> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn5<A, B, C, D, E> }
		| { type: "sync", fn: TapSyncFn5<A, B, C, D, E> }
		| { type: "promise", fn: TapPromiseFn5<A, B, C, D, E> });

	export type TapObject6<A, B, C, D, E, F> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn6<A, B, C, D, E, F> }
		| { type: "sync", fn: TapSyncFn6<A, B, C, D, E, F> }
		| { type: "promise", fn: TapPromiseFn6<A, B, C, D, E, F> });

	export type TapObject7<A, B, C, D, E, F, G> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn7<A, B, C, D, E, F, G> }
		| { type: "sync", fn: TapSyncFn7<A, B, C, D, E, F, G> }
		| { type: "promise", fn: TapPromiseFn7<A, B, C, D, E, F, G> });

	export type TapObject8<A, B, C, D, E, F, G, H> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn8<A, B, C, D, E, F, G, H> }
		| { type: "sync", fn: TapSyncFn8<A, B, C, D, E, F, G, H> }
		| { type: "promise", fn: TapPromiseFn8<A, B, C, D, E, F, G, H> });

	export type TapObject9<A, B, C, D, E, F, G, H, I> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn9<A, B, C, D, E, F, G, H, I> }
		| { type: "sync", fn: TapSyncFn9<A, B, C, D, E, F, G, H, I> }
		| { type: "promise", fn: TapPromiseFn9<A, B, C, D, E, F, G, H, I> });

	export type TapObject10<A, B, C, D, E, F, G, H, I, J> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn10<A, B, C, D, E, F, G, H, I, J> }
		| { type: "sync", fn: TapSyncFn10<A, B, C, D, E, F, G, H, I, J> }
		| { type: "promise", fn: TapPromiseFn10<A, B, C, D, E, F, G, H, I, J> });

	export type TapObject11<A, B, C, D, E, F, G, H, I, J, K> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn11<A, B, C, D, E, F, G, H, I, J, K> }
		| { type: "sync", fn: TapSyncFn11<A, B, C, D, E, F, G, H, I, J, K> }
		| { type: "promise", fn: TapPromiseFn11<A, B, C, D, E, F, G, H, I, J, K> });

	export type TapObject12<A, B, C, D, E, F, G, H, I, J, K, L> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn12<A, B, C, D, E, F, G, H, I, J, K, L> }
		| { type: "sync", fn: TapSyncFn12<A, B, C, D, E, F, G, H, I, J, K, L> }
		| { type: "promise", fn: TapPromiseFn12<A, B, C, D, E, F, G, H, I, J, K, L> });

	export type TapObject13<A, B, C, D, E, F, G, H, I, J, K, L, M> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn13<A, B, C, D, E, F, G, H, I, J, K, L, M> }
		| { type: "sync", fn: TapSyncFn13<A, B, C, D, E, F, G, H, I, J, K, L, M> }
		| { type: "promise", fn: TapPromiseFn13<A, B, C, D, E, F, G, H, I, J, K, L, M> });

	export type TapObject14<A, B, C, D, E, F, G, H, I, J, K, L, M, N> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn14<A, B, C, D, E, F, G, H, I, J, K, L, M, N> }
		| { type: "sync", fn: TapSyncFn14<A, B, C, D, E, F, G, H, I, J, K, L, M, N> }
		| { type: "promise", fn: TapPromiseFn14<A, B, C, D, E, F, G, H, I, J, K, L, M, N> });

	export type TapObject15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> }
		| { type: "sync", fn: TapSyncFn15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> }
		| { type: "promise", fn: TapPromiseFn15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> });

	export type TapObject16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> }
		| { type: "sync", fn: TapSyncFn16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> }
		| { type: "promise", fn: TapPromiseFn16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> });

	export type TapObject17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> }
		| { type: "sync", fn: TapSyncFn17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> }
		| { type: "promise", fn: TapPromiseFn17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> });

	export type TapObject18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> }
		| { type: "sync", fn: TapSyncFn18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> }
		| { type: "promise", fn: TapPromiseFn18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> });

	export type TapObject19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> }
		| { type: "sync", fn: TapSyncFn19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> }
		| { type: "promise", fn: TapPromiseFn19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> });

	export type TapObject20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> }
		| { type: "sync", fn: TapSyncFn20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> }
		| { type: "promise", fn: TapPromiseFn20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> });

	export type TapObject21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> }
		| { type: "sync", fn: TapSyncFn21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> }
		| { type: "promise", fn: TapPromiseFn21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> });

	export type TapObject22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> }
		| { type: "sync", fn: TapSyncFn22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> }
		| { type: "promise", fn: TapPromiseFn22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> });

	export type TapObject23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> }
		| { type: "sync", fn: TapSyncFn23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> }
		| { type: "promise", fn: TapPromiseFn23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> });

	export type TapObject24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> = TapSharedOptions & {
		context: false
	} & ({ type: "async", fn: TapAsyncFn24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> }
		| { type: "sync", fn: TapSyncFn24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> }
		| { type: "promise", fn: TapPromiseFn24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> });

	// Non-context interceptor
	export type HookInterceptor0 = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn0

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn0

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject0) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject0) => TapObject0

		// This is false because HookInterceptor0 is the non-context version
		/** context defaults to false */
		context?: false
	}

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

	// Non-context interceptor
	export type HookInterceptor2<A, B> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn2<A, B>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn2<A, B>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject2<A, B>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject2<A, B>) => TapObject2<A, B>

		// This is false because HookInterceptor2 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor3<A, B, C> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn3<A, B, C>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn3<A, B, C>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject3<A, B, C>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject3<A, B, C>) => TapObject3<A, B, C>

		// This is false because HookInterceptor3 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor4<A, B, C, D> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn4<A, B, C, D>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn4<A, B, C, D>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject4<A, B, C, D>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject4<A, B, C, D>) => TapObject4<A, B, C, D>

		// This is false because HookInterceptor4 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor5<A, B, C, D, E> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn5<A, B, C, D, E>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn5<A, B, C, D, E>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject5<A, B, C, D, E>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject5<A, B, C, D, E>) => TapObject5<A, B, C, D, E>

		// This is false because HookInterceptor5 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor6<A, B, C, D, E, F> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn6<A, B, C, D, E, F>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn6<A, B, C, D, E, F>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject6<A, B, C, D, E, F>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject6<A, B, C, D, E, F>) => TapObject6<A, B, C, D, E, F>

		// This is false because HookInterceptor6 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor7<A, B, C, D, E, F, G> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn7<A, B, C, D, E, F, G>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn7<A, B, C, D, E, F, G>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject7<A, B, C, D, E, F, G>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject7<A, B, C, D, E, F, G>) => TapObject7<A, B, C, D, E, F, G>

		// This is false because HookInterceptor7 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor8<A, B, C, D, E, F, G, H> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn8<A, B, C, D, E, F, G, H>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn8<A, B, C, D, E, F, G, H>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject8<A, B, C, D, E, F, G, H>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject8<A, B, C, D, E, F, G, H>) => TapObject8<A, B, C, D, E, F, G, H>

		// This is false because HookInterceptor8 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor9<A, B, C, D, E, F, G, H, I> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn9<A, B, C, D, E, F, G, H, I>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn9<A, B, C, D, E, F, G, H, I>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject9<A, B, C, D, E, F, G, H, I>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject9<A, B, C, D, E, F, G, H, I>) => TapObject9<A, B, C, D, E, F, G, H, I>

		// This is false because HookInterceptor9 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor10<A, B, C, D, E, F, G, H, I, J> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn10<A, B, C, D, E, F, G, H, I, J>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn10<A, B, C, D, E, F, G, H, I, J>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject10<A, B, C, D, E, F, G, H, I, J>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject10<A, B, C, D, E, F, G, H, I, J>) => TapObject10<A, B, C, D, E, F, G, H, I, J>

		// This is false because HookInterceptor10 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor11<A, B, C, D, E, F, G, H, I, J, K> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn11<A, B, C, D, E, F, G, H, I, J, K>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn11<A, B, C, D, E, F, G, H, I, J, K>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject11<A, B, C, D, E, F, G, H, I, J, K>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject11<A, B, C, D, E, F, G, H, I, J, K>) => TapObject11<A, B, C, D, E, F, G, H, I, J, K>

		// This is false because HookInterceptor11 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor12<A, B, C, D, E, F, G, H, I, J, K, L> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn12<A, B, C, D, E, F, G, H, I, J, K, L>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn12<A, B, C, D, E, F, G, H, I, J, K, L>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject12<A, B, C, D, E, F, G, H, I, J, K, L>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject12<A, B, C, D, E, F, G, H, I, J, K, L>) => TapObject12<A, B, C, D, E, F, G, H, I, J, K, L>

		// This is false because HookInterceptor12 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor13<A, B, C, D, E, F, G, H, I, J, K, L, M> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn13<A, B, C, D, E, F, G, H, I, J, K, L, M>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn13<A, B, C, D, E, F, G, H, I, J, K, L, M>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject13<A, B, C, D, E, F, G, H, I, J, K, L, M>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject13<A, B, C, D, E, F, G, H, I, J, K, L, M>) => TapObject13<A, B, C, D, E, F, G, H, I, J, K, L, M>

		// This is false because HookInterceptor13 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor14<A, B, C, D, E, F, G, H, I, J, K, L, M, N> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn14<A, B, C, D, E, F, G, H, I, J, K, L, M, N>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn14<A, B, C, D, E, F, G, H, I, J, K, L, M, N>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject14<A, B, C, D, E, F, G, H, I, J, K, L, M, N>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject14<A, B, C, D, E, F, G, H, I, J, K, L, M, N>) => TapObject14<A, B, C, D, E, F, G, H, I, J, K, L, M, N>

		// This is false because HookInterceptor14 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>) => TapObject15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>

		// This is false because HookInterceptor15 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>) => TapObject16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>

		// This is false because HookInterceptor16 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>) => TapObject17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>

		// This is false because HookInterceptor17 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>) => TapObject18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>

		// This is false because HookInterceptor18 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>) => TapObject19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>

		// This is false because HookInterceptor19 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>) => TapObject20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>

		// This is false because HookInterceptor20 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>) => TapObject21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>

		// This is false because HookInterceptor21 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>) => TapObject22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>

		// This is false because HookInterceptor22 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>) => TapObject23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>

		// This is false because HookInterceptor23 is the non-context version
		/** context defaults to false */
		context?: false
	}

	// Non-context interceptor
	export type HookInterceptor24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> = {
		/** Adding call to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments. */
		call?: TapSyncFn24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>

		/** Adding loop to your interceptor will trigger for each loop of a looping hook */
		loop?: TapSyncFn24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>

		// TODO: double check that TapObject is a single arg, here
		/** Adding tap to your interceptor will trigger when a plugin taps into a hook. Provided is the Tap object. Tap object can't be changed */
		tap?: (tap: TapObject24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>) => void

		// TODO: double check that TapObject is a single arg and without context, here
		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapObject24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>) => TapObject24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>

		// This is false because HookInterceptor24 is the non-context version
		/** context defaults to false */
		context?: false
	}

	export type HookCtxInterceptor0<T> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn0<T>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn0<T>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject0<T>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject0<T>) => TapCtxObject0<T>

		context: true
	}

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

	export type HookCtxInterceptor2<T, A, B> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn2<T, A, B>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn2<T, A, B>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject2<T, A, B>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject2<T, A, B>) => TapCtxObject2<T, A, B>

		context: true
	}

	export type HookCtxInterceptor3<T, A, B, C> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn3<T, A, B, C>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn3<T, A, B, C>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject3<T, A, B, C>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject3<T, A, B, C>) => TapCtxObject3<T, A, B, C>

		context: true
	}

	export type HookCtxInterceptor4<T, A, B, C, D> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn4<T, A, B, C, D>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn4<T, A, B, C, D>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject4<T, A, B, C, D>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject4<T, A, B, C, D>) => TapCtxObject4<T, A, B, C, D>

		context: true
	}

	export type HookCtxInterceptor5<T, A, B, C, D, E> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn5<T, A, B, C, D, E>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn5<T, A, B, C, D, E>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject5<T, A, B, C, D, E>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject5<T, A, B, C, D, E>) => TapCtxObject5<T, A, B, C, D, E>

		context: true
	}

	export type HookCtxInterceptor6<T, A, B, C, D, E, F> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn6<T, A, B, C, D, E, F>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn6<T, A, B, C, D, E, F>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject6<T, A, B, C, D, E, F>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject6<T, A, B, C, D, E, F>) => TapCtxObject6<T, A, B, C, D, E, F>

		context: true
	}

	export type HookCtxInterceptor7<T, A, B, C, D, E, F, G> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn7<T, A, B, C, D, E, F, G>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn7<T, A, B, C, D, E, F, G>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject7<T, A, B, C, D, E, F, G>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject7<T, A, B, C, D, E, F, G>) => TapCtxObject7<T, A, B, C, D, E, F, G>

		context: true
	}

	export type HookCtxInterceptor8<T, A, B, C, D, E, F, G, H> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn8<T, A, B, C, D, E, F, G, H>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn8<T, A, B, C, D, E, F, G, H>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject8<T, A, B, C, D, E, F, G, H>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject8<T, A, B, C, D, E, F, G, H>) => TapCtxObject8<T, A, B, C, D, E, F, G, H>

		context: true
	}

	export type HookCtxInterceptor9<T, A, B, C, D, E, F, G, H, I> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn9<T, A, B, C, D, E, F, G, H, I>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn9<T, A, B, C, D, E, F, G, H, I>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject9<T, A, B, C, D, E, F, G, H, I>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject9<T, A, B, C, D, E, F, G, H, I>) => TapCtxObject9<T, A, B, C, D, E, F, G, H, I>

		context: true
	}

	export type HookCtxInterceptor10<T, A, B, C, D, E, F, G, H, I, J> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn10<T, A, B, C, D, E, F, G, H, I, J>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn10<T, A, B, C, D, E, F, G, H, I, J>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject10<T, A, B, C, D, E, F, G, H, I, J>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject10<T, A, B, C, D, E, F, G, H, I, J>) => TapCtxObject10<T, A, B, C, D, E, F, G, H, I, J>

		context: true
	}

	export type HookCtxInterceptor11<T, A, B, C, D, E, F, G, H, I, J, K> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn11<T, A, B, C, D, E, F, G, H, I, J, K>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn11<T, A, B, C, D, E, F, G, H, I, J, K>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject11<T, A, B, C, D, E, F, G, H, I, J, K>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject11<T, A, B, C, D, E, F, G, H, I, J, K>) => TapCtxObject11<T, A, B, C, D, E, F, G, H, I, J, K>

		context: true
	}

	export type HookCtxInterceptor12<T, A, B, C, D, E, F, G, H, I, J, K, L> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn12<T, A, B, C, D, E, F, G, H, I, J, K, L>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn12<T, A, B, C, D, E, F, G, H, I, J, K, L>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject12<T, A, B, C, D, E, F, G, H, I, J, K, L>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject12<T, A, B, C, D, E, F, G, H, I, J, K, L>) => TapCtxObject12<T, A, B, C, D, E, F, G, H, I, J, K, L>

		context: true
	}

	export type HookCtxInterceptor13<T, A, B, C, D, E, F, G, H, I, J, K, L, M> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>) => TapCtxObject13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>

		context: true
	}

	export type HookCtxInterceptor14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>) => TapCtxObject14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>

		context: true
	}

	export type HookCtxInterceptor15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>) => TapCtxObject15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>

		context: true
	}

	export type HookCtxInterceptor16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>) => TapCtxObject16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>

		context: true
	}

	export type HookCtxInterceptor17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>) => TapCtxObject17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>

		context: true
	}

	export type HookCtxInterceptor18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>) => TapCtxObject18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>

		context: true
	}

	export type HookCtxInterceptor19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>) => TapCtxObject19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>

		context: true
	}

	export type HookCtxInterceptor20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>) => TapCtxObject20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>

		context: true
	}

	export type HookCtxInterceptor21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>) => TapCtxObject21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>

		context: true
	}

	export type HookCtxInterceptor22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>) => TapCtxObject22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>

		context: true
	}

	export type HookCtxInterceptor23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>) => TapCtxObject23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>

		context: true
	}

	export type HookCtxInterceptor24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> = {
		/** Called with hook's arguments when the hook is triggered */
		call?: TapSyncCtxFn24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>

		/** Called with hook's arguments for each loop of a looping hook */
		loop?: TapSyncCtxFn24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>

		/** Called when a plugin taps into a hook. */
		tap?: (ctx: T, tap: TapCtxObject24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>) => void

		/** Adding register to your interceptor will trigger for each added Tap and allows to modify it. */
		register?: (tap: TapCtxObject24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>) => TapCtxObject24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>

		context: true
	}

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

	export const SyncHook: HookableSync;
	export const SyncBailHook: HookableSync;
	export const SyncWaterfallHook: HookableSync;
	export const SyncLoopHook: HookableSync;
	export const AsyncParallelHook: HookableAsync;
	export const AsyncParallelBailHook: HookableAsync;
	export const AsyncSeriesHook: HookableAsync;
	export const AsyncSeriesBailHook: HookableAsync;
	export const AsyncSeriesWaterfallHook: HookableAsync;
	export const HookMap: HookMap;

	export class Tapable {
		static addCompatLayer(instance: any): void;
	}


	// In-progress: All encompassing objects
	export type TapObject<
		T = any,
		// Loop produces A = any, B = any, C = any, etc... using /\bA\b/g replace
		A = any,
		B = any,
		C = any,
		D = any,
		E = any,
		F = any,
		G = any,
		H = any,
		I = any,
		J = any,
		K = any,
		L = any,
		M = any,
		N = any,
		O = any,
		P = any,
		Q = any,
		R = any,
		S = any,
		U = any,
		V = any,
		W = any,
		X = any,
		Y = any,
		> =
		| TapObject0 | TapCtxObject0<T>
		| TapObject1<A> | TapCtxObject1<T, A>
		| TapObject2<A, B> | TapCtxObject2<T, A, B>
		| TapObject3<A, B, C> | TapCtxObject3<T, A, B, C>
		| TapObject4<A, B, C, D> | TapCtxObject4<T, A, B, C, D>
		| TapObject5<A, B, C, D, E> | TapCtxObject5<T, A, B, C, D, E>
		| TapObject6<A, B, C, D, E, F> | TapCtxObject6<T, A, B, C, D, E, F>
		| TapObject7<A, B, C, D, E, F, G> | TapCtxObject7<T, A, B, C, D, E, F, G>
		| TapObject8<A, B, C, D, E, F, G, H> | TapCtxObject8<T, A, B, C, D, E, F, G, H>
		| TapObject9<A, B, C, D, E, F, G, H, I> | TapCtxObject9<T, A, B, C, D, E, F, G, H, I>
		| TapObject10<A, B, C, D, E, F, G, H, I, J> | TapCtxObject10<T, A, B, C, D, E, F, G, H, I, J>
		| TapObject11<A, B, C, D, E, F, G, H, I, J, K> | TapCtxObject11<T, A, B, C, D, E, F, G, H, I, J, K>
		| TapObject12<A, B, C, D, E, F, G, H, I, J, K, L> | TapCtxObject12<T, A, B, C, D, E, F, G, H, I, J, K, L>
		| TapObject13<A, B, C, D, E, F, G, H, I, J, K, L, M> | TapCtxObject13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>
		| TapObject14<A, B, C, D, E, F, G, H, I, J, K, L, M, N> | TapCtxObject14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>
		| TapObject15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> | TapCtxObject15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
		| TapObject16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> | TapCtxObject16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
		| TapObject17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> | TapCtxObject17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
		| TapObject18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> | TapCtxObject18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
		| TapObject19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> | TapCtxObject19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
		| TapObject20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> | TapCtxObject20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>
		| TapObject21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> | TapCtxObject21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>
		| TapObject22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> | TapCtxObject22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>
		| TapObject23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> | TapCtxObject23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>
		| TapObject24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> | TapCtxObject24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>
		;

	export type HookObject<
		T = any,
		// Loop produces A = any, B = any, C = any, etc... using /\bA\b/g replace
		A = any,
		B = any,
		C = any,
		D = any,
		E = any,
		F = any,
		G = any,
		H = any,
		I = any,
		J = any,
		K = any,
		L = any,
		M = any,
		N = any,
		O = any,
		P = any,
		Q = any,
		R = any,
		S = any,
		U = any,
		V = any,
		W = any,
		X = any,
		Y = any,
		> =
		| HookSync0<T> | HookAsync0<T>
		| HookSync1<T, A> | HookAsync1<T, A>
		| HookSync2<T, A, B> | HookAsync2<T, A, B>
		| HookSync3<T, A, B, C> | HookAsync3<T, A, B, C>
		| HookSync4<T, A, B, C, D> | HookAsync4<T, A, B, C, D>
		| HookSync5<T, A, B, C, D, E> | HookAsync5<T, A, B, C, D, E>
		| HookSync6<T, A, B, C, D, E, F> | HookAsync6<T, A, B, C, D, E, F>
		| HookSync7<T, A, B, C, D, E, F, G> | HookAsync7<T, A, B, C, D, E, F, G>
		| HookSync8<T, A, B, C, D, E, F, G, H> | HookAsync8<T, A, B, C, D, E, F, G, H>
		| HookSync9<T, A, B, C, D, E, F, G, H, I> | HookAsync9<T, A, B, C, D, E, F, G, H, I>
		| HookSync10<T, A, B, C, D, E, F, G, H, I, J> | HookAsync10<T, A, B, C, D, E, F, G, H, I, J>
		| HookSync11<T, A, B, C, D, E, F, G, H, I, J, K> | HookAsync11<T, A, B, C, D, E, F, G, H, I, J, K>
		| HookSync12<T, A, B, C, D, E, F, G, H, I, J, K, L> | HookAsync12<T, A, B, C, D, E, F, G, H, I, J, K, L>
		| HookSync13<T, A, B, C, D, E, F, G, H, I, J, K, L, M> | HookAsync13<T, A, B, C, D, E, F, G, H, I, J, K, L, M>
		| HookSync14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N> | HookAsync14<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N>
		| HookSync15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> | HookAsync15<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
		| HookSync16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> | HookAsync16<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
		| HookSync17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> | HookAsync17<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
		| HookSync18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> | HookAsync18<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
		| HookSync19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> | HookAsync19<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
		| HookSync20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U> | HookAsync20<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U>
		| HookSync21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V> | HookAsync21<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V>
		| HookSync22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W> | HookAsync22<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W>
		| HookSync23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X> | HookAsync23<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X>
		| HookSync24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y> | HookAsync24<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y>
		;
}
