// Newton-Raphson Method in JavaScript

function f(x) {
  return x * x - 2; // Example: solve x^2 - 2 = 0
}

function fPrime(x) {
  return 2 * x; // Derivative of f(x)
}

function newtonRaphson(initialGuess, tolerance = 1e-7, maxIter = 100) {
  let x = initialGuess;
  let iter = 0;

  while (iter < maxIter) {
    const fx = f(x);
    const fpx = fPrime(x);

    if (fpx === 0) {
      console.log("Zero derivative. No solution found.");
      return;
    }

    const xNext = x - fx / fpx;

    if (Math.abs(xNext - x) < tolerance) {
      console.log(`Root found: ${xNext}`);
      return xNext;
    }

    x = xNext;
    iter++;
  }

  console.log("Max iterations reached. No solution found.");
  return null;
}

// Example usage
const guess = parseFloat(process.argv[2]);
if (isNaN(guess)) {
  console.log("Please provide a numeric initial guess as an argument.");
} else {
  newtonRaphson(guess);
}
