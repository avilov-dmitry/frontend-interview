Реализовать [throttle](https://learn.javascript.ru/task/throttle)

```js
function throttle(foo, ms) {
  let isThrottle = false;
  let lastArgs = null;
  let lastThis = null;

  return function () {
    if(isThrottle) {
      // Сохраняем последние аргументы и контекст
      lastArgs = arguments;
      lastThis = this;
      return
    }

    foo.apply(this, arguments);
    isThrottle = true;

    setTimeout(() => {
      isThrottle = false;

      if(lastArgs) {
        foo.apply(lastThis, lastArgs);
        lastArgs = null;
        lastThis = null;
      }
    }, ms)
  }
}

const t = throttle(console.log, 1000)

t(1); // показывает 1
t(2); // (ограничение, 1000 мс ещё нет)
t(3); // (ограничение, 1000 мс ещё нет)
setTimeout(()=> t(5), 1500);
t(4); // (ограничение, 1000 мс ещё нет)
t(6);

```