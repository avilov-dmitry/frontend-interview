Реализовать [debounce](https://learn.javascript.ru/task/debounce)

```js
function debounce(foo, ms) {
    let  isWork = false;
    
    return function wrapper() {
        if (isWork) {
            return    
        }

        foo.apply(this, arguments);
        isWork = true;

        setTimeout(() => {
            isWork = false;
        }, ms)
    }
}

let f = debounce(console.log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

f(6);

```