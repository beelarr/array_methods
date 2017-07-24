/**
 * Created by beelarr on 7/24/17.
 */
let colors = ['red', 'blue', 'yellow', 'orange', 'teal'];


colors.forEach((e)=>{
    let new_color_string = 'I like this color: ' + e;
    console.log(new_color_string)
})

let reversed_colors = colors.map((color)=>{
    return color.split('').reverse().join('')
})
console.log(reversed_colors);


let four_letters = colors.filter(e => e.length === 4);
console.log(four_letters)

let numbers = [51, 10, 62, 13, 9];

let sum = numbers.reduce((prev, curr)=>{
  return prev + curr
})
console.log(sum)


// *****************CHAINING METHODS EXERCISE*****************
/*instructions
 Sort the numbers in DESCENDING order (10, 9, 8, 7, etc).
 Remove any integers greater than 19.
 Multiply each remaining number by 1.5 and then substract 1.
 Then output (console) the sum of all the resulting numbers.
 */

let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];


//arrow function has an implicit return statement built in without curly braces
let chainResult = integers
    .sort((a, b) => b - a)
    .filter(num => num < 19)
    .map(num => num * 1.5 - 1)
    .reduce((a, b) => a + b)

    console.log(chainResult)










