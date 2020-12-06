# Вопросы по JS


1. Вопрос на поднятие(hoisting)
    ```js
    // Что будет выведено?
    console.log(a);
    var a = 5;
    
    // Ответ: undefined
    ```
    ```js
    // Что будет если var заменить на const?
    console.log(a);
    const a = 5;
    
    // Ответ: будет ошибка
    ```

2. Задача на контекст
    ```js
    // Необходимо, чтобы этот код выводил в лог doggo, но он выводит лишь undefined.
    
    let dog = {
      name: 'doggo',
      sayName() {
        console.log('=== name ===', this.name);
      }
    };
    
    let sayName = dog.sayName;
    
    sayName();
    ```
    Ответ: Нужно добавить bind
    ```js
    let sayName = dog.sayName.bind(dog);
    ```



4. Поднятие + setTimeout
    ```js
    setTimeout(() => console.log(a), 0)
    console.log(b)
    console.log(c)
    
    var a=[];
    var b={};
    let c=9
    
    // undefined (b)
    // ошибка что не определен c
    // undefined (a)
    ```

6. Document
    ```js
    const all = document.querySelectorAll('*');
    
    function disableLinks () {
    
    }
    
    ```

```js
let a = {
   b: 1,
   c: this.b,
   d: function() { 
     console.log(this.b)
   },
}

console.log('a.b', a.b)
console.log('a.d', a.d())

setTimeout(a.d, 1000);
```


#### JSON

Что будет выведено на экран:
```js
const t = JSON.stringify({
    foo: function() {
        return 123;
    }
})
console.log(t)
```