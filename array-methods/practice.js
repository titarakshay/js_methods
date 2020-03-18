// Use below arrays to make questions for yourself and practice the methods like
// map
// forEach
// filter
// splics
// reduce
// etc ..

// Write atleast 10 different question for every method.

var pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];

var cuts = [
  "Chuck",
  "Brisket",
  "Shank",
  "Rib",
  "Plate",
  "Flank",
  "Short Loin",
  "Tenderloin",
  "Sirloin",
  "Round"
];

var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];


//map
//1. double the array value

function double(value){
   return (value*2);
}

numbers.map(double);

//2.addition function apply on array:

function add2(value){
   return (value+2);
}
numbers.map(add2);

//3. take square function of array.

function square(value){
  return (value*value);
}
numbers.map(square);

//4. Take sqroot of array.


function root(n){
  return (Math.sqrt(n));
}

numbers.map(root);



//forEach
//1. Write all the elements along with its index value

numbers.forEach((a,i)=> console.log(`${i} : ${a}`));

//2. Make convert each numbers into even number and display.

numbers.forEach(a => console.log(a+(a%2)));