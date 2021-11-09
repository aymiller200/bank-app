/* 
!Simple Array methods: Methods are just functions attached to objects.

*Slice: 
  ? With the slice method we can extract part of any array without changing the original array

*Splice
  ? Similar to the slice, the only different is that it mutates the actual array, it doesn't create a copy.

*Reverse
  ? Reverses and mutates the original array

*Concat
  ? Combines two or more arrays, does not mutate the original arrays

*Join
  ? Adds all the elements of an array into a string, separated by the specified separator string.
  ? If parameter omitted, the array elements are separated with a comma.

*Entries
  ? Returns an iterable of key, value pairs for every entry in the array
*/

//Slice
let arr = ['a', 'b', 'c', 'd', 'e']

console.log(arr.slice(2)) //<-first argument is what index to begin at. [c, d, e]
console.log(arr.slice(2, 4)) // <- second argument is what index to end at [c, d]
console.log(arr.slice(-2)) // <- negative beginning arguments take from the end of the array. [d, e]
console.log(arr.slice(-1)) // <-negative one will always be the end of the array [e]
console.log(arr.slice(1, -2)) // [b, c]
console.log(arr.slice()) // without any arguments we just create a copy of the array.

//Splice
let arr = ['a', 'b', 'c', 'd', 'e']

console.log(arr.splice(2)) //<-first argument is what index to begin at. [c, d, e]
console.log(arr.splice(-1)) //<- a common use case for splice is to remove the last element of the array
console.log(arr.splice(1, 2)) //<- second parameter is the delete count, the number of elements we want to delete. b, c are deleted.
console.log(arr) // <- our original array is only [a, b] now. Splice exrtacted c, d, e from the original array.

//Reverse
let arr = ['a', 'b', 'c', 'd', 'e']
const arr2 = ['j', 'i', 'h', 'g', 'f']
console.log(arr2.reverse()) //[f, g, h, i, j]
console.log(arr2)

//Concat
const letters = arr.concat(arr2) // <-first array will be the array on which the method is called. The array in the argument is the one we pass into the concat method
console.log(letters)
console.log(arr2)
console.log([...arr, ...arr2]) //does the same thing, but we can't string methods together this way.

//Join
console.log(letters.join('-'))