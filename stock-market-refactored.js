function maxProfit(arr) {
    let availableMin = [];
    let currentMin = arr[0];

    // Create and array of minimum purchase values available up to a point.
    arr.forEach(value => {
        currentMin = value < currentMin ? value : currentMin;
        availableMin.push(currentMin);
    });

    // Calculate the available/possible profit that could have been made on given sell date based on possible previous purchase dates.
    var availableProfit = arr.map((value, index) => value - availableMin[index])
    return Math.max.apply(null, availableProfit);
}

let Array = [45, 24, 35, 31, 40, 38, 11];
console.log(`The max profit is: ` + maxProfit(Array));