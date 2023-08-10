// LET, VAR & CONST:




//The value of pi, which will not change. If you try reassigning a value declared with const, 
//you will get an error:
//answer 1
     true
     
//Write a function that takes an array of numbers and returns the sum of the squares of
//each number. Use let, const and var to declare variables in different scopes.
//anser 2


    function sumOfSquares(numbers) {
        let sum = 0; // Variable declared with let in the function scope
      
        for (const num of numbers) {
          const square = num * num; // Constant variable declared with const in the loop scope
          sum += square;
        }
      
        if (sum > 100) {
          var message = "The sum is greater than 100."; // Variable declared with var in the block scope
          console.log(message);
        }
      
        return sum;
      }
      
      const numbers = [1, 2, 3, 4, 5];
      console.log(sumOfSquares(numbers)); 


//Write a loop that iterates over an array of strings and prints the first letter of each
//string. Use let to declare a block-scoped variable inside the loop.
// answer 3

const Strings = ["apple", "banana", "cherry", "date"];

for (let i = 0; i < Strings.length; i++) {
  let firstLetter = Strings[i][0];
  console.log(firstLetter);
}
  

//Write a function that takes a number n and returns a string with n asterisks. Use const
//to declare a constant string that holds one asterisk.
//answer 4

function generateAsterisks(n) {
    const asterisk = "*";
    return asterisk.repeat(n);
  }


  console.log(generateAsterisks(5)); 
  console.log(generateAsterisks(3)); 
  console.log(generateAsterisks(0));
   
 
 //Write a function that takes an object with name and age properties and returns a
//greeting message. Use var to declare a function-scoped variable that holds the message.
//answer 5



function generateGreeting(obj) {
    var message = "Hello, " + obj.name + "! You are " + obj.age + " years old.";
    return message;
  }

  var person = {
    name: "John",
    age: 25
  };
  
  console.log(generateGreeting(person));



 // Write a function that takes an array of numbers and returns the maximum value. Use
//the spread operator (...) to pass the array elements as arguments to the Math.max
//function. Use let to declare a variable that holds the maximum value.
//answer 6



function findMax(Numbers) {
    let max = Math.max(...Numbers);
    return max;
  }

 
let Numbers = [10, 5, 8, 12, 3];
console.log(findMax(Numbers));


//TEMPLATE STRINGS:
//Write a function that takes a person’s name and age and returns a greeting message
//using template strings.
// answer1

function generateGreeting(name, age) {
    return `Hello, ${name}! You are ${age} years old.`;
  }


  console.log(generateGreeting("John", 25)); 
console.log(generateGreeting("Jane", 30));



//Write a function that takes an array of numbers and returns a string with the sum and
//the average of the numbers using template strings.
//answer2



function calculateSumAndAverage(numeral) {
    let sum = 0;
    for (let i = 0; i < numeral.length; i++) {
      sum += numeral[i];
    }
    let average = sum / numeral.length;
    return `The sum is ${sum}, and the average is ${average}.`;
  }


  let numeral= [10, 5, 8, 12, 3];
console.log(calculateSumAndAverage(numeral));

//Write a function that takes a tag name and some text and returns an HTML element
//with that tag and text using template strings.
//answer 3

function createHTMLElement(tagName, text) {
    return `<${tagName}>${text}</${tagName}>`;
  }

  const myElement = createHTMLElement('h1', 'Hello, world!');
  console.log(myElement);


//  Write a function that takes an object with name, price and quantity properties and
  //returns a string with the product information using template strings.
// answer 4

function getProductInfo(product) {
    const { name, price, quantity } = product;
    return `Product: ${name}, Price: $${price}, Quantity: ${quantity}`;
  }


  const myProduct = {
    name: 'Apple',
    price: 0.5,
    quantity: 10
  };
  
  const productInfo = getProductInfo(myProduct);
  console.log(productInfo);


 // Write a function that takes a date object and returns a string with the date formatted as
//dd/mm/yyyy using template strings.
//answer 5

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
  }
  
  const date = new Date();
  console.log(formatDate(date)); 




// destructing 


//Write a function that takes an array of two numbers and returns their sum. Use array
//destructuring to assign the numbers to variables.
// answer 1


function sumArray([num1, num2]) {
    return num1 + num2;
  }

  sumArray([5, 10]); 



















  //Write a function that takes an object with name, age and occupation properties and
//returns a string with the
// answer 2

// function getPersonInfo(person) {
//     const { name, age, occupation } = person;
//     return `Name: ${name}, Age: ${age}, Occupation: ${occupation}`;
//   }
  
//   const person = {
//     name: "John Doe",
//     age: 30,
//     occupation: "Software Engineer"
//   };
  
//   console.log(getPersonInfo(person));

























// Write a function that takes an array of objects with name and score properties and
//returns the name of the person with the highest score. Use array destructuring and the
//spread operator (...) to get the first element and the rest of the array.
// answer 3


function getHighestScorer(players) {
    const [highestScorer, ...rest] = players.sort((a, b) => b.score - a.score);
    return highestScorer.name;
  }


  const players = [
    { name: "John", score: 100 },
    { name: "Jane", score: 95 },
    { name: "Mike", score: 120 },
  ];
  
  console.log(getHighestScorer(players));






















 // Write a function that takes an object with firstName, lastName and middleName
//properties and returns a string with the person’s initials. Use object destructuring with
//default values to assign the properties to variables.
// answer 4

// function getInitials({ firstName = '', lastName = '', middleName = '' }) {
//     const firstInitial = firstName.charAt(0).toUpperCase();
//     const middleInitial = middleName.charAt(0).toUpperCase();
//     const lastInitial = lastName.charAt(0).toUpperCase();
    
//     return `${firstInitial}${middleInitial}${lastInitial}`;
//   }
//   const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     middleName: 'Smith'
//   };
  
//   const initials = getInitials(person);
//   console.log(initials);


















  //Write a function that takes an array of strings and returns an object with two properties:
  //first, which is the first element of the array, and last, which is the last element of the
  //array. Use array destructuring and shorthand property names to create the object.
  // answer 5


//   function getFirstAndLast(arr) {
//     const [first, ...rest, last] = arr;
//     return { first, last };
//   }
  
//   // Example usage:
//   const strings = ['apple', 'banana', 'cherry', 'date'];
//   const result = getFirstAndLast(strings);
//   console.log(result);


















//DEFAULT, REST & SPREAD:
//Write a function that takes two numbers and returns their sum. Use default parameters
//to assign 0 as the default value for both numbers.
// answer 1


// add_numbers(num1=0, num2=0)
//     return num1 + num2
//     result = add_numbers(5, 3)
// print(result)

// result = add_numbers()
// print(result)  



















//Write a function that takes any number of arguments and returns an array with all the
//arguments. Use rest parameters to collect the arguments into an array.
// answer 2

function collectArguments(...args) {
    return args;
  }
  
  // Example usage
  console.log(collectArguments(1, 2, 3));
  console.log(collectArguments('a', 'b', 'c', 'd')); 
  console.log(collectArguments(true, false));


  //Write a function that takes an array of numbers and returns the maximum value. Use
//spread operator to pass the array elements as arguments to Math.max function.
// answer 3

function findMaxValue(integers) {
    return Math.max(...integers);
  }
  const integers = [5, 2, 9, 1, 7];
  const max = findMaxValue(integers);
  console.log(max);


  //Write a function that takes two arrays and returns a new array with the elements of
//both arrays concatenated. Use spread operator to combine the arrays.
// answer 4

function concatenateArrays(arr1, arr2) {
    return [...arr1, ...arr2];
  }
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const concatenatedArray = concatenateArrays(array1, array2);
  console.log(concatenatedArray);

















  //Write a function that takes an object with name, age and occupation properties and
//returns a new object with the same properties but with an additional id property. Use
//spread operator and shorthand property names to create the new object.
// answer 5


// function addIdToObject(obj) {
//      var id = generateId();
//     return {
//       ...obj,
//       id
//     };
//   }
//   var person = {
//     name: "John Doe",
//     age: 25,
//     occupation: "Engineer"
//   };
  
//   var personWithId = addIdToObject(person);
//   console.log(personWithId);








//ARROW FUNCTIONS:
// We can combine the arrow function with certain built-in methods. For example, we can
//use the foreach() method on an array. This method executes a certain function for every
//element in the array. Have a look at this example:
// answer 1

const  digit= [1, 2, 3, 4, 5];

digit.forEach((digit) => {
  console.log(digit * 2);
});


//Write an arrow function that takes a string and returns its length.
//answer 2

const getStringLength = (str) => str.length;
const myString = "Hello, world!";
console.log(getStringLength(myString));

//Write an arrow function that takes two numbers and returns their product.
// answer 3

const multiply = (num1, num2) => num1 * num2;
console.log(multiply(5, 7));

//Write an arrow function that takes an array of numbers and returns the average of the
//numbers.
// answer 4


const calculateAverage = (figure) => {
    if (figure.length === 0) {
      return 0; // Return 0 for an empty array
    }
    
    const sum = figure.reduce((acc, curr) => acc + curr);
    const average = sum / figure.length;
    
    return average;
  };


  const figure = [1, 2, 3, 4, 5];
const average = calculateAverage(figure);
console.log(average);


//Write an arrow function that takes a name and returns a greeting message.
// answer 5

const greet = (name) => {
    return `Hello, ${name}!`;
  };
  
  console.log(greet("hamza"));
  console.log(greet("ali"));

  //Write an arrow function that takes no parameters and returns a random number
//between 0 and 1.
// answer 6
const getRandomNumber = () => Math.random();
const randomNumber = getRandomNumber();
console.log(randomNumber);



//PROMISES:
// Write a function that takes a number and returns a promise that resolves with the
//square of the number after 1 second.
// answer 1

function squareAfterDelay(number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof number === 'number') {
          resolve(number * number);
        } else {
          reject('Invalid input. Please provide a number.');
        }
      }, 1000);
    });
  }

  squareAfterDelay(5)
  .then(result => {
    console.log(result); 
  })
  .catch(error => {
    console.error(error);
  });














  // Write a function that takes an array of promises and returns a promise that resolves
//with an array of the resolved values of each promise.
  // answer 2

//   function resolvePromises(promises) {
//     return Promise.all(promises);
//   }

//   const promises = [promise1, promise2, promise3];
// resolvePromises(promises)
//   .then(resolvedValues => {
//     console.log(resolvedValues); 
//   })
//   .catch(error => {
//     console.error(error); 
//   });
















  //Write a function that takes a URL and returns a promise that fetches the data from the
//URL and parses it as JSON.
// answer 3

// function fetchData(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//         .then(response => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//           }
//           return response.json();
//         })
//         .then(data => resolve(data))
//         .catch(error => reject(error));
//     });
//   }
//   const url = 'https://example.com/data.json';

// fetchData(url)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });



















 // Write a function that takes two promises and returns a promise that resolves with the
//sum of the resolved values of both promises.
//answer 4

function sumOfPromises(promise1, promise2) {
    return new Promise((resolve, reject) => {
      Promise.all([promise1, promise2])
        .then(([value1, value2]) => {
          const sum = value1 + value2;
          resolve(sum);
        })
        .catch(reject);
    });
  }

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(5);
    }, 2000);
  });
  
  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 3000);
  });
  
  sumOfPromises(promise1, promise2)
    .then((result) => {
      console.log(result); // Output: 15
    })
    .catch((error) => {
      console.error(error);
    });



    //Write a function that takes a promise and a timeout in milliseconds and returns a
//    promise that rejects with an error if the original promise does not resolve within the
// timeout. 
// 1. In this exercise, you will create a counter that will output the values in sequence
// using Promises.
// a. Set up a Promise that resolves with a value of Start Counting.
// b. Create a function named counter() that has one argument that gets the value
// and outputs it into the console.
// c. Set up the next function in the Promise with four then() instances, which
// should output a value into the counter function, and return a value which
// will provide input for the subsequent then() instance. The returned values
// should be one, then two, then three. The screen output in the console should
// be the following:
//start counting
//one
//two
//three


function timeoutPromise(promise, timeout) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error('Promise timed out'));
      }, timeout);
      promise.then((result) => {
        clearTimeout(timer);
        resolve(result);
      }).catch((error) => {
        clearTimeout(timer);
        reject(error);
      });
    });
  }
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 2000);
  });
  
  const timeout = 3000;
  
  const myTimeoutPromise = timeoutPromise(myPromise, timeout);
  
  myTimeoutPromise.then((result) => {
    console.log(result); 
  }).catch((error) => {
    console.error(error); 
  });


  function counter(value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(value);
        resolve(value + 1);
      }, 1000);
    });
  }
  const startCountingPromise = Promise.resolve('Start Counting');
  
  startCountingPromise
    .then((value) => counter(value))
    .then((value) => counter(value))
    .then((value) => counter(value))
    .catch((error) => console.error(error));


   // MAP:
// Write a function that takes an array of numbers and returns a map that maps each
//number to its square.
//answer 1


function squareMap(symbol) {
    const squareMap = new Map();
    for (let num of symbol) {
      squareMap.set(num, num ** 2);
    }
    return squareMap;
  }

  const symbol = [1, 2, 3, 4, 5];
const result = squareMap(symbol);
console.log(symbol);

//Write a function that takes an array of objects with name and age properties and
//returns a map that maps each name to its corresponding age.
// answer 2

function mapNamesToAges(arr) {
    const map = new Map();
    
    for (let i = 0; i < arr.length; i++) {
      const { name, age } = arr[i];
      map.set(name, age);
    }
    
    return map;
  }


  //Write a function that takes a map and a key and returns a boolean value indicating
  //whether the map contains the key or not.
  //answer 3


  function checkKeyInMap(myMap, key) {
    return key in myMap;
  }
  const myMap = { name: "John", age: 25, city: "New York" };
  const key = "age";
  console.log(checkKeyInMap(myMap, key));
  
  const key2 = "occupation";
  console.log(checkKeyInMap(myMap, key2));


  //Write a function that takes a map and a callback function and returns a new map that
//contains the key-value pairs from the original map that satisfy the callback function.
// answer 4


function filterMap(originalMap, callback) {
    const filteredMap = new Map();
    
    originalMap.forEach((value, key) => {
      if (callback(value, key)) {
        filteredMap.set(key, value);
      }
    });
    
    return filteredMap;
  }


  function isEven(value) {
    return value % 2 === 0;
  }
  const originalMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
  ]);
  const filteredMap = filterMap(originalMap, isEven);
  
  console.log(filteredMap);


  //Write a function that takes two maps and returns a new map that contains the key-
//value pairs from both maps. If there are duplicate keys, the values from the second map
//should overwrite the values from the first map.
// answer 5

function mergeMaps(map1, map2) {
    const mergedMap = new Map();
    for (const [key, value] of map1) {
      mergedMap.set(key, value);
    }
    for (const [key, value] of map2) {
      mergedMap.set(key, value);
    }
  
    return mergedMap;
  }
  const map1 = new Map();
map1.set('key1', 'value1');
map1.set('key2', 'value2');

const map2 = new Map();
map2.set('key2', 'new value2');
map2.set('key3', 'value3');

const mergedMap = mergeMaps(map1, map2);
console.log(mergedMap);