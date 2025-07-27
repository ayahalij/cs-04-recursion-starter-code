// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function lengthOfString(str, len = 0) {
  // If the length is 0 (base case), return len (0).
  // if (str.length === 0) return len;
  if (!str.length) return len;

  // Remove the first letter of the string
  let restOfString = str.substring(1);

  // Call function again, with updated string and len
  return lengthOfString(restOfString, ++len);
}

function sumOfArray(arr) {
  // This function returns the sum of all of the numbers in a given array.
  if(arr.length === 0){
    return 0
  }
  return arr[0]+sumOfArray(arr.slice(1))
}

function findMax(arr) {
  // This function returns the largest number in a given array.
  if(arr.length===1){
    return arr[0]
  }
  const maxnum=findMax(arr.slice(1))
  return arr[0]> maxnum ? arr[0] :maxnum
}


function factorial(i) {
  // This function returns the factorial of a given number.
  if(i==0 || i==1){
    return 1
  }

  return i * factorial(i - 1);
}

function fibonacci(a) {
  // This function returns the Nth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1
  // Base case: first or second number is 1
  if(a===1 || a===2){
    return 1;
  }

  return fibonacci(a-1)+fibonacci(a-2)
}


function coinFlips(n) {
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
  if(n===0){
    return['']
  }

  const small=coinFlips(n-1)
  const res=[]

  for(let flip of small){
    res.push(flip+ 'H')
    res.push(flip+ 'T')
  }

  return res
}



function letterCombinations(letters) {
  // This function returns an array of all combinations of the given letters
  // Input type: Array of single characters
  // For example, letterCombinations(["a","b","c"]) would return the following:
  // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
  const outcome=[]

  function build(current, remaining) {
    if(current.length>=1 ) {
      outcome.push(current)
    }

    for (let i = 0; i < remaining.length; i++) {
      const newLetter = remaining[i]
      const rest = remaining.slice(0, i).concat(remaining.slice(i + 1))
      build(current + newLetter, rest)
    }
  }

  build('', letters)
  return outcome
}


module.exports = {
  lengthOfString,
  sumOfArray,
  findMax,
  factorial,
  fibonacci,
  coinFlips,
  letterCombinations,
};
