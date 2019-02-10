var Factorial = /** @class */ (function () {
    function Factorial() {
    }
    Factorial.prototype.findNFactorial = function (x) {
        var result = 1;
        for (; x > 0; x--) {
            result = result * x;
        }
        return result;
    };
    return Factorial;
}());
console.log(Factorial.prototype.findNFactorial(50));
