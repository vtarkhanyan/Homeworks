/*5 Given a number. Write a function that calculates its sum of the digits and if that sum
has more than 1 digit find the sum of digits of that number. Repeat that process if needed and
return the result.*/
function print(n){
    let y = n%10
    if(n>9){
      n = Math.floor(n/10)
      y +=  print(n)
      }
      if(y>9){
        n=y
        return print(n)
        }
          return y 
   }
console.log(print(1235652))
