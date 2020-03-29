/*1 Write a function which receives an array and a number as arguments and returns a
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
/*2. Write a function, which receives two numbers as arguments and finds all numbers
between them such that each digit of the number is even. The numbers obtained should be
printed in a comma-separated sequence on a single line. */
function print(a, b) {
    let  x = Math.max(a, b)
    let  y = Math.min(a, b)
    let result = []
    for (let i= y; i<=x; i++) {
        if(i%2==0){
           result.push(i)
           }
    }
    if(result.length==0){
           result ="Such numbers does not exist."
           }
    return result.join(", ")
}
console.log(print(19, 42))

/*3. Given an array of numbers which is almost sorted in ascending order.  Find the index
where sorting order is violated.*/

function print(arr) {
    for (let i = 0; i<arr.length; i++) {
        if(arr[i]>arr[i+1]){
           return i+1
           }
    }
    return -1
}
console.log(print([-9, -4, -4, 3, 12, 4, 5]))

/* 4. Given an array of integers, find the pair of adjacent elements that has the largest
product and return that product. */
function print(arr) {
    let x = 0
    for (let i = 0; i<arr.length; i++) {
        let y = arr[i]*arr[i+1]
        if(x<y){
           x = y
           }
    }
    return x
}
console.log(print([-90, 4, -4, 3, 12, 4, 5]))

/* 5. Given an array of integers. All numbers are unique. Find the count of missing
numbers between minimum and maximum elements to make integers sequence.*/

function print(arr) {
    let  x = Math.max(...arr)
    let  y = Math.min(...arr)
    let result = []
    for (let i= y; i<=x; i++) {
       
           result.push(i)
           
    }
   
    return result
}
console.log(print([19, 42,11, 50 ]))

/* 6. Given an array consisting from the arrays of numbers (like a two-dimensional array).
Find sum of each row and print them as an array*/
function print(arr) {
    let result = []
    for (let i of arr) {
      let x = 0
       for (let j=0; j<i.length; j++){
        x+=i[j]
     }
        result.push(x) 
    }
       return result
}
console.log(print([[1], [2], [3], [4]]))

/* 7. Given an array of integers. Write a function that return new array from first array,
where removed even numbers, and odd numbers was multiplied with new array length*/

function print(arr) {
    let x = []
    let result = []
    for (let i of arr) {
        if(i%2!==0){
           x.push(i)
           }
    }
      x.forEach((a) =>result.push(a*x.length))
       return result
}
console.log(print([5, 4, 78, 0, -3, 7]))
