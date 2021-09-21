// variable declaration below + assignment operator

// objects - hash map
// a key value pair way of storing data

// object syntax
// object creation
// variable declaration and assignment
// const myToDoObj = {
//    key1: value,
//    key2: value,
//    key3: value,
//}

// the keys have to be unique
// the values can be anything, strings, numbers, objects, arrays, functions, etc

// add data (key value pair) to object
// dot notation
myToDoObj.task1 = 'take out trash';
myToDoObj.task2 = 'wash dishes';
myToDoObj.task3 = 'wash clothes';
// accessing that data with dot noation
myToDoObj.task1;
myToDoObj.task2;
myToDoObj.task3;
// add data with bracket notation
myToDoObj['task4'] = 'call moving company';
myToDoObj['task5'] = 'Order forklift';
myToDoObj['task6'] = 'book flight';
// accessing that data with bracket notation
myToDoObj['task4'];
myToDoObj['task5'];
myToDoObj['task6'];


// array creation
const myToDoArray = [];

// adding elements to an array
myToDoArray.push('take out');
myToDoArray.push('wash Dishes');
myToDoArray.push('wash clothes');

// now myToDoArray looks like this
// myToDoArray = ['take out', 'wash Dishes', 'wash clothes']

// loop/iterate through it
// arrays are zero indexed
for (var i = 0; i < myToDoArray.length; i++) {
    // create variable and create element and assign it to the variable
    const createdTodo = document.createElement('li');
    // update the innerText of the element you created with the element in the array
    createdTodo.innerText = myToDoArray[i];
    // add it to our HTML todo list
    myToDoList.appendChild(toDoItem)
}

let position = 0;
const stringInterpolation = `translate(${position}, 0)` // the cool way

const theLongWay = 'translate(' + position + ', 0)';



