/* 1. Given an array. Write a recursive function that removes the first element and returns
the given array. (without using arr.unshift(),assign second element to first, third element
to second...)*/
function print(arr,i){
    arr[i]=arr[i+1];
    if(i>=arr.length-1){
        arr.length = arr.length-1;
        return arr
      } 
    return print(arr,++i)
  }
  console.log(print([1,2,3,4,5,6],0))
/* 2. Given an object. Invert it (keys become values and values become keys). If there is
more than key for that given value create an array. */
   let obj = { 
      a: "1",
      b: "2", 
      c: "2",
     h: "2", 
     f: "1",
     u: "1",
     y: "6", 
     e: "5"}

function print(obj){
     let arr = [];
    for(let i in obj){
        if(obj.hasOwnProperty(obj[i])){
            if(typeof obj[obj[i]] == "string"){
                arr = [];
                 arr[0] = obj[obj[i]]
            }
        arr.push(i);
        obj[obj[i]] = arr;
        delete obj[i]
      }else {
            obj[obj[i]] = i;
            delete obj[i]
        } 
    }      
    return obj
  }
   console.log(print(obj))
/*3. Given the list of the following readers: Output the books sorted by the percent in descending order which readStatus is true.*/

let readersList = [
{ book: "Catcher in the Rye", readStatus: true, percent: 40},
{ book: "Animal Farm", readStatus: true, percent: 20},
{ book: "Solaris", readStatus: false, percent: 90 },
{ book: "The Fall", readStatus: true, percent: 50 },
{ book: "White Nights", readStatus: false, percent: 60 } ,
{ book: "After Dark", readStatus: true, percent: 70 }
];
function print(readersList){
    let newReadersList = readersList.filter(x => x.readStatus == true);
    return newReadersList.sort((a,b) =>b.percent-a.percent)
  }
    console.log(print(readersList))
/*4 Given an array and a number N.  Write a recursive function that rotates an array N
places to the left. (Hint: to add element to the beginning use arr.unshift())*/
/*solution 1 without recursive function */
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
function print(arr, n ){
      if(n<0){
         arr.push(...arr.splice(0,arr.length+n))
     }else{
          arr.push(...arr.splice(0,n))
       }
         return arr
  }
    console.log(print(arr,-2))
/*solution 2 with recursive function*/
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
function print(arr, n ){
        if(n==0){
           return arr
        }       
        if(n<0){
            arr.unshift(arr.pop())
            return print(arr,++n)
        }else{
             arr.push(arr.shift())
             return print(arr,--n)
          }
    }
    console.log(print(arr,-2))
/*5 Create a function that builds a tree like object given an array with object which
contains parent and id properties.*/

let treeNodes = [
    {parent: null, id: 0},
    {parent: 0, id: 1},
    {parent: 0, id: 2},
    {parent: 1, id: 3},
    {parent: 1, id: 4},
    {parent: 2, id: 5},
    {parent: 4, id: 6}
 ]
 
 function print(treeNode, parent){
      let tree = {}
      treeNodes.filter(x => x.parent ==parent).forEach(x => tree[x.id]=print(treeNodes, x.id))
      return tree
   }
   console.log( print(treeNodes, null))
/*6 Write a JavaScript function to get all possible subsets of given length of the given
array.*/
function print(arr, n, arr1, arr2, x, y){
    for(let i=y; i < arr.length; i++){
         arr1[x] = arr[i];
         if(x < n - 1){
             print(arr, n, arr1, arr2, x++, i++);
         } else {
             arr2.push([...arr1]);
            }
      }
    return arr2
}
console.log(print([1, 2, 3, 4, 5, 6], 3,[],[],0,0))
/*7. Create constructor function which instances would be objects with already
implemented method &quot;map&quot; (like Array.map)*/
function print(){
    function Mapobj(mapFn){
        this.map = function(mapFn){
                    let newObj = Object.create(this)
                    for(let key in this){
                            if(typeof this[key]!=='function'){
                             newObj[key] = mapFn(this[key])
                        }     
                     }
                    return newObj
                } 
            }
      let obj = new Mapobj()
      
      obj["a"] = 1
      obj["b"] = 2
      obj["c"] = 3
      
      let obj1 = obj.map(function(x){
        return x*2
        })
      console.log(obj instanceof Mapobj ) //true
      console.log(obj1 instanceof Mapobj) //true
      console.log(obj) // { map: [Function], a: 1, b: 2, c: 3 }
      console.log(obj1) // { a: 2, b: 4, c: 6 }
       return  obj1
  }
  console.log(print())

