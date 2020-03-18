// 1. Write a program to print X star pattern series using loop. 
function print(a) {
    let x = a * 2
    let star = "";
    for (let i = 1; i < x; i++) {
        for (let j = 1; j < x; j++) {
            if (i == j || x - i == j) {
                star += "*";
            } else {
                star += " ";
            }
        }
        star += "\n";
    }
    return star
}
console.log(print(5))

// 2. Given an array of numbers.Print frequency of each unique number.(Frequency is the count of particular element divided by the count of all elements)

function print(arr) {
    arr.sort()
    let unique = {};
    for (let i in arr) {
        if (!(arr[i] in unique)) {
            var count = 0
        }
        count++
        unique[arr[i]] = count / arr.length
    }
    return unique;
}
console.log(print([1, 2, 3]))


// 3. Given an array of strings and numbers.Print the number of integers and the number of strings in the array.

// solution 1

function print(arr) {
    let obj = {
        Numbers: 0,
        Strings: 0,
    }
    for (let i in arr) {
        if ((typeof arr[i]) == "number") {
            obj.Numbers++
        } else {
            obj.Strings++
        }
    }
    return obj;
}
console.log(print([1, 4, 'i am a string', '456']))

// solution 2

function print(arr) {
    let x = 0;
    let y = 0;
    for (let i in arr) {
        if ((typeof arr[i]) == "number") {
            x++
        } else {
            y++
        }
    }
    let str = `Numbers: ${x}, Strings: ${y},`
    return str;
}
console.log(print([1, 4, 'i am a string', '456']))

// 4. Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the string․ If there are several words which are the longest ones, print the last word(words can be separated by space, comma or hyphen).
function print(str) {
    let arr = str.split(/[\s,_]+/)
    let arr1 = []
    for (let i in arr) {
        arr1.push(arr[i].length)
    }
    arr1.sort((a, b) => a - b)
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i].length == arr1[arr1.length - 1]) {
            return arr[i]
        }
    }
}

console.log(print("A revolution without dancing is a revolution not worth having."))


// 5. Write a function to find longest substring in a given a string without repeating characters except space character. If there are several, return the last one.Consider that all letters are lowercase.
 


// 6. Write a function to compute a new string from the given one by moving the first char to come after the next two chars, so & quot; abc & quot; yields & quot; bca & quot;.Repeat this process for each subsequent group of 3 chars.Ignore any group of fewer than 3 chars at the end.

function print(str) {
    let arr = str.split("")
    let x = ""
    for (let i = 0; i < arr.length + 1; i = i + 3) {
        if (!(arr.length - i < 3)) {
            var y = arr.splice(i, 1, x)
            x = y.join("")
        } else {
            y = arr.splice(i, 0, x)
            x = y.join("")
        }
    }
    arr.shift();
    str = arr.join("")
    return str
}

console.log(print("dfg"))

// 7. Write a function, which receives an array as an argument which elements arrays of numbers.Find biggest negative number of each array.Return product of that numbers.If there is not any negative number in an array, ignore that one.Check that items of the given array are arrays.
function print(arr) {
    let y = 1
    for (let i in arr) {
        if (!Array.isArray(arr[i])) {
            y = "Invalid Argument"
        } else if (arr[i].every(x => x > 0)) {
            y = "No negatives"
        } else {
            let x = arr[i].filter(x => x < 0)
            if (!(Math.max(...x) == Number.NEGATIVE_INFINITY)) {
                y *= Math.max(...x)
            }
        }
    }
    return y
}
console.log(print([3, 4, 11, 0, 5, 6, 7, 8]))


// 8. Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all elements in the array are unique.
function print(arr) {
    let y = [];
    for (let i = 0; i < arr.length; i++) {
        let x = [];
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                x.push(arr[i])
                x.push(arr[j])
                x.push(arr[k])
                y.push(x)
                x = []
            }
        }
    }
    return y
}

console.log(print([5, 9, 23, 0,-1,-2]))
