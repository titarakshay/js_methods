1 var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year
var newdata=data.filter(ele => {
  if(ele.type == "dog"){
  return true;
  }
});

function add(arr){
  var sum=0;
  var double=0
  for(let i=0;i<arr.length;i++){
   sum += (arr[i].age);
  }
return double=(sum*7);
}
// your code goes here

// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog

var newdata=data.filter(ele => ele.type == "dog");

// 2. map - to multiply human year to dog year

newdata.map(ele => ele.age*7);

// 3. reduce - to accumulate total age.
newdata.reduce((acc,cv )=> acc +=(cv.age*7),0);
// Solution 105
