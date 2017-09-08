function isPalindrome(s) {
  var notReverse = s.split(" ").join("");
  var stringReverse = notReverse.split("").reverse().join("");
  return notReverse == stringReverse;
}

module.exports = isPalindrome;


// console.log(isPalindrome("a man a plan a canal panama"));