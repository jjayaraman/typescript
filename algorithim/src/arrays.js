/**
 * Arrays algorithims
 *
 *
 */
var ArraysEx = /** @class */ (function () {
    function ArraysEx() {
    }
    ArraysEx.prototype.sortAscending = function (array) {
        for (var i = 0; i < array.length; i++) {
            for (var j = i + 1; j < array.length; j++)
                if (array[i] > array[j]) {
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
        }
        return array;
    };
    ArraysEx.prototype.sortDescending = function (array) {
        for (var i = 0; i < array.length; i++) {
            for (var j = i + 1; j < array.length; j++)
                if (array[i] < array[j]) {
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
        }
        return array;
    };
    // Find the given number of max numbers.
    ArraysEx.prototype.findFirstNMax = function (array, size) {
        return this.sortDescending(array).slice(0, size);
    };
    ArraysEx.prototype.hello = function () {
        console.log("hello..");
    };
    ArraysEx.prototype.test = function () {
        console.log("test..");
    };
    return ArraysEx;
}());
console.log("Res : ", ArraysEx.prototype.sortAscending([2, 6, 3, 8, 7, 4, 5]));
console.log("Res : ", ArraysEx.prototype.sortDescending([2, 6, 3, 8, 7, 4, 5]));
console.log("Res : ", ArraysEx.prototype.findFirstNMax([2, 6, 3, 8, 7, 4, 5], 3));
