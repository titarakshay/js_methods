// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers

numbers.sort((a,b)=> a-b);
numbers[numbers.length-1];

// Find longest string in strings

strings.reduce((acc,cv) => acc.length < cv.length ? cv: acc)

// Find all the even numbers

numbers.filter((a=> (a%2==0)));
// Find all the odd numbers

numbers.filter((a=> (a%2!=0)));
// Find all the words that contain 'is' use string method 'includes'

strings.includes("is");

// Find all the words that contain 'is' use string method 'indexOf'

strings.indexOf("is");

// Check if all the numbers in numbers array are divisible by three use array method (every)

numbers.every((a,index,array) => a%3==0);

//  Sort Array from smallest to largest
numbers.sort((a,b)=> a-b);

// Remove the last word in strings

strings.pop();
// Add a new word in the array

strings.push("akshay");

// Remove the first word in the array

numbers.shift();
strings.shift();

// Place a new word at the start of the array use (upshift)

strings.unshift("this");

// Make a subset of numbers array [18,9,7,11]

var newArr=numbers.splice(3,4);

// Make a subset of strings array ['a','collection']

var subStrings=strings.slice(2,4);

// Replace 12 & 18 with 1221 and 1881 
numbers.splice(1,1,1221);
numbers.splice(3,1,1881);

// Replace words with string in strings array

strings.splice(5,1,"strings");

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'

customers.filter(a=>a.firstname.startsWith("J")); 

// Create new array with firstname and lastname

var newarr=customers.map(a=>a.firstname +" "+ a.lastname); 

// Sort the array created above alphabetically

newarr.sort();