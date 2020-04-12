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
