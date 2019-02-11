class StringDash {
  input = "13566";

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
