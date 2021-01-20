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
