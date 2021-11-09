/* 
!Maps and Sets
*Sets: 
  ? Sets do not have keys or indexes.

  ? Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

*Maps: 
  ? The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

  ? A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration.
*/

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
])

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`)
})

//set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
console.log(currenciesUnique) // {USD, GBP, EUR}

currenciesUnique.forEach((value, _, map) => {
  // _ is a throw away parameter
  console.log(`${_}: ${value}`)
})
