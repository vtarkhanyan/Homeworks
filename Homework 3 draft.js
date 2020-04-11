
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
