// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
    const cache = {};

    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
}

function slowFib(n) {
    if (n < 2) return n;
    
    return fib(n - 1) + fib(n - 2);
}

fib = memoize(slowFib);

module.exports = fib;

/*
Solution 1 (Iterative)  O(n) --> linear Runtime

function fib(n) {
    const result = [0, 1];  

    for (let i = 2; i <= n; i++) {
        const a = result[i - 1];//previous element
        const b = result[i - 2];//previous element - 1

        result.push(a + b);
    }

    return result[n];
}

*/

/*
For each aditional element that we add into our collection or for each increment of the value n to our function we 
experiencing a dramatic increase in a number of function calls that are required

Solution 2 (with Recursion) This one uses exponential runtime O(2^n)

function fib(n) {
    if (n < 2) return n;
    
    return fib(n - 1) + fib(n - 2);
}

*/
