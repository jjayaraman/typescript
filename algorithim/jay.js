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
  var result = numbers;
  for (let index = 0; index < numbers.length; index= index+2) {
    const first = numbers[index];
    const second = numbers[index+1];
    console.log(first, second);
    if(isNaN(first) || isNaN(second)) {
      break;
    }
    if((first % 2 !==0) && (second %2 !== 0)) {
      result.splice(index+1,0,'-')
    }

  }
   console.log(result);  
}