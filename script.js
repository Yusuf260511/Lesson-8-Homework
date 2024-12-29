let arr = ['dust', 'kun', 'meva', 'oila', 'hovli', 'suv', 'yul', 'qish', 'tinchlik', 'shamol']
let arr1 = []
let arr2 = []
for (let word of arr) {
    if (word.includes('i')) {
        arr1.push(word)
    } else {
        arr2.push(word)
    }
}
console.log(arr1, 'i harifi ishtirok etgan sozlar')
console.log(arr2, 'i harifi ishtirok etmagan sozlar')