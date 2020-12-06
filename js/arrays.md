### Массивы

[Как остановить forEach](https://zen.yandex.ru/media/nuancesprog/pochemu-nelzia-preryvat-cikl-foreach-v-javascript-5f909bf9be60787eb9943ed9)

1. Вернуть уникальный массив(set)
    ```js
    const t = [1,2,3,3,4,5,6,5,7]
    
    console.log([... new Set(t)])
    ```
   
2. Вернуть плоский массив
    ```js
    const t = [1,[2,3,[4],5],6]
    ```
    Возможный решения:
    ```js
    // flat 
    console.log(t.flat(Infinity)
    ```
    ```js
    // Сделать функцию с рекурсией
    const foo = (arr) => {
        let result = [];
        
        arr.forEach(item => {
            if(Array.isArray(item)) {
                result = [...result, ...foo(item)]
            } else {
                result.push(item)
            }
        })
        return result;
    }
   
   // или
   
   const foo2 = b => b.reduce((acc, i) => Array.isArray(i) ? [...acc, ...foo2(i)] : [...acc, i], []);
    
    foo([1,[2,3,[4],5],6,[7,[8]]]);
    foo2([1,[2,3,[4],5],6,[7,[8]]]);
    ```
   
3. Входящие параметры n = 10 и m = 20. Нужно построить матрицу и заполнить матрицу 10x20 уникальными элементами.
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
   
4. Объеденить массивы 
    ```js
    const arr1 = [1, 3, 5, 3, 8, 1, 12];
    const arr2 = [3, 4, 5, 9, 15, 18];
    
    function concatenateArrays (data1, data2) { }
    
    concatenateArrays(arr1, arr2) // [1, 3, 5, 8, 12, 4, 9, 15,18]
    ```
   Решение
    ```js
    const concatenateArrays = (data1, data2) => {
       let exist = {};
       return data1.concat(data2).filter(x => !exist[x] ? exist[x] = true : false);
    }
    ```