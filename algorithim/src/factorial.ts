class Factorial {
  findNFactorial(x: number): number {
    let result = 1;
    for (; x > 0; x--) {
      result = result * x;
    }
    return result;
  }
}

console.log(Factorial.prototype.findNFactorial(5));
