/*1 Given an array. Determine whether it consists only from unique elements or not.*/

function uniqueElement(arr){
    arr.sort((a,b)=>a-b)
    for(let i = 0; i<arr.length-1; i++){
        if(arr[i]===arr[i+1]){
           return false
        }
      }
  return true
  }
  console.log(uniqueElement([1,[7],2,3,22,[5],6,"1",1,[7],222]))
 
/*2. Given an array of numbers. Find the sum of numbers’ quadratic which are even.*/
function sumEven(arr){
    let sum  = 0
    arr.map(x=>Math.sqrt(x)).filter(x=>x%2==0).map(a=>sum+=a)
    return sum
  }
  console.log(sumEven([4,9,16,25,36,49,64,81,100]))

/* 3. Check whether string is palindrome, or not.*/
function palindrome(str) {
  str = str.replace(/[\W_]/g, "").toLowerCase()
  let str1 = str.split("").reverse().join("")
  return str===str1
}
  console.log(palindrome("polin- drom mor dni_loP"))
/* 4. Given a word and a list of possible anagrams, select the correct sublist.*/  
function anagram(str, arr) {
    str= str.split("")
            .sort(function(a,b){
                   if(a>b){
                        return 1
                    }else{
                        return -1
                    }
              })
            .join("")
       
    let possibleanagrams = []  
    arr.map(x=>x.split("")
       .sort(function(a,b){
               if(a>b){
                    return 1
               }else{
                    return -1
               }
          })
       .join(""))
       .forEach(function(x, ind){
                  if(x==str){
                       possibleanagrams.push(arr[ind])
                  }
          })
    return possibleanagrams
}
  console.log(anagram("pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"]))
  
