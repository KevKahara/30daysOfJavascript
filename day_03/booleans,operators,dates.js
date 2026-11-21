// A the boolean data type represents one of two values (true or false)
// Example Boolean values:

isLightOn = true;
isMarried = false;

/**
 * Truthy values:
 * 1.) All numbers(positive or negative) are truthy except zero
 * 2.) The true value is truthy
 * 3.) All strings are truthy except empty strings
 * 
 * Falsy values:
 * 1.) 0
 * 2.) 0n
 * 3.) null 
 * 4.) Undefined
 * 5.) ',",` empty string
 * 6.) NaN
 * 
 */

/**
 * Undefined -> If we declare a value and do not assign a value the value will be undefined.
 * Also when a function does not return anything it will be undefined
 */

let firstName;
console.log(firstName);

/**
 * Null -> it means no value
 * 
 */

let empty = null;
console.log(empty);

/**
 * Operators -> the single equal sign(=) is used to assign a value to a variable
 * It is called an assignment operator
 * 
 * Other types of operators:
 * 1.)Comparison operators
 * 2.)Arithmetic operators
 * 3.)Logical operators:
 *      &&(and) -> only true if all two operands are true
 *      ||(or) -> true if either the operands is true
 *      !(negation operator) -> negates true to false and vice versa
 *  
 */

const isHeAwake = true;
console.log(isHeAwake);
const isHeSleeping = !isHeAwake;
console.log(isHeSleeping);

// Increment operator(++) -> used to increase a value stored in a variable

//pre-increment(++variable)
let count = 0;
++count;
console.log(count);

//post-increment(variable++)
let num = 0;
num++;
console.log(num);

// Decrement operator(--) -> used to decrease a value stored in a variable

//pre-decrement(--variable)
let numOfStudents = 5;
--numOfStudents;
console.log(numOfStudents);

//post-decrement(variable--)
let carsCount = 3;
carsCount--;
console.log(carsCount);

// Ternary operator -> allows you to write conditions
let number = 4;

number < 5 ? console.log('Number is less than 5') : console.log('Number is greater than 5');

/**
 *              WINDOW METHODS
 * 1.)alert() -> displays an alert box with the specified message and an ok button. It takes just one argument
 * 2.)prompt() -> displays a prompt box with an input box that accepts input that can be stored in a variable
 * 3.)confirm() -> displays a dialog box with ok and cancel usually used to ask for permissions to do something(ok - true, cancel -false), it usually takes in a string argument
 * 4.)
 */

