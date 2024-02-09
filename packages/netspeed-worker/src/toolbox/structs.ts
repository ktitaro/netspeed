import { HashMap } from '../types';

/**
 * Checks if the data represented as an object.
 * @param data - an unknown piece of random data.
 * @returns - whether the data is a valid object.
 */
export function isObject<T extends object>(data: unknown): data is T {
    return typeof data === 'object' && data !== null;
}

/**
 * Checks if the data represented as a hashmap.
 * @param data - an unknown piece of random data.
 * @returns - whether the data is a valid hashmap.
 */
export function isHashMap<T extends HashMap>(data: unknown): data is T {
    return isObject(data) && !Array.isArray(data);
}
