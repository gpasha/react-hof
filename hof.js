const arr = [1, 2, 3, 4, 5]

function hof(number) {
    return function(array) {
        return array.map(item => item + number)
    }
}

const addFive = hof(5)(arr)
console.log('addFive: ', addFive);

const addTen = hof(10)
console.log('addTen(arr): ', addTen(arr));