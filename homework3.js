/*1. Write a recursive function to determine whether all digits of the number are odd or not.*/
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

/*2. Given an array of numbers. Write a recursive function to find its minimal positive
element. (if such element does not exist, return -1)․ */
let arr  = [-5, -9, -111, -1000, -7]
let arrLength = arr.length-1
  function print(arr, x){
      if(arr[arr.length-1]>arr[x-1] && arr[x-1]>=0 ||arr[arr.length-1]<0){
         arr[arr.length-1] = arr[x-1]
     }
      if(x>1){
             return print(arr,x-1)
        }
     if(arr[arr.length-1]<0){
          return -1
       }else{
          return arr[arr.length-1]
         }
    }
   console.log(print(arr,arrLength))
/*3. Write a recursive function which receives a number as arguments and returns the fibonacci sequence as array. */
function print(num, num1 = 1, num2 = 1, arr = []) {
          arr.push(num1)
          if (num < 1) {
               return []
             } 
          if (num < 2) {
              return arr
           }  
           let x = num1
           num1 = num2
           num2 = num1+x
          if(num >=2){
                num2 =  print(num - 1, num1, num2, arr)
               return  arr
       }; 
}
  console.log(print(10))
/*4. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
function that concats arrays).*/
function print(arr, arr2 = []) {
  if (arr.length === 0) {
     return arr2
  }
  if (Array.isArray(arr[0])) {
     return print(arr[0].concat(arr.slice(1)), arr2)
  }
   arr2.push(arr[0])
   arr.splice(0,1)
   return print(arr, arr2)
}
console.log(print(  [14,[1],[2]]))
/*5 Given a number. Write a function that calculates its sum of the digits and if that sum
has more than 1 digit find the sum of digits of that number. Repeat that process if needed and
return the result.*/
let num  = 999999999999789
let numLength = num.toString().length-1
function print(n,x){
   let z = n.toString()
  let y = parseInt(n.toString()[x])
    if(n>9 & x>0){
      y = y+ print(n, x-1)
      }
      if(y>9 && x>z.length-2){
      n = z.slice(x+2)+y
      if(n<99){
     y = print(n, x-(x-1))
      }
      }if(y>99 && x>z.length-2){
        y = print(n, x-(x-2))
        }
        return y 
   }
console.log(print(num,numLength))
