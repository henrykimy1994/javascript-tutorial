// Analyzing Algorithms

// Several possible ways of implementing the same ADT
// - Consider the efficiency of each concrete implementation - requires an analysis of the involved algorithms

// What data structures should you pick? 
// What algorithm should you pick? 
// What algorithm should you implement?
// Objectively analyzing their performance will produce the right answers

{
   // Performance - measuring the efficiency of a given algorithm
   // Key - considering the resources(time / RAM) -> then compare different algorithms based on the needed amount
   // We always want to minize resource usage
   // BUT, we cannot really directly compare time complexity to space complexity
   // Often, faster-performing algorithms require larger amounts of memory, vice versa

   // The space complexity of algorithms is fairly stable
   // - Grows in direct proportion to the number of input elements

   // Time complexity results in many variations
   // - which data structure to use 
   // - which algorithms to implement

   // BOOK -> Time complexity
   // - how long the algorithm takes to perform its function in relation to the size of its input data
}
{
   // Complexity 

   // Data structures
   // - have some basic parameter upon which the efficiency of all algorithms depends
   // n - the input parameter
   // An analysis of algorithm - time complexity as a function of that input n

   // An algorithm's performance may be directly linked to the data itself
   // - in order sequence vs. disordered or random sequence
   // best case vs. worst case
   // average performance
   // upper bound on the algorithm's complexity

   // Not a precise expression for the complexity function
   // How it compares with common mathematical functions (n, n^2, n log n)
   // In which class an algorithm is in to compare it with others on an equal basis
   
   // Same class
   // - don't perform at the same speed
   // - all algorithms in the same class don't perform at the same speed
   // - all algorithms in the same class will perform in the same way for larger inputs
}
{
   // Notations for Complexity

   // Asymptotic notations

   // big O notation - stands for order(Ordnung)
   // groups functions according to how they behave for growing values of their n parameter
   // n - could be the number of values to sort, the size of a set to be searched, or how many keys are added to a tree(case-by-case)
   // describing a function in terms of its big O behavior implies an upper bound on how the function grows
   // behavior of a function f(n) = O(g(n)) - means that when n grows, both functions grow in the same proportion
   // For large enough ones
   // The behavior of a given algorithm is O(some function) already implies how the needed time will grow for larger values of n
   // Interpretation - the big O bound represents a worst case, while the big omega bound represents the best case, or the smallest amount of time some algorithm could take
}