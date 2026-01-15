## Nth Fibonacci Number

A mathematical utility that calculates the value at a specific position in the Fibonacci sequence. This implementation uses 1-based indexing (where the 1st number is 0) and an iterative approach for optimal performance.

### The Sequence

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones:

    0,1,1,2,3,5,8,13,21,34...

### Implementation Strategy

This function uses a Bottom-Up Iterative approach. Instead of using recursion, which can be slow and lead to stack overflow errors, we build the sequence using an array.

    1. Guard Clauses: We handle the first two numbers (0 and 1) immediately to avoid unnecessary loop processing.

    2. Seeding the Array: We initialise the array with the base cases `[0,1]`.

    3. Iterative Expansion: A `for` loop calculates the next number by looking back at the last two indicies (`i - 1` and `i - 2`) and pushing the sum into the array.

    4. 1-Based Return: To return the nth number we access the array at `n - 1`.

### Usage

```JavaScript

/**
 * Return the nth number in the Fibonacci sequence.
 * @param {number} n - The position in the sequence (1-indexed).
 * @returns {number} The Fibonacci number at that position.
 */
function nthFibonacci(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;

    const fib = [0,1];

    for (let i = 2; i < n; i++) {
        const nextNum = fib[i - 1] + fib[i - 2];
        fib.push(nextNum);
    }

    return fib[n - 1];
}

// Example results:
nthFibonacci(1); // 0
nthFibonacci(4); // 2
nthFibonacci(6); // 5
```

### What I Learned

1. Translating Requirements to Indices

I learned that "the 4th number" (Human language) usually maps to "Index 3" (Computer language). By returning `fib[n-1]`, I successfully bridged the gap between 1-based mathematical definitions and 0-based JavaScript arrays.

2. Efficiency over Recursion

While Fibonacci is often the first example used for recursion, I learned that the iterative approach is much more efficient. It has a time complexity of O(n), meaning it only runs the calculation once for every number up to n, rather than recalculating the same numbers multiple times.

3. Loop Boundaries

I practiced defining loop boundaries. By starting the loop at `i = 2` and stopping at `i < n`, I ensured the loop ran exactly the number of times needed to fill the array to the correct length without overshooting or creating an infinite loop.
