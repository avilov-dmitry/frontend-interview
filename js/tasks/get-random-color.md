Напиши функцию получения случайного цвета в hex формате #ffffff

```js
function getRandomColor() {
    const getHex = () => Math.floor(Math.random() * 256).toString();

    const red = getHex();
    const green = getHex();
    const blue = getHex();

    return `#${red}${green}${blue}`;
}

console.log(getRandomColor());
```