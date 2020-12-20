# Вопросы по JS


1. Вопрос на поднятие(hoisting)
    ```js
    // Что будет выведено?
    console.log(a);
    var a = 5;
    
    // Ответ: undefined
    ```
    ```js
    // Что будет если var заменить на const?
    console.log(a);
    const a = 5;
    
    // Ответ: будет ошибка
    ```

4. Поднятие + setTimeout
    ```js
    setTimeout(() => console.log(a), 0)
    console.log(b)
    console.log(c)
    
    var a=[];
    var b={};
    let c=9
    
    // undefined (b)
    // ошибка что не определен c
    // undefined (a)
    ```


1. 

 1 2 3
 4 5 6
 7 8 9

 1
 4 2
 7 5 3
 8 6
 9
 
function foo(matrix) {
	return matrix.reduce((result, row, index) => {
  	if(result.length === 0) {
    	row.forEach(i => result.push([i]))
    } 
    if(index > 0) {
    	row.forEach((i, rowIndex) => {
      	if(result[index + rowIndex]) {
        	result[index + rowIndex].push(i)
				} else {
        	result.push([i])
			})
    }    
    return result.map(i => i.reverse())
	}, [])
} 

[
[1],
[4, 2], 
[5, 3],
[6]
]

2





'use strict';

x = 5;

console.log(++x); //(1) 6
console.log(x++); //(2) 6

function fn() {
    console.log(x); //(3) undefined
    x += 10;

    console.log(x); //(4) NaN / 10
    console.log(typeof x); //(5) number
    var x = 13;
    console.log(x); //(6) 13
}

fn();
console.log(x); //(7) 7





function fn() {
  console.log('hello'); // 1

  setTimeout(function() {
    console.log('setTimeout1'); //
  }, 0);

  new Promise(function(resolve) {
    resolve();
  }).then(function() {
    console.log('then1'); //
  }).then(function() {
    console.log('then2'); //
  });

  console.log('bye'); //
}

fn();