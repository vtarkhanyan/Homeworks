function binarySearch(arr, num){
  let L = 0;
  let H = arr.length-1
  while(L!=H){
      let mid = Math.ceil((L+H)/2)
      if(arr[mid]>num){
          H = mid-1
      }else{
           L = mid
      }
      if(arr[L]==num){
          return L
      }
  }
     return "out of range"
  }
  
  console.log(binarySearch([1,5,6,8,10,12,13,14,15,20,25], 14))
