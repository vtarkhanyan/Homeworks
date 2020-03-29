function print(arr, arg) {
    let result = []
    for (let i of arr) {
        if(i>arg){
           result.push(i)
           }
    }
    if(result.length==0){
           result ="Such values do not exist."
           }
    return result
}
console.log(print([10, 25, 16, -5, 30, 15, 24] , 160))