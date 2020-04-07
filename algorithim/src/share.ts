class SharePrice {
  findBestPair(prices: number[]) {
    let startIndex = 0;
    let endIndex = 1;
    let buyPrice = prices[0];
    let sellPrice = prices[1];
// [45, 24, 35, 31, 40, 38, 11]
    for (let index = 0; index < prices.length; index++) {
      const first = prices[index];
      const second = prices[index + 1];
      console.log(first, second);

      if (first && second && first < second) {
        buyPrice = first;
        sellPrice = second;
        // if (buyPrice !== -1 && first < buyPrice) {
          buyPrice = first;
        }
        if (sellPrice !== -1 && second > sellPrice) {
          sellPrice = second;
        }
      }
    }
    console.log("buyPrice ", buyPrice);
    console.log("sellPrice ", sellPrice);

    return sellPrice - buyPrice; // 16
  }
}

const input = [45, 24, 35, 31, 40, 38, 11];
console.log(SharePrice.prototype.findBestPair(input));
