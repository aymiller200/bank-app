/* 
!Sorting arrays:
    ? The sort method MUTATES the original array
    ? Sort method by default sorts by strings (converts everything to strings and then sorts)
        ?Can fix this with a callback function argument

*/

//Sort with strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha']
console.log(owners.sort()); //Sorted alphabetically

//Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements);
//console.log(movements.sort()); //[-130, -400, -650, 1300, 200, 3000, 450, 70]

//               curr, next
movements.sort((a, b) => {
  // return < 0 A, B (keep order)
  // return > 0 B, A (switch order)
  if(a > b) return 1
  if(b > a) return -1
})

//can improve: 
movements.sort((a, b) => a - b)

console.log(movements); //[-650, -400, -130, 70,  200,  450, 1300, 3000]

//in descending order
movements.sort((a, b) => {
  if(a > b) return -1
  if(b > a) return 1
})

movements.sort((a, b) => b - a)

console.log(movements); //[3000, 1300,  450, 200,   70, -130, -400, -650]