/* 1. Given an array. Write a recursive function that removes the first element and returns
the given array. (without using arr.unshift(),assign second element to first, third element
to second...)*/
function print(arr,i){
    arr[i]=arr[i+1]
    if(i>=arr.length-1){
        arr.length = arr.length-1
        return arr
      } 
    return print(arr,++i)
  }
  console.log(print([1,2,3,4,5,6],0))






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
