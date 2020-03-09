//Write a block of code that takes numbers and console log the sum of its cubes.
// Examples
// sum of cubes for 1, 5, 9 = 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855\

let a = 2;
let b = 5;
let c = 10;
let cubed = 3

//Cant figure out how to do it with ^, but ** is easy
// ** = to the power of ____(number), so to do cubing, just do to the power of 3  */
console.log( a**cubed );
console.log( b**cubed );
console.log( c**cubed );

//Showing that the equations and sum of equations are the same, so true
console.log( 2**3 + 5**3 + 10**3 == 8 + 125 + 1000);

//Same data type, all are numbers, so it's true
console.log( 2**3 + 5**3 + 10**3 === 8 + 125 + 1000);

//I am really unsure of what ^ does and when to use it.
//For example, this is not cubed ???
console.log(10^3);
console.log(90^3);
console.log(100^300);

let acubed = 8
let bcubed = 125
let ccubed = 1000

//Using only variables
console.log( a**cubed + b**cubed + c**cubed == acubed + bcubed + ccubed);