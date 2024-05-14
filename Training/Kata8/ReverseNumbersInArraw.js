/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

function digitize(n) {
    return String(n).split('').reverse().map(digit => parseInt(digit));
}

/*
String(n): Converts the number n to a string.
.split(''): Splits the string into an array of characters.
.reverse(): Reverses the array of characters.
.map(digit => parseInt(digit)): Converts each character back into an integer.
*/