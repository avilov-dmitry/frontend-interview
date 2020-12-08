# Типы

1. Какие типы есть в JS ?

2. Какая разница между == и === ?

3. Сравнение типов, что будет в консоли:
    ```js
    var o = {};
    var a = [];
    
    console.log(o == a); // false
    console.log(o === a);  // false
    console.log(typeof o == typeof a);  // true
    console.log(typeof o === typeof a);  // true
    console.log(null === null); // true
    console.log(NaN === NaN); // false
    ```
   
4. Symbol - https://learn.javascript.ru/symbol