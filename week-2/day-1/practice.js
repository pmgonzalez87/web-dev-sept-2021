// creating an array
var array = []; 


// creating an array with values
// values are called elements of an array 
var arrayWithValues = ['strings', 323423, ['strings'], {}];

// arrays are zero-indexed 
                      // 0        1           2        3
var arrayWithValues = ['strings', 323423, ['strings'], {}];

// accessing elements from the array
// reference the variable that has our array

arrayWithValues[1] // 323423

// update
// update, reference the variable and select the index and 
// assign a new value
arrayWithValues[1] = 'Some new value here';

// camelCase - starting off with lowerCase, every other word the first
// letter is captalized
arrayWithValues[1] += 1;

var BIRTHDATE = 6101986;

// const, let
const BIRTHDATE = 6101986;

BIRTHDATE = 6101985; // this will throw an error

let age = 35;

age = 36; 

// Object - create
// definition: a data structure that allows us to store data 
// in a key value format

const obj = { key1: "value1", key2: "value2"};

// can be written in different ways
const obj = { 
    key1: "value1",
    key2: "value2",
    random: 1,
    "string": "value here" 
};

obj.name = 'Brett'; // this allowed with const
obj = {} // this is not allowed because we used const
 
// what happens afterwards
const obj = { 
    key1: "value1",
    key2: "value2",
    random: 1,
    "string": "value here",
    name: 'Brett' 
};
const x = 3

// updating a key
obj.random = x;

const person = {
    firstName: 'Brett',
    lastName: 'Cunningham'
}

person['email'] = 'bwcunninghamii@gmail.com';


// delete a key in an object
delete person['email'];

// removes the value from the key
person['email'] = '';
person['email'] = undefined;
person['email'] = null;
















