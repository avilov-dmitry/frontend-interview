Что будет выведено в консоль?

```js
Promise.resolve(1)
  .then(x => x + 1)
  .then(x => { throw x })
  .then(x => console.log(x))
  .catch(err => console.log('err', err))
  .then(x => Promise.resolve(3))
  .catch(err => console.log('err', err))
  .then(x => console.log(x))

// err 2
// 3
```

