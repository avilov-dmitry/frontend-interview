### JSON

Что будет выведено на экран:
```js
const t = JSON.stringify({
    foo: function() {
        return 123;
    }
})
console.log(t)
```