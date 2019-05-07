function maxProfit(arr) {
    let availableMin = arr[0];
    let availableMaxProfit = 0;
    // Loop through array and find available minimum and available max profit for a given sell date.
    arr.forEach(value => {
        availableMin = value < availableMin ? value : availableMin;
        let currentProfit = value - availableMin;
        availableMaxProfit = currentProfit > availableMaxProfit ? currentProfit : availableMaxProfit;
    });
    return availableMaxProfit;
}
let Array = [45, 24, 35, 31, 40, 38, 11];
console.log(`The max profit is: ` + maxProfit(Array));