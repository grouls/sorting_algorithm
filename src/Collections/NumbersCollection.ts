import { Sorter } from '../Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }
  // The code block below is the long form equivalent of
  // the single line above
  /**
   * Start code block
   */
  // data: number[];

  // constructor(data: number[]) {
  //   this.data = data;
  // }
  /**
   * End code block
   */

  get length(): number {
    return this.data.length;
  }

  compare(leftHand: number, rightHand: number): boolean {
    return this.data[leftHand] > this.data[rightHand + 1];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
