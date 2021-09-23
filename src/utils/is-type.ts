/**
 * Tests if input is a function
 * @param test any
 * @returns boolean
 */
export function isFunction(test: any): boolean {
  return typeof test === ('function' as string);
}

/**
 * Tests array is populated with `type` input
 *
 * @param test any[]
 * @param type string
 * @returns boolean
 */
export function isArrayType(test: any[], type: string): boolean {
  return Array.isArray(test) && !test.some((value) => typeof value !== type);
}
