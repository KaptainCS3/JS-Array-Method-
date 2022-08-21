let nums = 10
let index = 0
let i = 0
let numsArray = []
while(i <= nums){
    numsArray.push(index)
    index++
    i++
}
const filterArray = numsArray.filter(items => items % 2 == 0)

console.log(filterArray)