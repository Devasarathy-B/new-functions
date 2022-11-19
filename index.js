// Import stylesheets
import './style.css';
import * as lodash from 'lodash';

// Write Javascript code!

//Bind function
// const person = {
//   firstName: 'Deva',
//   secondName: 'Sarathy',

//   fullName: function () {
//     return this.firstName + ' ' + this.secondName;
//   },
// };

// const member = {
//   firstName: 'Dev',
//   secondName: 'B',
// };

// let fullName1 = person.fullName;
// console.log(fullName1());

//hasOwnProperty function

// let exampleObj = {};
// exampleObj.product = 'shampoo';
// exampleObj.owner = 'dove';

// let result1 = exampleObj.hasOwnProperty('product');
// let result2 = exampleObj.hasOwnProperty('owner');

// console.log(result1);
// console.log(result2);

// const appDiv = document.getElementById('app');

// //isSafestInteger

// let booleanValue = Number.isSafeInteger(234567890);
// console.log(booleanValue);

// //toIsoString

// let dates = new Date();
// let stringDate = dates.toISOString();
// console.log(stringDate);

//8-Nov-2022
// .at()

// const arr = [0, 1, 5, 6, 7, 9];
// const res = arr.at(4);
// const diff = arr[-1];
// const atVal = arr.at(-1);
// console.log(res);
// console.log(diff);
// console.log(atVal);

// //add values to array using slice and call

// const addValueToArray = function () {
//   console.log([].slice.call(arguments), arguments);
// };

// addValueToArray('Opt-in', 'Opt-Out'); // by default javascript function has an argument.

// //Interpoliation

// const name = 'Muthaiahh';
// const age = 30;
// const intepoliationValue = `My name is ${name} and age is ${age}.`;
// console.log(intepoliationValue);

// //Object shorthand

// const custName = 'Hima Das';
// const ownername = 'Hamprit Kaur';

// const obj = {
//   custName,
//   ownername,
// };
// console.log(obj);

// //Fizzbuzz challenge

// // for (let i = 1; i <= 100; i++) {
// //   let multiplesOfThree = i % 3 == 0,
// //     multiplesOfFive = i % 5 == 0;
// //   console.log(
// //     multiplesOfThree
// //       ? multiplesOfFive
// //         ? 'FizzBuzz'
// //         : 'Fizz'
// //       : multiplesOfFive
// //       ? 'Buzz'
// //       : i
// //   );
// // }

// //check valid url

// const url = 'http://google.com';

// const pattern = new RegExp(
//   '^(https?:\\/\\/)?' +
//     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
//     '((\\d{1,3}\\.){3}\\d{1,3}))' +
//     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
//     '(\\?[;&a-z\\d%_.~+=-]*)?' +
//     '(\\#[-a-z\\d_]*)?$',
//   'i'
// );

// if (pattern.test(url)) {
//   console.log('true');
// } else {
//   console.log('false');
// }

// //decodeUri component (uniform resource identifier) encodedURI component

// let uri = 'http://www.patanjali.com';
// console.log(encodeURIComponent(uri));
// console.log(decodeURIComponent(uri));

// //generator function
// //yield pauses the execution  of generator function and the value following yield is returned to caller.
// const genFunction = function* () {
//   yield 1;
//   yield 2;
//   yield 3;
// };

// let sum = 0;
// for (const val of genFunction()) {
//   sum = sum + val;
// }
// console.log(
//   'function line 140',
//   sum,
//   genFunction().map((x) => x)
// );

// //Node List Array

// //NodeList is collection of document nodes, it is accssed by only index of element and querySelectorAll() method return the node list. but childNodes returns the current live nodelist.

// //send funtion as parameter
// function passFunctionasParameter(id, passedFunction) {
//   passedFunction();
// }

// function passedFunction() {
//   console.log('Function is passed as parameter');
// }

// passFunctionasParameter(1, passedFunction);

// //to find whether the provided value is valid json or not

// const isValidJson = (jsonValue) => {
//   if (JSON.parse(jsonValue)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isValidJson('{ "name": "Rao", "age": 20 }'));

// //Exponentiation assignment

// let a = 5;
// console.log((a **= 3));

//Nov-9-2022

//Double Arrow functions are actually curried functions.
//first outer function call second inner function to get result
// const myFunction = (x) => (y) => {
//   console.log('param1', x);
//   console.log('parameter 2', y);
// };

// myFunction('deva')('virtusa');

// //weak reference
// //new let the coders to create an instance of userDefined or one of the builtin function that has a constructor.
// //weak ref is to implement caches and mappings
// const weekRefExample = { name: 'Deva', age: 20 };
// const afterWeakRef = new WeakRef(weekRefExample);
// console.log(afterWeakRef);
// const afterDeRef = afterWeakRef.deref();
// console.log(afterDeRef);

// //some

// const arrValue = [34, 56, 89, 45];
// console.log(arrValue.some(checkIsTrue));
// function checkIsTrue(arrayValue) {
//   return arrayValue > 50;
// }

// //object delete and nested objects

// const nestedObjects = {
//   nameofFeild: 'nested',
//   how: 'inside the object',
//   operations: {
//     operation1: 'display nested object values',
//     operation2: 'delete the values of object and nested object',
//   },
// };

// console.log(nestedObjects.operations.operation1);
// delete nestedObjects.operations['operation1'];
// console.log(nestedObjects);

// //errors

// //range error
// const num = 10;
// try {
//   num.toPrecision(101);
// } catch (err) {
//   console.log(err.name);
// }

// //Reference Error

// const x = 5;
// try {
//   x = y + x;
// } catch (err) {
//   console.log(err.name);
// }

// //syntax error

// //type error
// const val = 'deva';
// try {
//   val.toPrecision(10);
// } catch (err) {
//   console.log(err.name);
// }
// //URI error
// try {
//   decodeURI('%vtuvc%uyv');
// } catch (err) {
//   console.log(err.name);
//   console.log(err.message);
// }

//compact Example
//remove falsey values from an array.

// let compactExampleArray = ['', false, 1, 2, 3];
// let resultArray = lodash.compact(compactExampleArray);
// console.log(resultArray);

// //once function
// //it can call n times but return the value of first time calling

// let onceFunction = lodash.once(function (str) {
//   console.log(str);
// });

// onceFunction('did it works');
// onceFunction('hello world');

// //object Borrow

// let ownerObject = {
//   nameofOwner: 'REddy',
//   say: function (words) {
//     console.log(words, 'Im saying is ', this.nameofOwner2);
//   },
// };

// ownerObject.say('My name what');

// let borrowingObject = {
//   nameofOwner2: 'A',
// };

// ownerObject.say.call(borrowingObject, 'Hello');

//orderBY loadash method

const userDetails = [
  {
    username: 'deva',
    age: 22,
  },
  {
    username: 'aslam',
    age: 34,
  },
  {
    username: 'kamalesh',
    age: 25,
  },
];

const result = lodash.orderBy(userDetails, ['username'], ['asc']);
console.log(result);

//intersection by in lodash used to get the similar elements in arrays

const arr1 = [1, 2, 3, 7, 5, 4];
const arr2 = [4, 5, 6, 9, 0, 1];
const arr3 = [1, 5, 9, 0];

const sameValues = lodash.intersectionBy(arr1, arr2, arr3);
console.log(sameValues);
