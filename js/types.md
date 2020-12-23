# Типы

1. Какие типы есть в JS ?

2. Какая разница между == и === ?

**Расскажи о Symbol**
https://learn.javascript.ru/symbol


**Сравнение типов, что будет в консоли:**
    var o = {};
    var a = [];
    
    console.log(o == a); // false
    console.log(o === a);  // false
    console.log(typeof o == typeof a);  // true
    console.log(typeof o === typeof a);  // true
    console.log(null === null); // true
    console.log(NaN === NaN); // false
   
**Разница между var и let**

    var a = 1
    var a = 5 // Не будет ошибки, a = 5
    
    
    let a = 1
    let a = 5 // будет ошибка

**Как можно сделать не изменяемым свойство объекта - ivan?**

    const foo = {
        age: 1,
        name: 'Ivan'
    }
    
    // Решение
    Object.defineProperty(foo, 'name', {
        value: 'Masha',
        writable: false,
        configurable: false,
    })
    
[Подробней тут](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)