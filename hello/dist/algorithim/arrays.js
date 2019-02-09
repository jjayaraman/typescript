"use strict";
class ArraysEx {
    constructor() {
        this.age = [2, 6, 3, 8, 7, 4, 5];
    }
    sortAscending(array) {
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++)
                if (array[i] < array[j]) {
                    let temp = array[i];
                    array[j] = temp;
                    array[i] = array[j];
                }
        }
    }
    hello() {
        console.log("hello...");
    }
    sortAge() {
        console.log("test..");
        this.sortAscending(this.age);
    }
}
