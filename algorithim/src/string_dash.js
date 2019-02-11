var StringDash = /** @class */ (function () {
    function StringDash() {
        this.input = "13566";
    }
    StringDash.prototype.applyDash = function () {
        var numbers = this.input.split("");
        numbers.forEach(function (n) {
            if (parseInt(n) % 2 === 0) {
                var index = numbers.indexOf(n);
                numbers.fill("-", index, index + 1);
            }
        });
        console.log(numbers);
    };
    return StringDash;
}());
StringDash.prototype.applyDash();
