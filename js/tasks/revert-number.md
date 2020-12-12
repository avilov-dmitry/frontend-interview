Нужно перевернуть число

```js
function revertNumber(num, rest=0) {
    if(!num) {
        return rest
    }
    return revertNumber(Math.floor(num / 10), rest * 10 + (num % 10))
}
revertNumber(120345789);
```