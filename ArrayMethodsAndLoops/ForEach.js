/* 
!ForEach

*A Higher order function, requires a callback

*ForEach method loops over the array and calls the callback function on each iteration, and passes in the current element of the array as an argument to that function

* First Parameter: The Current Element
* 2nd Parameter: The Current Index
* 3rd Parameter: The entire array in which we are looping over

!When to use ForOf and when to use ForEach: 
  ? The main difference between them is that you cannot break or continue out of a ForEach loop. 
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

//For Of
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`)
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`) // <- Math.abs: Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.
  }
}

//ForEach
console.log('-----FOREACH-----')
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`)
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
  }
}) // 0: function(200)
// 1: function(450)
// 2: function(400)


