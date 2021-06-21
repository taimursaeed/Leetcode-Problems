/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  var result = ["1"];
  for (i = 2; i <= n; i++) {
    var t3 = i % 3 === 0;
    
    var t5 = i % 5 === 0;
    
    if (t3 || t5) {
      var temp = t3
        ? t5
          ? "FizzBuzz"
          : "Fizz"
        : t5 && (t3 ? "FizzBuzz" : "Buzz");
      result.push(temp);
    } else {
      result.push(i.toString());
    }
  }
  return result;
};
x = fizzBuzz(3);
console.log(x)
