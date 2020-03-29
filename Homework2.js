/*1.Write a function which receives an array and a number as arguments and returns a
new array from the elements of the given array which are larger than the given
number.*/
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
