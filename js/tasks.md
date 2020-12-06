# Задачи по JS

```js
// Дана строка, состоящая из букв A-Z:
// AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
//
// Нужно написать функцию RLE, которая на выходе даст строку вида:
//     A4B3C2XYZD4E3F3A6B28
//
//     Пояснения:
// Если символ встречается 1 раз, он остается без изменений;
// Если символ повторяется более 1 раза, к нему добавляется количество повторений.

function countLetters(str) {
  let result = '';
  let last = '';
  let temp = 1;
  
  for(let i = 0; i < str.length; i++) {
    if (i === 0) {
      last = str[i];
    } else {
      if(last !== str[i]) {
        result +=  temp !== 1 ? last + temp : last;
        last = str[i];
        temp = 1;
      } else {
         temp = temp + 1;
      }
    }
  }
  
  return temp !== 1 ? result + last + temp : result + last;
}


console.log(countLetters('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'));
```
