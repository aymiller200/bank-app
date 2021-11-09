/* 
!Creating and Filling Arrays

  ? We can generate arrays programmatically, rather than having to define them manually

  * Fill
    ? Fill can be called on empty arrays. It DOES mutate the underlying array.
    ? First Parameter is what we want to fill the array with, second parameter is at which index we want to start filling the array, third parameter is where we want to stop filling the array.

  * From:
    ? Initially introduced into  JS to create arrays from array like structures (strings, maps, sets, all iterables)
    ? A built in method on Array()
    ? First argument is an object with the length proptery (so, how long you want your array to be)
    ? Second argument is a mapping function -> exactly like the call back function we pass into the map method (access to current element, and the index)

*/

const x = new Array(7) //New array with 7 empty elements. Whenever we pass in one argument to the array constructor, it creates a new empty array of that length.
console.log(x);

//The onle method we can call on the empty array x is the FILL method
x.fill(1, 3, 5)
console.log(x); //[empty * 3, 1, 1, empty * 2]

const arr = [1, 2, 3, 4, 5, 6, 7]
arr.fill(23, 4, 6)
console.log(arr); //[1, 2, 3, 4, 23, 23, 7]

//From
const y = Array.from({length: 7}, () => 1) //returns 1 in each iteration
console.log(y);

const z = Array.from({length: 7}, (_, i) => i + 1)
console.log(z); //[1, 2, 3, 4, 5, 6, 7]