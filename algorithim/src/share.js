var SharePrice = /** @class */ (function () {
    function SharePrice() {
    }
    SharePrice.prototype.findBestPair = function (prices) {
        var startIndex = 0;
        var endIndex = 1;
        var buyPrice = -1;
        var sellPrice = -1;
        for (var index = 0; index < prices.length - 1; index++) {
            var first = prices[index];
            var second = prices[index + 1];
            console.log(first, second);
            if (first && second && first < second) {
                buyPrice = first;
                sellPrice = second;
                // if (buyPrice !== -1 && first < buyPrice) {
                //   buyPrice = first;
                // }
                // if (sellPrice !== -1 && second > sellPrice) {
                //   sellPrice = second;
                // }
            }
        }
        console.log("buyPrice ", buyPrice);
        console.log("sellPrice ", sellPrice);
        return sellPrice - buyPrice; // 16
    };
    return SharePrice;
}());
var input = [45, 24, 35, 31, 40, 38, 11];
console.log(SharePrice.prototype.findBestPair(input));
