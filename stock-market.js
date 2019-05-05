function maxProfit(arr) {
    let buy = 0;
    let sell = 1;
    let profit = arr[sell]-arr[buy]
    let currentProfit = profit;
    
    for(let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            currentProfit = arr[j]-arr[i];
            if(currentProfit > profit) {
                profit = currentProfit;
                buy = i;
                sell = j;
           }
        }
    }
    return (profit > 0) ? [profit, buy, sell] : [-1]
}


let Array = [45, 24, 35, 31, 40, 38, 11];
console.log(`The max profit is ${maxProfit(Array)[0]} for the following array:`)
console.log(Array);

