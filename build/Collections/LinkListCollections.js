"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListCollection = void 0;
class LinkedListCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) { }
}
exports.LinkedListCollection = LinkedListCollection;
