// 1st problem

function calculateSum(a,b){
    const sum = a + b;
    return sum
}

const passArgument = calculateSum(10,7)

console.log(`1st problem output -- ${passArgument}`)

// 2nd problem

function isEven (c){
    if(c % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

const evenCheck = isEven(4);

console.log(`1st problem output -- ${evenCheck}`)

// 3rd problem

function findMax (arr) {

let max = arr[0]
arr.forEach( i => {
    if(i > max){
        max = i
    }
});

return max

}
let passArray = [20 , 10 , 40 , 23 , 38 , 90]

let maxNumber = findMax(passArray)

console.log(`3rd problem output -- ${maxNumber}`)


// 4th problem

function reverseString (x) {
    
    let reversed = x.split("").reverse().join("")


    return reversed

}

const result = reverseString("Ayman")
console.log(`4th problem output -- ${(result)}`)

// 5th problem

function filterOddNumber(oddArr) {
 
    let y = []

    oddArr.forEach(i => {
        if(i % 2 != 0){
            let newArray = y.push(i)
        }
    })
    return y
}
const arrayPass = [40 , 23 , 33 , 15 , 44 , 56 , 79]
const finalArray = filterOddNumber(arrayPass)
console.log(`5th problem output -- ${(finalArray)}`)

// 6th problem 

function sumArray(arr) {
    let sum = 0

    arr.forEach(i => {
        sum = sum + i

    })

    return sum
}

const arrayPass1 = [40 , 23 , 33 , 15 , 44 , 56 , 79]

const sumArr = sumArray(arrayPass1)

console.log(`6th problem output -- ${(sumArr)}`)

// 7th problem

function sortArray(arr) {
    arr.sort(function(a , b ) {
        return a-b
    })
    return arr
}

const unsortedArray = [40 , 23 , 33 , 15 , 44 , 56 , 79]

const finalSortedArray = sortArray(unsortedArray)

console.log(`7th problem output -- ${(finalSortedArray)}`)

// 8th problem

function capitalizeFirstLettter(d){
   let result =  d[0].toUpperCase() + d.slice(1)
   return result
    
}

const result1 = capitalizeFirstLettter("ayman")

console.log(`8th problem output -- ${(result1)}`)




