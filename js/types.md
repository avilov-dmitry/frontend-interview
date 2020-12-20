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

5. Разница между var и let
    ```js
    var a = 1
    var a = 5 // Не будет ошибки, a = 5
    
    
    let a = 1
    let a = 5 // будет ошибка
    ```