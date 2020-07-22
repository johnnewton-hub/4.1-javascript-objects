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
myPersonObject.age = myPersonObject.age + 1; // Happy birthday, Henry!
console.log( myPersonObject.age );

// Output JavaScript object...
console.log( myPersonObject );
const validJSONString = JSON.stringify( myPersonObject );
// Output perfectly valid JSON string...
console.log( validJSONString ); // This can be interpreted by other programming languages / programs!
// JSON helps us communicate in a universal format/standard.

/**
 * Class
 * 
 * Classes are like blueprints! We make a guide/definition on what each person will have inside.
 */

// Start our blueprint with the "class" keyword.
class Person {
  // We can use constructors to set the base properties for our objects (name / age / hobbies in this case.)
  constructor ( name = "", age = 0, hobbies = [] ) // Default values set in our parameters.
  {
    this.name    = name;
    this.age     = age;
    this.hobbies = hobbies;
  }
  // We can add methods to a class, they are like "functions," but are run from objects instead.
  sayHello ()
  {
    // Creating an element.
    const helloElement = document.createElement( "P" );
    // Fill in the text of the element (using template literal.)
    helloElement.textContent = `Hello, my name is ${this.name}!`;
    // Add the new element to the body of our webpage.
    document.body.appendChild( helloElement );
  }
}

// Let's make some people!
const sarah = new Person;
console.log( sarah );
sarah.sayHello(); // Call upon a method to execute.

// Note when we pass arguments, the default parameters are overwritten.
const jia = new Person( "Jia Then", 800, ["Sleep", "Cosplay"] );
console.log( jia );
jia.height = "7'"; // We /can/ update and add new properties (but should we? Probably not.)
console.log( jia );
jia.sayHello();

// Values kept inside an object are considered "properties."
// Sets of instructions kept inside an object are considered "methods."