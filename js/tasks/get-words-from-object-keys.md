Нужно написать функцию, которая сложит предложение из букв в key.
value массив с расположением букв.

```js
const input = {
  ' ': [5],
  d: [10],
  e: [1],
  H: [0],
  l: [2,3,9],
  o: [4,7],
  r: [8],
  w: [6]
}
const buildString = (m) => {
  const result = []
  Object.entries(m).forEach(([key, value]) => {
    value.forEach(index => result[index] = key)
  });

  return result.join('');
}

console.log(buildString(input));
```