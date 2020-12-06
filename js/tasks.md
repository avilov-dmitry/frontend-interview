# Задачи по JS

1. Дана строка, состоящая из букв A-Z: AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
Нужно написать функцию RLE, которая на выходе даст строку вида: A4B3C2XYZD4E3F3A6B28
Пояснения:
    * Если символ встречается 1 раз, он остается без изменений;
    * Если символ повторяется более 1 раза, к нему добавляется количество повторений.
```js
function countLetters(str) {
  let result = '';
  let lastLetter = '';
  let count = 1;
  
  for(let i = 0; i < str.length; i++) {
    if (i === 0) {
      lastLetter = str[i];
    } else {
      if(lastLetter !== str[i]) {
        result += lastLetter + (count !== 1 ? count : '');
        lastLetter = str[i];
        count = 1;
      } else {
         count += 1;
      }
    }
  }
  return result + lastLetter + (count !== 1 ?  count : '');
}

console.log(countLetters('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'));
```

2. Нужно перевернуть число
```js
function revertNumber(num, rest=0) {
    if(!num) {
        return rest
    }
    return revertNumber(Math.floor(num / 10), rest * 10 + (num % 10))
}
revertNumber(120345789);
```