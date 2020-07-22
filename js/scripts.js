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
 * 
 * Values kept inside an object are considered "properties." --> similar to variables.
 * ---> When accessing properties, the syntax looks like: myObject.property
 * Sets of instructions kept inside an object are considered "methods." --> similar to functions.
 * ---> When executing methods, the syntax looks like: myObject.myMethod()
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
  // Increment age property by one, via our "birthday" method.
  birthday ()
  {
    // Make sure to use "this" to refer to the current object!
    // !!! typing just "age" would cause JS to look for a variable (that is not here!)
    this.age = this.age + 1;
  }
  // Method to add a new hobby to our "this.hobbies" array property.
  addHobby ( hobby = "" ) // Parameter with default value.
  {
    // Check if the hobby is filled in.
    if ( hobby.length > 0 )
    { // If it IS filled in, push it to the array!
      this.hobbies.push( hobby );
    }
    else
    { // If it is NOT filled in, say so in the console :(
      console.log( "Sorry, empty hobby. Please try again." );
    }
  }
  // Output the hobbies in the browser (in HTML, not console.)
  outputListOfHobbies ()
  {
    // New list HTMLElement (<ul>)...
    const hobbyList = document.createElement( "UL" );
    // Loop, terminating based on the length of our hobbies property (array data-type.)
    for ( let index = 0; index < this.hobbies.length; index++ ) // index = index + 1
    { // New list item HTMLElement (<li>)...
      const hobbyListItem = document.createElement( "LI" );
      // Add text inside of the HTMLElement.
      hobbyListItem.textContent = this.hobbies[index]; // Index from our loop! Iterated each time.
      // Add the populated list item HTMLElement (<li>) to the list HTMLElement (<ul>).
      hobbyList.appendChild( hobbyListItem );
    }
    // Add the whole populated list HTMLElement (<ul>) to the webpage (inside <body>).
    document.body.appendChild( hobbyList );
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
// Running the hello method.
jia.sayHello();
// Running the birthday method.
jia.birthday(); // Now she is 801!
console.log( "Jia is now... " + jia.age + " years old!" );
// Add some hobbies to Jia's list...
jia.addHobby( "Programming" );
jia.addHobby( "Asking Questions" );
console.log( jia.hobbies ); // Check the hobbies property.
// Let's try outputting the hobbies to HTML using our new method...
jia.outputListOfHobbies();
