/* 
!Power of Chaining

? NOTE: You should not chain methods that mutate the original array

*/

const eurToUsd = 1.1
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

//PIPELINE
const totalDepositsToUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0)

console.log(totalDepositsToUSD);