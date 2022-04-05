/**
 * Extract arguments type from function
 */
export type ArgumentsType<F> = F extends (...args: infer A) => any ? A : never;

/**
 * Creates an object like O. Optionally provide minimum set of properties P which the objects must share to conform
 */
type ObjectLike<O extends Record<string, any>, P extends keyof O = keyof O> = Pick<O, P>;
