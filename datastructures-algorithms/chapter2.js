// Understandable - FP tends to produce shorter and cleaner code, which is easier to understand
// Maintainable - Don't need to worry about breaking other things when modifying any given function
// Testable - Always produces functions you can test on your own
// Modular - Write independent functions you can refactor or modify without impacting other functions (separation of concerns, highly cohesive and loosely coupled)
// Reusable - Saves time and money
{
    // Functions as First-Class Objects
    // Able to do just like other objects
    // Store functions in variables
    // Pass functions as arguments
    // Return a function as a result from sone other function
    // .
    // .
    // .

    // assign default values to function parameters
    const preORder = (tree, visit = (x) => console.log(x)) => {
        // ...
    }
}
{
    // First-Order Functions - those that do not receive or return functions
    const myVisit = (x) => {/* ... */}

    // Higher-Order Functions - take one or more functions as parameters / return a function as a result
    const preORder = (tree, visit = (x) => console.log(x)) => {/* ... */}
    preORder(null, myVisit)
}
{
    // Declarative-Style Programming
    
    // Imperative / procedural "common" style - individual detailed steps specified
    
    // Higher-level - declarative style
    // .filter()
    // .find()
    // .some()
    // .map()
    // .reduce()
    // .reduceRight()
    // .flat()
    // .flatMap()
}
{
    // Filtering an Array
    const under21 = (value) < 21;
    let myArray = [22, 9, 60, 12, 4, 56];
    let newArray = myArray.fill(under21);
    console.log(newArray);
}
{
    // Searching an array
    // .find() - element returned / undefined
    // .findLast() - does the same from the end to the beginning
    // .findIndex() - index / -1
    // .findLastIndex() - does the same end to beginning
    let myArray = [22, 9, 60, 12, 4, 56];
    const under21 = (value) => value < 21;
    console.log(myArray.find(under21));
    console.log(myArray.findIndex(under21));

    const equal21 = (value) => value === 21;
    console.log(myArray.find(equal21));
    console.log(myArray.findIndex(equal21));

    // Searching for a specific value
    // .includes()
    // .index()
    // .lastIndexOf()
}
{
    // Testing an array
    // .some() - any element
    // .every() - all elements
    let myArray = [22, 9, 60, 12, 4, 56];
    const under21 = (value) => value < 21;
    console.log(myArray.some(under21));
    console.log(myArray.every(under21));
}
{
    // Transforming an Array
    // .map()
    let myArray = [22, 9, 60, 12, 4, 56];
    const timesTen = (x) => x*10
    console.log(myArray.map(timesTen));
}
{
    // Reducing an Array to a Single value
    // .reduce()
    // .reduceRight()
    const myArray = [22, 9, 60, 12, 4, 56];
    const mySum = myArray.reduce((acc,val) => acc + val, 0);
    console.log(mySum);
    
    const myArray1 = [22, 9, 60, 12, 4, 56];
    const reducedObj1 = myArray1.reduce((acc, val) => ({s: acc.s + val, c: acc.c + 1}, {s: 0, c: 0}))
    console.log(reducedObj1);
}
{
    // Looping Through Arrays
    // .forEach()
}
{
    // Higher-Order Functions
    // Functions that receive other functions as arguments or that return functions as results
    // All functions that work with callbacks
    // All the array methods
    // Ex: adding logging as an aid for debugging or memoizing for better performance
    // Returning a function with wrapped behavior
    const addLogging = (fn) => (...args) => {
        console.log("Entering ", fn.name, " with ", ...args);
        const toReturn = fn(...args); //wrapping sum2 function
        console.log("Exiting ", fn.name, " returning ", toReturn);
        return toReturn;
    }
    const sum2 = (a, b) => {
        console.log("calculating...");
        return a+b;
    }
    // function call on the fly
    addLogging(sum2)(22, 9); 
    // 1. returned function / decorated or wrapped function -> addLogging(sum2) -> toReturn()
    // 2. toReturn(22, 9)
    const wrappedSum2Func = addLogging(sum2)
    wrappedSum2Func(22,9)

    // outer & inner functions
    // (fn) =>
    // (...args) => {}
    // Equivalent
    function addLogging1(fn) {
        return function (...args) { //wrapping fn argument
            const toReturn = fn(...args);
            return toReturn;
        }
    }
}
{
    // Side Effects

    // Pure Function - Depends on only on the parameters it receives and doesn't produce any side effects
    // Concentrate on which arguments you pass to the function
    // Won't depend on any "outside" variables or state
    // Can't depend on random numbers, the time of day, the result of input/output(I/O) functions
    // Depends only on its input
}
{
    // Using Glocal State

    // Most common reason for side effects - using nonlocal variables that are shared with other parts of the code
}
{
    // Keeping Inner State

    // avoid internal variables
    // inpure - OOP requires data to be stored in an object to use for calculations...
}
{
    // Mutating Arguments

    // passing objects or arguments - passed by reference
    // modifying the original object or array
    // unexpected side effect like using .reduce()
    // using mutator methods 
    // ES recently added toSorted(), toReversed(), toSpliced() methods that do not affect the original array
}
{
    // Returning Impure Functions

    // any function that deals with the current date or time will be impure
    // results depend on an ourisde condition
    // I/O-related functions / I/O errors can happen unexpectedly
}
{
    // Impure Functions

    // How to reduce the problem size?
    // Avoid the usage of state
    // Use the injection pattern to control impurity
}
{
    // Avoiding State

    // If a function needs to get global state - provide the function whatever state elements it needs as arguments
    // If a function needs to set global state - function should provide an updated state and return it and the caller should be responsible for updating the global state
    // If there's a need to update state, at least it will be done at a higher level
    // These 2 rules also simplifies testing - just provide the function with the initial state and then check whether the returned new state is correct
}
{
    // Using Injection

    // What if I have to use impure functions - I/O & random numbers?
    // Flexible code, simplifies unit testing, allows easier maintenance
    const getData = (url) => axios.get(url);
    doSomething(null, null, null, getData);

    // lower function - pure
    // Caller is in control by injecting a relevant function
    // Providing an extra parameter to be used by the function
    // Won't have to access anything global directly
    function doSomething(x, y, getter) {
        // ...
        getter("/some/url");
        // ...
    }
}
{
    // FP-oriented way
}