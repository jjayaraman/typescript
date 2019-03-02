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
    // Find the given number of max numbers.
    findFirstNMax(array, size) {
        return this.sortDescending(array).slice(0, size);
    }
    hello() {
        console.log("hello..");
    }
}
console.log("Res : ", ArraysEx.prototype.sortAscending([2, 6, 3, 8, 7, 4, 5]));
console.log("Res : ", ArraysEx.prototype.sortDescending([2, 6, 3, 8, 7, 4, 5]));
console.log("Res : ", ArraysEx.prototype.findFirstNMax([2, 6, 3, 8, 7, 4, 5], 3));
class Factorial {
    findNFactorial(x) {
        let result = 1;
        for (; x > 0; x--) {
            result = result * x;
        }
        return result;
    }
}
console.log(Factorial.prototype.findNFactorial(5));
class SharePrice {
    findBestPair(prices) {
        let startIndex = 0;
        let endIndex = 1;
        let buyPrice;
        let sellPrice;
        for (let index = 0; index < prices.length; index++) {
            const first = prices[index];
            const second = prices[index + 1];
            if (first < second) {
                buyPrice = first;
                sellPrice = second;
            }
        }
        console.log('buyPrice ', buyPrice);
        console.log('sellPrice ', sellPrice);
    }
}
const input = [45, 24, 35, 31, 40, 38, 11];
console.log(SharePrice.prototype.findBestPair(input));
class StringDash {
    constructor() {
        this.input = "13566";
    }
    applyDash() {
        let numbers = this.input.split("");
        numbers.forEach(n => {
            if (parseInt(n) % 2 === 0) {
                const index = numbers.indexOf(n);
                numbers.fill("-", index, index + 1);
            }
        });
        console.log(numbers);
    }
}
StringDash.prototype.applyDash();
