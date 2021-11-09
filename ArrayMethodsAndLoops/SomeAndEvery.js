/* 
!Some and Every:

  * Some: 
      ? returns true if any value in the array meets the condition provided.
      
      ? difference between includes and some is that includes checks for equality while some we can specify any condition
  
  * Every:
      ? Only returns true is ALL the elements in the array satisfy the condition that we pass in.

*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements.includes(-130)); //returns true if any value in the array is equal to -130

console.log(mov => mov === -130);//also true

const anyDeposits = movements.some(mov => mov > 0) //true


//Every
console.log(movements.every(mov => mov > 0)); //false
//console.log(account4.movements.every(mov => mov > 0)); //true