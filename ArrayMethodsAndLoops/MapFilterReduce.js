/* 
!Map

* Map returns a new array containing the results of applying an operation on all original array elements
* Has access to three parameters: CURRENT array element, index, and the whole array itself
* Each time our map method calls our callback, it will simplay pass in the current array element as well as the current index, and the whole array. And of these three you can choose which one of thos or multiple of those that you use.

!Filter

* Filter returns a new array containing the array elements that passed a specified test condition.
*Takes the same arguments as map.

!Reduce

* Reduce boils ("reduces") all array elements down to one single value (adding all the elements together)
* fisrt parameter of the callback function is the accumulator. It is basically a snowball that keeps accumulating the value that we want to return.
*Takes an inital value for the accumulator
*/

//!Map


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const euroToUsd= 1.1

//Here we use a function to solve this problem of creating a new array (Functional programming paradigm)
const movementsUSD = movements.map(mov => mov * euroToUsd)

console.log(movements);
console.log(movementsUSD);

//with forOf
//ForOf creates sideEffects on each iteration
//Here we simply loop over one array and then manually create a new one
const movementsUSDfor=[]
for(const mov of movements) movementsUSDfor.push(mov * euroToUsd)
console.log(movementsUSDfor);

const movementDescriptions = movements.map((mov, i) => {
  return `Movement ${i + 1}: You ${mov > 0 ? 'deposited': 'withdrew'} ${Math.abs(mov)}`

  // if (mov > 0) {
  //   return (`Movement ${i + 1} You deposited ${mov}`) //returning here will place these strings in the copy of the array
  // } else {
  //   return (`Movement ${i + 1} You withdrew ${Math.abs(mov)}`) 
  // }
})

console.log(movementDescriptions);


//!Filter
//A practical reason for why we use map, filter, and reduce is because with these methods, we can using chaining. Also new JS is pushing towards more functional programming.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const deposits = movements.filter((mov) => {
  return mov > 0 //only the array elements for which this condition is true, will make it into the deposits array.
})
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0)
console.log(withdrawals);

//with forOf
const depositsFor = []
for (const mov of movements) if (mov > 0) depositsFor.push(mov)
console.log(depositsFor);

//!Reduce
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
//the accumulator with be the sum of all of the previous values
const balance = movements.reduce((acc, current, index, array) => {
  console.log(`Iteration ${index}: ${acc}`);
   return acc + current
}, 0) //<-intial value of the accumulator in the first interation of the loop

console.log(balance) //3840;

//forOf
let balance2 = 0
for(const mov of movements) balance2 += mov
console.log(balance2);

//Maximum value
const max = movements.reduce((acc, mov) => {
    if (acc > mov){
      return acc;
    } else {
      return mov
    }
}, movements[0])
console.log(max); //3000