//use map to capitalise the first letter of each word

const words = ['good', 'things', 'takes', 'time'];

const newWord = words.map(el =>{
    return `${el[0].toUpperCase()}${el.slice(1)}`
})
console.log(newWord)