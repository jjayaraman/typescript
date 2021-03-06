/**
 * Arrays algorithims
 *
 *
 */
class ArraysEx {
  sortAscending(array: Array<number>) {
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

  sortDescending(array: Array<number>) {
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
  findFirstNMax(array: Array<number>, size: number) {
    return this.sortDescending(array).slice(0, size);
  }

  hello() {
    console.log("hello..");
  }
}

console.log("Res : ", ArraysEx.prototype.sortAscending([2, 6, 3, 8, 7, 4, 5]));
console.log("Res : ", ArraysEx.prototype.sortDescending([2, 6, 3, 8, 7, 4, 5]));
console.log(
  "Res : ",
  ArraysEx.prototype.findFirstNMax([2, 6, 3, 8, 7, 4, 5], 3)
);
