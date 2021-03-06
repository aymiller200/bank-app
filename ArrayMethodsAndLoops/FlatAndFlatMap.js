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

/* 
!Flat & FlatMap
(ES2019)
  *Flat:
    ? Takes a two-demensional array and flattens it (makes it into just one array). 
    ? Takes a depth argument which is a number. For 1, you go one level two, for 2 you go two levels deep.

  *FlatMap 
    ? Combines the map and the flat method into just one method (better for performance)
    ? Since flatMap also does mapping, it need to receive exactly the same callback as a map method
    ? FlatMap only goes one level deep and we cannot change it. So if you need to  traverse multiple levels, you need to use flat and map separatly 
*/

const arr = [[1, 2, 3], [4, 5, 6], 7, 8]
console.log(arr.flat()) //[1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8]
console.log(arrDeep.flat(2))

const accountMovements = accounts.map((acc) => acc.movements) //returns an array which contain the movements array of every map.

const allMovements = accountMovements.flat()
console.log(allMovements)

const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0)
console.log(overallBalance)

//with chaining
const overallBalanceWithChaining = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0)
console.log(overallBalanceWithChaining)

//with flat map
const overallBalance2 = accounts
  .flatMap((acc) => acc.movements)  
  .reduce((acc, mov) => acc + mov, 0)
console.log(overallBalance2)