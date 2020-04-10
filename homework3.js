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
