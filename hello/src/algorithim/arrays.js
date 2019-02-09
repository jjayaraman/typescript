var ArraysEx = /** @class */ (function () {
    function ArraysEx() {
        this.age = [2, 6, 3, 8, 7, 4, 5];
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
    return ArraysEx;
}());
console.log("Res : ", ArraysEx.prototype.sortAscending([2, 6, 3, 8, 7, 4, 5]));
console.log("Res : ", ArraysEx.prototype.sortDescending([2, 6, 3, 8, 7, 4, 5]));
