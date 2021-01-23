/**
 * Gets the current year and
 * outputs it
 *
 * @constructor
 */
export function getCurrentYear(): number {
  const date: Date = new Date();
  return date.getFullYear();
}

/**
 * Takes a URL and return it
 * minus any forward slashes
 *
 * @param str string
 */
export function removeForwardSlash(str: string): string {
  return str.replace(/\//g, '');
}
