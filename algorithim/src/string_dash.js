var StringDash = /** @class */ (function () {
    function StringDash() {
        this.numbers = [3, 2];
    }
    //,'6','4','7','8'];
    StringDash.prototype.applyDash = function () {
        var _this = this;
        this.numbers.forEach(function (n) {
            if (n % 2 === 0) {
                var index = _this.numbers.indexOf(n);
                _this.numbers.fill(0, index, index + 1);
            }
        });
        console.log(this.numbers);
    };
    return StringDash;
}());
StringDash.prototype.applyDash();
