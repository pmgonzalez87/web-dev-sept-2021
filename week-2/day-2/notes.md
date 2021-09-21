credit: https://www.w3schools.com/js/js_functions.asp


# JavaScript Functions

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).


```js
function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
```

# JavaScript Function Syntax

A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

```js
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

Function ```parameters``` are listed inside the parentheses () in the function definition.

Function ```arguments``` are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.

```text
A Function is much the same as a Procedure 
or a Subroutine, in other programming languages.
```

# Function Invocation

The code inside the function will execute when "something" invokes (calls) the function:

When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)
You will learn a lot more about function invocation later in this tutorial.

# Function Return
When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":

# Why Functions?
You can reuse code: Define the code once, and use it many times.

You can use the same code many times with different arguments, to produce different results.

```js
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius(77);
```

Really.... Who wants to go through this procedure over and over again? 
Also if we just had this expression hanging out in out code it's subject to being
tampered with.


# The () Operator Invokes the Function
Using the example above, toCelsius refers to the function object, and toCelsius() refers to the function result.

Accessing a function without () will return the function object instead of the function result.

```js
toCelsius() // invokes the function
```

# Functions Used as Variable Values
Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.

Instead of using a variable to store the return value of a function:

```js
const x = toCelsius(77);
const text = "The temperature is " + x + " Celsius";
```
You can use the function directly, as a variable value:
```js
const text = "The temperature is " + toCelsius(77) + " Celsius";
```

# Scope

### Block Scope
Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:

```js
{
  let x = 2;
}
// x can NOT be used here
```

Prepare yourself 

{
  var x = 2;
}
// x CAN be used here

```js
{
  var x = 2;
}
// x CAN be used here
```


# Function Scope
  JavaScript has function scope: Each function creates a new scope.
  
  Variables defined inside a function are not accessible (visible) from outside the function.
  
  Variables declared with var, let and const are quite similar when declared inside a function.
  
  They both have Function Scope:
  ```js
  function myFunction() {
    var carName1 = "Volvo";   // Function Scope
    let carName2 = "Volvo";   // Function Scope
    const carName3 = "Volvo";   // Function Scope
  }
```

# Global Scope
A variable declared outside a function, becomes GLOBAL.


```js
let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}
```

credit: https://www.w3schools.com/js/js_scope.asp

The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree. The DOM tree includes elements such as <body> and <table>, among many others.

```
Live lecture on document
```

document has methods, we will be focusing on one to start getElementById

The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.

```js
const element = document.getElementById(id);
```

This allows us to access elements in our webpage and manipulate if we want.

Event Handlers - We will be focusing on only one to start - click or onclick

this will allow our buttons to trigger functions when we want. 

Example

###HTML

```html
<html>
<head>
  <title>getElementById example</title>
</head>
<body>
  <p id="para">Some text here</p>
  <button onclick="changeColor('blue');">blue</button>
  <button onclick="changeColor('red');">red</button>
</body>
</html>
```

###JavaScript

```js
function changeColor(newColor) {
  var elem = document.getElementById('para');
  elem.style.color = newColor;
}
```
Lets check it out live
