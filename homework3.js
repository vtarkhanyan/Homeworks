
let num  = 4211133
let numLength = num.toString().length-1
function print(n,x){
   
       if(n.toString()[x]%2==0){
            return false
        }else if(n.toString()[x]==undefined){
      return true
        }
                return print(n,x-1)
  
     }
  
  console.log(print(num,numLength))
