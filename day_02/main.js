//                  DATA TYPES -> Characteristics of values
/**
 * Primitive data types -> Immutable(unmodifiable)
 * Non-primitive data types -> Mutable(modifiable)
 * 
 * Primitive data types include:
 * 
 * 1.) Strings -> Sequence if characters under single quotes, double quotes or backticks
 * 2.) Numbers -> floats(decimal numbers), Integers(Whole numbers)
 * 3.) Booleans -> Either a true or false value
 * 4.) Undefined -> A declared variable with no value assigned
 * 5.) Null -> Empty or no value
 * 6.) Symbol -> Unique value that can be made using the Symbol constructor
 * 
 * 
 * Non-primitive data types include: 
 * 
 * 1.) Objects
 * 2.) Arrays
 */

// Primitive data-types are compared by its values
// Non-primitive data-types cannot be compared by values
// In the Numbers data-type, the Math object provides various methods to work with numbers
// Concatenation is joining two or more strings together

/**
 * If a string length is too long and does fit one line, we use the backslash(\) to indicate that the line,
 * will still continue on the next line
 */

// To create a template literal(template string) we use backticks and to inject data into it we use curly braces preceded by a dollar sign(${variable-name})
const firstName = 'Kevin';
const message = `Hi, my name is ${firstName}`;
console.log(message);

/** 
 * Casting -> This is converting one data type to another data type
 * 
 * To convert a string to an Int value, we use the following methods:
 * 1.) parseInt()
 * 2.) Number()
 * 3.) plus sign(+)
 * 
 * To convert a string to a float value, we use the following methods:
 * 1.) parseFloat()
 * 2.) Number()
 * 3.) plus sign(+)
 * 
 * To convert a float to an Int you use, parseInt()
 */

// Using parseInt()
const number = '10';
let numberInt = parseInt(number);
console.log(numberInt);

// Using Number
const num = '20';
const numInt = Number(num);
console.log(numInt);

// Using the plus sign (+)
const num1 = '30';
let num1Int = +num1;
console.log(num1Int);

