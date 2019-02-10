"use strict";
/**
 * Arrays algorithims
 *
 *
 */
class ArraysEx {
    sortAscending(array) {
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++)
                if (array[i] > array[j]) {
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
        }
        return array;
    }
    sortDescending(array) {
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++)
                if (array[i] < array[j]) {
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
        }
        return array;
    }
    hello() {
        console.log('hello..');
    }
}
console.log("Res : ", ArraysEx.prototype.sortAscending([2, 6, 3, 8, 7, 4, 5]));
console.log("Res : ", ArraysEx.prototype.sortDescending([2, 6, 3, 8, 7, 4, 5]));
