const challenge = '30 days of Javascript';
console.log(challenge);

// Find the length
console.log(challenge.length);

// Change the string to all uppercase
console.log(challenge.toUpperCase());

// Change the string to all lowercase
console.log(challenge.toLowerCase());

// Slice the first word of the string using substr() or substring()
console.log(challenge.substring(3, 8)) // Slice from index 3 to index 8 but not including index 8

// Create days of javascript substring from original string
const word = challenge.substring(3,);
console.log(word);

// Check if the word script is in the string
const isPresent = challenge.includes('script');
console.log(isPresent);

// Split the string into an array
const splitted_str = challenge.split(' ');
console.log(splitted_str);

// Split string at comma and change into an array
const companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));

// Change 30 days of Javascript to 30 days of Python
console.log(challenge.replace('Javascript', 'Python'));

// The character at index 15 of the string
console.log(challenge.charAt(15));

// The character code(ASCII) of character J
console.log(challenge.charCodeAt(11));

// Determine the first and last occurence of a in the string challenge
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

const sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));


console.log(challenge.trim());
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('Javascript'));
console.log(challenge.match('a'));
console.log(challenge.repeat(2));