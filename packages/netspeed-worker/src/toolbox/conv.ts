/**
 * Convert seconds to milliseconds.
 * @param val - The value to convert.
 * @returns - The value in milliseconds.
 */
export function convertToMs(val: number) {
    return (Number(val.toFixed(3)) * 1000);
  }
