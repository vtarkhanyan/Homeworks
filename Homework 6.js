/*1 Given an array. Determine whether it consists only from unique elements or not.*/
function uniqueElement(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
              if(arr[i]===arr[j]){
                return false
                }
          }
      }
  return true
  }
  
  console.log(uniqueElement([1,2,3,22,5,6,7,7]))
  
