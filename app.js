const numbers = [19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,];



let prime = []

function findPriem(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let temp = 0
        for (let j = 1; j <= numbers[i]; j++) {
            if (numbers[i] % j === 0) {
                temp++
            }
        }
        if (temp === 2) {
            prime.push(numbers[i])
            temp = 0
        } else {
            temp = 0
        }
    }
    // console.log(prime)
}

findPriem(numbers)


let arr = [...prime]
function sort(arr) {
    for (let i = 0; i < numbers.length; i++) {

        for (let j = i+1; j < numbers.length; j++) {
            if(arr[i]>arr[j]){
                let temp = arr[j]   //3
                arr[j] = arr[i]
                arr[i] = temp
            }

        }
    }
}

sort(arr)
console.log(arr)

let sum =0
for(let i=0; i<arr.length; i++){
    sum += arr[i]
}

console.log("Max : " ,arr[arr.length-1])
console.log("Min : " ,arr[0])
console.log("Sum : " , sum)


