/* 
!Find method:

  ? We can use the find method to retrieve one element in an array based on a condition.
  ? Accepts a call back function which will then be called as the method loops over the array.
  ? Will not return a new array, but will return the FIRST element in ght array that satisfies the condition.

!Find Index 

  ? Similar to the find method, but returns the index of the element that matches the condition, and not the element itself.

  * Difference between indexOf and findIndex: 
      ? With indexOf we can only search for a value that is in the array
      ? With findIndex, we can create complex conditions
*/

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
}

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
}

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
}

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
}

const accounts = [account1, account2, account3, account4]

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
const firstWithdrawal = movements.find(mov => mov < 0)
console.log(movements);
console.log(firstWithdrawal); //-400

//with ForOf
for( const account of accounts ){
  if(account.owner === 'Jessica Davis'){
    console.log(account.owner);
  }
}