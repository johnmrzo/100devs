//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
function reverseParty(party) {
    console.log(party.reverse())
}
// reverseParty(["bulba", "char", "pika", "butter"])

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function compare(a,b) {
    return a.reduce((acc, c) => acc + c**2, 0) > b.reduce((acc, c) => acc + c**3, 0)
}
let a = [1,2,3,4]
let b = [1,2,3,4]
// console.log(compare(a,b))

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function multipleOfIndex(arr) {
    return arr.filter((e, i) => e % i === 0)
}
// console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])) //  [-6, 32, 25]
// console.log(multipleOfIndex([68, -1, 1, -7, 10, 10])) //  [-1, 10]

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function sumOfArr(arr) {
    return arr.reduce((acc, c) => acc + Number(c), 0)
}
let arr = [1,2,3,"4"]
console.log(sumOfArr(arr))