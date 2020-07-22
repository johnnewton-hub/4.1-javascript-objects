// Store one value (variable as a string.)
const myString = "Hello, World!";
console.log( myString );

// Store multiple values (multiple strings in an array variable.)
const myArray = [myString, "A second string"];
console.log( myArray );

// Array of person data (name, age, hobbies.)
const myPersonArray = [
  "Henry", // Name
  32, // Age
  ["Program", "Hike", "Watch Movies"] // Hobbies
];
console.log( myPersonArray[2] ); // Display hobbies.

/**
 * JavaScript Objects
 * 
 * JSON - JavaScript Object Notation
 */

const myPersonObject = { // JavaScript object (not necessarily 100% valid JSON.)
  "name":    "Henry",
  "age":     32,
  "hobbies": ["Program", "Hike", "Watch Movies"]
};
console.log( "My name is: " + myPersonObject.name );
console.log( "I am " + myPersonObject.age + " years old." );
console.log( "I like to " + myPersonObject.hobbies );

// Output JavaScript object...
console.log( myPersonObject );
const validJSONString = JSON.stringify( myPersonObject );
// Output perfectly valid JSON string...
console.log( validJSONString ); // This can be interpreted by other programming languages / programs!
// JSON helps us communicate in a universal format/standard.
