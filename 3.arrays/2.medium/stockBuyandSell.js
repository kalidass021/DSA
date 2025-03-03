// Best time to buy and sell stocks

let arr = [7, 1, 5, 3, 6, 4];

let n = arr.length;

function stockBuyAndSell(arr, n) {
  let mini = arr[0];

  let maxProfit = 0;

  for (let i = 1; i < n; i++) {
    let cost = arr[i] - mini;

    maxProfit = Math.max(maxProfit, cost);

    mini = Math.min(mini, arr[i]);
  }

  return maxProfit;
}

console.log(stockBuyAndSell(arr, n));
