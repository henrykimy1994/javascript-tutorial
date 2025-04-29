{
    /**
     * Different ways to specify a function
     */

    // Named Function
    function alpha() {}

    // Named Function Expression
    const charlie = function something() {}

    // Nameless Function Expression
    const bravo = function () {}

    // Function constructor
    const delta = new Function()

    // Arrow function
    const echo = () => {}
    {
        // They may return a value even without including a return statement
        {
            const echo = () => { 1 + 1; }
            console.log(echo);
        }

        // Cannot be used as constructors or generators
        {

            // regular constructor function
            function Person(name) {
                this.name = name;
            }
            const john = Person('john'); 
            
            // regular generator
            function* gen() {
                yield 1;
                yield 2;
            }
            const iterator = gen();
            console.log(iterator.next());
    
            // Arrow function constructor
            const Person1 = (name) => { this.name = name }
            // ERROR: Person1 is not a constructor
            //const john = new Person1('John')
    
            // Arrow function generator - ERROR
            // const gen = *() => { yield1; yield2; } 
            {
                //SIDE NOTE GENERATOR
                function* generatorFunc() {
                    yield 'A';
                    yield 'B';
                    yield 'C';
                }
                const gen = generatorFunc();
    
                console.log(gen.next()); //value: 'A', done: false
                console.log(gen.next()); //value: 'B', done: false
                console.log(gen.next()); //value: 'C', done: false
                console.log(gen.next()); //value: undefined, done: true
            }
        }

        // They don't bind the this value
        {
            const obj = {
                name: 'Henry',
                regularFunc: function () {
                    console.log(this.name);
                },
                // lexical scode
                arrowFunc: () => {
                    console.log(this.name);
                }
            };
            obj.regularFunc(); // Henry
            obj.arrowFunc(); // undefined
        }

        // They don't have an arguments object or a prototype property
        {
            // normal function
            function normalFunc(a, b) {
                console.log(arguments);
            }
            normalFunc(1,2);
            //Arrow function = ERROR
            //const arrowFunc = (a,b) => {console.log(arguments)};
        }
    }
}
{
    // Returning an object
    const newNode = (key, left, right, height) => ({
        key, left, right, height
    });
    console.log(newNode('obj', null, null, 1));
    // => { key: 'hello', left: null, right: null, height: 1 }
}
{
    // Providing default values
    // s = '' 
    const print = (tree, s = '') => {
        if (tree !== null) {
            console.log(s, tree.key);
            // recursive function
            print(tree.left, `${s} L:`);
            print(tree.right, `${s} R:`);
        }
    }
}
{
    // Classes
    class Tree {
        _children = [];

        constructor(rootKey) {
            this._key = rootKey;
        }

        isEmpty() {
            return this._key === undefined;
        }

        get_Key() {
            this._throwIfEmpty();
            return this._key;
        }

        set_key(v) {
            this._key = v;
        }
    }
}
{
    // The spread operator
    const myArray = [3, 3 ,4, 5, 5, 9, 2, 6];
    const arrayMax = Math.max(...myArray);
    const newArray = [...myArray] // new array

    // build a copy of an object
    const myObject = {first: 'Henry', year: 1894};
    const newObject = {...myObject, last: 'Kim', year: 1994}

    // undefined number of parameters
    const myMax = (...nums) => {
        let max = nums[0];
        for (let i = i; i < nums.length; i++) {
            if (max < nums[i]) max = nums[i];
        }
        return max;
    };
}
{
    // Destructuring statement
    [first, second] = ['Henry', 'Kim'];

    // Destructuring + spreading
    [first, last, ...years] = ['Henry', 'Kim', 1994, 1894, 2001];

    // default values
    let [first, last, role = 'developer', experiences] = ['Henry', 'Kim']

    // swap or rotating variables
    [heap[p], heap[i]] = [heap[i], heap[p]];

    // returning multiple values
    const order2 = (a,b) => {
        if (a<b) {
            return [a, b];
        } else {
            return [b, a];
        }
    };
    // array + destructuring more compact
    let [smaller, bigger] = order2(20, 8);
}
{
    // Modules
    {
        // CommonJS modules
        const EOW = "m";
        const newTree = () => null;

        // black box software concept
        // named export
        module.exports = {
            EOW, newTree
        }
        // const { EOW, newTree } = require("modulefile.js");
        // OR
        // const moduleObj = require("modulefile.js");
        // moduleObj.EOW
    }
    {
        // ECMAScript modules
        // named export
        const OMG = "omg";
        export const addNew = 1 + 1;

        export {
            OMG,
        };
        //import { OMG, addNew } from 'modulefile.js';
        // OR
        // import * as moduleObj from 'modulefile.js';
        // moduleObj.OMG
    }
}
{
    // Closures and immediately invoked function expressions
    {
        // equivalent of classes
        function createPerson(firstName, lastName) {
            let fName = firstName;
            let lName = lastName;
    
            return {
                getFirst: function () {
                    return fName;
                },
                getLast: function () {
                    return lName;
                },
                fullName: function () {
                    return fName + " " + lName;
                },
                setName: function (firstName, lastName) {
                    fName = firstName;
                    lName = lastName;
                }
            };
        }
        const me = createPerson('Henry', 'Kim');
        console.log(me.getFirst());
        console.log(me.getLast());
        console.log(me.fullName());
    
        me.setName("Chris", 'Kim');
        console.log(me.fullName());    
        // fName and lName are in the closure
    }
    {
        // simulate modules using IIFE
        const tax = (function (basicTax) { // nameless function
            let vat = basicTax;

            // ...other variables

            return {
                setVat: function (newVat) {
                    vat = newVat;
                },
                getVat: function () {
                    return vat;
                },
                addVat: function(value) {
                    return value * (1 + vat / 100);
                }
                //other functions
            }
        })(6); // initial value passed as 6
        // call it immediately - works like a module
        console.log(tax.getVat());
        tax.setVat(8);
        console.log(tax.getVat());
    }
}