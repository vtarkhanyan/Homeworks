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


unction print(arr, n){
let obj = {}
let obj1 = {}
  for(let  i = 1; i<n+1; i++){
    obj[i] = i-1
    }
    
    Object.assign(obj1,obj)
  
  
    let arr1 =[]
    let x = n-1
      for(let i = 0, a = x-1; i<5; i++){
   
          for(let j = n-1; j<arr.length; j++){
          
              for(let key in obj){
                arr1.push(arr[obj[key]])
            }
            obj[n] += 1
            
        }
        Object.assign(obj,obj1)
 
        for(let key in obj){

         if(key>a)
         obj[key]+=1
         }
 
      }
      
    
    return arr1
  
  }

console.log(print([1,2,3,4,5],4))
