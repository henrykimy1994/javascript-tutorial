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