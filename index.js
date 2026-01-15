// Nth Fibonacci Number
// Given an integer n, return the nth number in the fibonacci sequence.

// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

function nthFibonacci(n) {
  console.log(n);

  // define the initial sequence
  const fib = [0, 1, 1];

  // for n, calculate arr.length - 2 + arr.length -1

  console.log(fib[fib.length - 2]);

  for (let i = 3; i < n; i++) {
    fib.push(fib[fib.length - 2] + fib[fib.length - 1]);
  }

  console.log(fib[fib.length - 1]);

  return fib[fib.length - 1];

  //return n;
}
