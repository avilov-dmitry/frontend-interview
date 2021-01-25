# Hoisting

Что будет в консоли?
```js
console.log(a);
var a = 5;
// Ответ: undefined
```
    
Что будет если var заменить на const?
```js
console.log(a);
const a = 5;

// Ответ: будет ошибка
```


Что будет в консоли если добавить setTimeout
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


Что будет выведенов консоль?
```js
x = 5;

console.log(++x); //(1) 6
console.log(x++); //(2) 6

function fn() {
    console.log(x); //(3) undefined
    x += 10;

    console.log(x); //(4) NaN
    console.log(typeof x); //(5) number
    var x = 13;
    console.log(x); //(6) 13
}

fn();
console.log(x); //(7) 7
```
