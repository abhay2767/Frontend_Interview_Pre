/**
 * @param {number[]} prices
 * @return {number}
 */

/* 
Best Time to Buy and Sell Stock
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.
 */
var maxProfit = function (prices) {
    let min = prices[0];
    let maxProfit = 0;
    /* Took i = 1 because on same day alway it return 0 which is worthless */
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min;
        }

        if (prices[i] < min) {
            min = prices[i]
        }
    }
    return maxProfit;
};

console.log("MaxProfit:-", maxProfit([7, 1, 5, 3, 6, 4]))