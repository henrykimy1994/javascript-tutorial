// Abstract Data Type (ADT) - the operations it supports and the behavior it provides
// ADT specifies needs and requirements in general
// In the context of ADT and the operations we need the data structure to support
// An ADT may be implemented in many ways, possibly with varying performance by using alternative data structures and algorithms
// The basic idea of ADT is specifying the operations that can be done, leaving aside the internal aspects.

// Concrete Data Type - some data structure plus the algorithms that work with it

{
    // Data Types
    
    // Only what you can do with it and how you can use it to get results matters 
}
{
    // Abstraction

    // implies hiding or omitting details and reaching instead for an overaching higher-level idea
    // purposefully ignoring implementation aspects, to concentrate on our needs

    // Software Engineering - 3 similar and related concepts
    
    // 1. Encapsulation
    // Designing modules as if they had a "shell" or "capsule"
    // Only the module is responsible for handling its data
    // Wrap together data
    // The methods that work on that data in a single place for a more coherent, cohesive design.

    // 2. Data hiding
    // Hiding inner details of a module's implementation from the rest of the system
    // Can be changed without affecting any other parts of the code
    // No one can access internal details from the outside
    
    // 3. Modularity
    // That can be designed and developed independently from the rest of the system
    // Using modules correctly provides both encapsulation and data hiding

    // ADT defines only what operations it can perform
    // Doesn't go into detail about how those operations will be implemented
    // Describe what you can do "in the abstract"
}
{
    // Operations and Mutations

    // 2 Data Classifications
    // 1. Mutable
    // 2. Immutable

    // Mutable - Objects and Arrays
    // Immutable - numbers and strings

    // Categories of operations that apply to an ADT
    // Creators - functions that produce a new object of the given type
    // Observers - functions that take objects of a given type and produce some values of a different type
    // Producers - functions that take an object of a given type, and possibly some extra arguments, and produce a new object of the given type
    // Mutators - functions that directly modify an object of a given type instead of producing a new one
}
{
    // Impplementing an ADT

    // signature - specifying a function's parameters and the returned result (based on a type system called Hindley-Milner)
    // OPERATION / SIGNATURE / Description
    // Empty? / bag -> boolean / determine whether it's empty
    // Remove / bag x value -> bag / remove it from the bag
    // Greatest / bag -> value | undefined / find the greatest value in it
}
{
    // Implementing ADTs Using Classes

    class Bag {
        count = 0;
        data = {};

        isEmpty() {
            return this.count === 0;
        }

        find(value) {
            return value in this.data;
        }

        greatest () {
            return this.isEmpty() ? undefined : Object.keys(this.data).sort().pop();
        }

        add(value) {
            this.count++;
            if (this.find(value)) {
                this.data[value]++;
            } else {
                this.data[value] = 1;
            }
        }

        remove(value) {
            if (this.find(value)) {
                this.count--;
                if (this.data[value] > 1) {
                    this.data[value]--;
                } else {
                    delete this.data[value];
                }
            }
        }
    }
}
{
    // Implementing ADTs Using Functions(Mutable Version)

    const newBag = () => ({count: 0, data: {}});
    const isEmpty = (bag) => bag.count === 0;
    const find = (bag, value) => value in bag.data;
    const greatest = (bag) => isEmpty(bag) ? undefined : Object.keys(bag.data).sort().pop();
    const add = (bag, value) => {
        bag.count++;
        if (find(bag, value)) {
            bag.data[value]++;
        } else {
            bag.data[value] = 1;
        }
        return bag; // don't want external dependencies on internal aspects always return the new updated object
    };
    const remove = (bag, value) => {
        if (find(bag, value)) {
            bag.count--;
            if (bag.data[value] > 1) {
                bag.data[value]--;
            } else {
                delete bag.data[value];
            }
        }
        return bag; // don't want external dependencies on internal aspects always return the new updated object
    };
}
{
    // Implementing ADTs Using Functions(Immutable Version)

    // Solution - just creating and returning a new object if the bag needs any changes
    const add = (bag, value) => {
        bag = {count: bag.count + 1, data: {...data.data}};
        if (find(bag, value)) {
            bag.data[value]++;
        } else {
            bag.data[value] = 1;
        }
        return bag; 
    };
    const remove = (bag, value) => {
        if (find(bag, value)) {
            bag = {count: bag.count - 1, data: {...bag.data}};
            if (bag.data[value] > 1) {
                bag.data[value]--;
            } else {
                delete bag.data[value];
            }
        }
        return bag; 
    };
}