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



let treeNode = [
    {parent: null, id: 0},
    {parent: 0, id: 1},
    {parent: 0, id: 2},
    {parent: 1, id: 3},
    {parent: 1, id: 4},
    {parent: 2, id: 5},
    {parent: 4, id: 6}
 ]
 
 function print(treeNode, parent){
   let node = {}
   treeNode.filter(x => x.parent ==parent).forEach(x => node[x.id]=print(treeNode, x.id))
   return node
   }
   
   console.log( print(treeNode, null)
     )
