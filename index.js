function isPalindrome(word) {
  // Write your algorithm here
//   create an array from the input string
// reverse the array
// create a string from the reversed array
// return the reversed string
}

/* 
  Add your pseudocode here
*/
// reverse the input string

// if the reversed string is the same as the input
//   return true
// else
//   return false
/*
  Add written explanation of your solution here
*/
function reverseString(term) {
  const termArray = term.split("");
  const reverseTermArray = termArray.reverse();
  const reverseTerm = reverseTermArray.join("");
 return term;
}
function isPalindrome(term){
  const reverseTerm=reverseString(term)
  if(term==reverseTerm){
    return true}
    else{return false}
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("Expecting: ih");
console.log("=>", reverseString("hi"));

console.log("");

console.log("Expecting: tobor");
console.log("=>", reverseString("robot"));

console.log("");

console.log("Expecting: mom");
console.log("=>", reverseString("mom"));
}

module.exports = isPalindrome;
