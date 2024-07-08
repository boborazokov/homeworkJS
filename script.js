// function checkThirdWord(text, query) {
//   var words = text.split(" ");

//   if (words.length >= 3) {
//     var thirdWord = words[2];

//     var lowerThirdWord = thirdWord.toLowerCase();
//     var lowerQuery = query.toLowerCase();

//     return lowerThirdWord.startsWith(lowerQuery);
//   }

//   return false;
// }

// var text = prompt("Enter text");
// var query = prompt("Enter letter or word");
// var result = checkThirdWord(text, query);

// console.log(result);

var format = prompt("Enter format");

var yaer = prompt("Enter Year");
var month = prompt("Enter Month");
var date = prompt("Enter Date");

var formatedDate = format
  .replace("YYYY", yaer)
  .replace("DD", date)
  .replace("MM", month);

console.log(formatedDate);
