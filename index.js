const name1 = "Kyle";
const name2 = "Eve";
const name3 = "Dave";

const longestText = "is the longest name";
const longestName = "tie for the longest name";

let longest = name1;
let result = `${longest} ${longestText}`;

if(name2.length > longest.length) {
  longest = name2;
  result = `${longest} ${longestText}`;
} else if(name2.length === longest.length) {
  result = `${longest} and ${name2} ${tieText}`;
}

if(name3.length > longest.length) {
  longest = name3;
  result = `${longest} is the longest name`;
} else if(name3.length === longest.length) {
  result = `${longest} and ${name3} ${tieText}`;
}

if(name3.length === name2.length && name1.length === name2.length) {
  result = `${name1}, ${name2, and ${name3} ${tieText}`;
}

console.log(result);
