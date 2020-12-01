# Массивы

1. Входящие параметры n = 10 и m = 20. Нужно построить матрицу и заполнить матрицу 10x20 уникальными элементами.

```js

const getRandomMatrix = (x, y) => {
    return [...new Array(x)].map(() => {
        return [...new Array(y)].map(() => {
            return Math.floor(Math.random() * 100)
        })
    })
}
// или
const getRandomMatrixFill = (x, y) => {
    return new Array(x).fill(0).map(() => new Array(y).fill(0).map(() => 
        Math.floor(Math.random() * 100)))
}

getRandomMatrix(10, 20).forEach(row => {
    console.log(row.join(" - "))
})
```