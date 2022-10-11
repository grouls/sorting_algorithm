"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
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
    get length() {
        return this.data.length;
    }
    compare(leftHand, rightHand) {
        return this.data[leftHand] > this.data[rightHand + 1];
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;
