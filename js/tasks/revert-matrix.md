Реализовать функцию, которая получает на вход матрицу:
 1 2 3
 4 5 6
 7 8 9

И выводит ее по диагонали
 1
 4 2
 7 5 3
 8 6
 9

```js
function revertMatrix(matrix) {
	return matrix.reduce(
        (result, row, index) => {
            if(result.length === 0) {
                row.forEach(i => result.push([i]))
            } 
            if(index > 0) {
                row.forEach((i, rowIndex) => {
                    if(result[index + rowIndex]) {
                        result[index + rowIndex].push(i)
                    } else {
                        result.push([i])
                    }
                })
            }    
            return result.map(i => i.reverse())
	    },
    [])
} 

revertMatrix([])


```