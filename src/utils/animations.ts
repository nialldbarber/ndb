export type Colors = string[];

/**
 * Takes an array and cycles through
 * each item until the end is reached.
 * Perfect for spitting out a new colour
 * for the logo
 *
 * @constructor
 */
class CycledColors {
  count: number;
  colorChoice: string;
  siteColors: Colors;

  constructor() {
    this.count = 0;
    this.colorChoice = '';
    this.siteColors = ['green', 'orange', 'pink'];
  }

  increment() {
    if (this.count === 2) {
      this.count = 0;
    } else {
      this.count += 1;
    }
    this.colorChoice = this.siteColors[this.count];
    return this.colorChoice;
  }
}

export const getCycledColors = new CycledColors();
