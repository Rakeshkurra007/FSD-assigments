function min(a,b){
    if(a<b){
        return a
    }
    else{
        return b
    }
}
c = min(200,400)
console.log(c)


console.log("------------------------------------------------------------------------------")

function isEven(n) {
    if (n === 0) {
      return true;
    } else if (n === 1) {
      return false;
    } else if (n < 0) {
      return isEven(-n); // Convert negative numbers to positive
    } else {
      return isEven(n - 2); // Recursive call
    }
  }

  // Test cases
  console.log(isEven(50)); // → true
  console.log(isEven(75)); // → false
  console.log(isEven(-1)); // → false
