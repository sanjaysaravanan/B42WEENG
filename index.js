// Prob 1: ['1', '2', '3', '4', '5']
  
// Prob 2: 1 4 9 16 25

// print in single with empty space using a string variable

var arr = ['1', '2', '3', '4', '5'];
// new string variable 
var resString = '';
  
// iterate an array
for(var i=0;i<arr.length;i++) {
    
  // Number() ---> convert string to number
  
  var num = Number(arr[i]);
  
  // console.log( num ** 2 ); // num * num
  
  // avoid last space
  if ( i === arr.length - 1 ) {
      resString = resString + (num ** 2);    
  } else {
      resString = resString + (num ** 2) + ' ';
  }
}
/* resString --> ''
  1 --> resString '1'
  2 --> resString '14'
  .
  .
  5 --> resString '1491625'
*/



// Method 2
  
  // put all the elements into an array and use join to output the result
  
  var resArr = [];
  
  for(var i=0; i<arr.length;i++) {
     const num = Number(arr[i]);
    resArr[i] = num ** 2; 
  }
  
  /* resArr = []
    1 --> resArr = [1]
    2 --> resArr = [1, 4]
    .
    .
    5 --> resArr = [1, 4, 9, 16, 25]
  */
  
  console.log(resArr.join(' '));



// create a function to add two number
// function should take two arguements/parameters ( x, y )

// non-paramaterised function -> function without arguements
function displayInfo() {
  console.log('Service A is down');
}


// parameterized function ---> function with arguements 
function add(x, y) {
  console.log(x + y);
}


// Fibonacci Series
// INPUT 5
// OUTPUT 0 1 1 2 3

var num = Number(userInput[0]);

var arr = [0, 1];

for(var i=2; i < num; i++) {
  
  // current value is i - 1th value i - 2th value ie: arr[i - 1] + arr[i - 2];
  
  arr[i] = arr[i - 1] + arr[i - 2];
  
}

console.log(arr.join(' '));


// Factorial
// get the userInput
  
const num = Number(userInput[0]);
  
var fact = 1;

// decrementing
for(var i=num; i > 1 ;i--) {
  fact = fact * i;
}

console.log(fact);

// 1 x 2 x 3 x 4 x 5

fact = 1;
// incrementing
for(var i=2; i <= num  ;i++) {
  fact = fact * i;
}

console.log(fact);


// Object and Array
var arr = [1, 2, 3, 4, 5];

var obj = {
  zero: 1,
  one: 2,
  two: 3,
  three: 4,
  four: 5
}

var obj2 = {
  name: "Sanjay",
  role: 'Developer',
  designation: 'Software Engineer'
}

// third element of arr
console.log(arr[2]);

// print the role of obj2
console.log(obj2['role']);


// Searching
/*
    n k
    Array of n number space separated

    5 15
    10 15 20 25 30
    
    Output:
        Index of the kth element in the array
        else if the k is not found in array print -1
    
*/

// Input n, k
const line1 = userInput[0];

const n = Number(line1.split(' ')[0]);
const k = line1.split(' ')[1];

// Input Array
const arr = userInput[1].split(' ');

// flag
var flag = false;

var index = null;

for(var i=0; i < arr.length; i++) {
    if (k === arr[i]) {
        index = i;
        flag = true;
        break;
    }
}

if (flag) {
    console.log(index);
} else {
    console.log(-1);
}


// Sum beautiful or not
const N = Number(userInput[0]);
const arrStr = userInput[1].split(' ');

var resSum = 0;

for(var i=0;i<arrStr.length;i++) {
    resSum = resSum + parseInt(arrStr[i]);
}

/*
    resSum = 0
    '5' --> resSum = resSum(0) + 5 ---> 5
    '6' --> resSum = resSum(5) + 6 ---> 11 
    '7' --> resSum = resSum(11) + 7 ---> 18
    '8' --> resSum = resSum(18) + 8 ---> 26
    '9' --> resSum = resSum(26) + 9 ---> 35

*/

// check if the sum is beautiful or not

if ( resSum % 2 === 0 && resSum % 3 === 0 && resSum % 5 === 0 ) {
    console.log(1);
} else {
    console.log(0);
}


// Find Max value in array
// Find Maximum element of the given array
const N = Number(userInput[0]);
    
const arrStr = userInput[1].split(' ');
 
const arrNum = [];

// convert all to num into an array
for(var i=0; i < arrStr.length; i++) {
    arrNum[i] = Number(arrStr[i]);
}

// initial value
var maxNum = -9999;

for (var i=0; i<arrNum.length;i++) {
    if (maxNum < arrNum[i]) {
        maxNum = arrNum[i];
    }
}

console.log(maxNum);

// Find Minimum element of the given array
const N = Number(userInput[0]);

const arrStr = userInput[1].split(' ');
  
const arrNum = [];

// convert all to num into an array
for(var i=0; i < arrStr.length; i++) {
    arrNum[i] = Number(arrStr[i]);
}

// initial value
var minNum = 9999;

for (var i=0; i<arrNum.length;i++) {
    if (minNum > arrNum[i]) {
        minNum = arrNum[i];
    }
}

console.log(minNum);


//Loop inside loop
    
const arr = userInput[0].split(' ');
// 1 2 3 4 5

/*  
    1 2 3 4 5 i = 0, j = 0
    2 3 4 5
    3 4 5
    4 5
    5
*/

for(var i = 0; i < arr.length; i++ ) {
    
    var outputStr = '';
    for(var j=i; j < arr.length; j++) {
        if ( j === arr.length - 1 ) {
            outputStr = outputStr + arr[j];
        } else {
            outputStr = outputStr + arr[j] + " ";    
        }
    }
    
    console.log(outputStr);
}

/*
    i=0
        outputStr = ""
        j = 0 --> outputStr = '1 ';
        j = 1 --> outputStr = '1 2 ';
        j = 2 --> outputStr = '1 2 3 ';
        j = 3 --> outputStr = '1 2 3 4 ';
        j = 4 --> outputStr = '1 2 3 4 5';
    
    Line1 --> '1 2 3 4 5'
    
    i=1
        outputStr = ""
        j = 1 --> outputStr = '2 ';
        j = 2 --> outputStr = '2 3 ';
        j = 3 --> outputStr = '2 3 4 ';
        j = 4 --> outputStr = '2 3 4 5';
        
    Line2 --> '2 3 4 5';
    .
    .
    i=4
        outputStr = ""
        j = 4 --> outputStr = '5';
*/

//Loop inside loop
const N = Number(userInput[0]);
const arr = userInput[1].split(' ');

const arrNum = [];

for(var i=0;i<arr.length;i++) {
    arrNum[i] = Number(arr[i]);
}
var resStr = '';
for(var i = 0; i < arr.length; i++ ) {
    
    var flag = false;
    var nextLesserNum = null;
    for(var j=i+1;j<N; j++) {
        if (arrNum[i] > arrNum[j]) {
            nextLesserNum = arrNum[j];
            flag = true;
            break;
        }
    }
    if (!flag) {
        resStr = resStr + '-1' + " ";
    } else {
        resStr = resStr + nextLesserNum + " ";
    }
}
console.log(resStr.trim());