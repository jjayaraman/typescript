function dash1() {
  var input = "13566";
  var numbers = input.split("");
  numbers.forEach(function(n) {
    if (parseInt(n) % 2 === 0) {
      var index = numbers.indexOf(n);
      numbers.fill("-", index, index + 1);
    }
  });
  console.log(numbers);
}


function dash2() {
  var input = "13566";
  var numbers = input.split("");
 // var result = numbers;
  for (let index = 0; index < numbers.length; index= index+2) {
    const first = numbers[index];
    const second = numbers[index+1];
    // if(isNaN(first) || isNaN(second)) {
    //   break;
    // }
    if((first % 2 !==0) && (second %2 !== 0)) {
      numbers.splice(index+1,0,'-')
    }

  }
   console.log(numbers.join(''));  
}


function StockPicker(arr) { 
  
  var max_profit = -1;
  var buy_price = 0;
  var sell_price = 0;
  
  // this allows our loop to keep iterating the buying
  // price until a cheap stock price is found
  var change_buy_index = true;
  
  // loop through list of stock prices once
  for (var i = 0; i < arr.length-1; i++) {
    
    // selling price is the next element in list
    sell_price = arr[i+1]; 
    
    // if we have not found a suitable cheap buying price yet
    // we set the buying price equal to the current element
    if (change_buy_index) { buy_price = arr[i]; }
    
    // if the selling price is less than the buying price
    // we know we cannot make a profit so we continue to the 
    // next element in the list which will be the new buying price
    if (sell_price < buy_price) {
      change_buy_index = true; 
      continue;
    }
    
    // if the selling price is greater than the buying price
    // we check to see if these two indices give us a better 
    // profit then what we currently have
    else { 
      var temp_profit = sell_price - buy_price;
      if (temp_profit > max_profit) { max_profit = temp_profit; }
      change_buy_index = false;
    }
    
  }
  
  return max_profit;
         
}

StockPicker([44, 30, 24, 32, 35, 30, 40, 38, 15]);  