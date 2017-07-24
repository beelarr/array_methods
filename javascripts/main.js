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