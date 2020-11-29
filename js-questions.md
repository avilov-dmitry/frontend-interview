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

3. Сравнение типов
    ```js
    // Что будет в консоли:
    var o = {};
    var a = [];
    
    console.log(o == a); // false
    console.log(o === a);  // false
    console.log(typeof o == typeof a);  // true
    console.log(typeof o === typeof a);  // true
    console.log(null === null); // true
    console.log(NaN === NaN); // false
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

#### Массивы
1. Вернуть уникальный массив(set)
    ```js
    const t = [1,2,3,3,4,5,6,5,7]
    
    console.log([... new Set(t)])
    ```
   
2. Вернуть плоский массив
    ```js
    const t = [1,[2,3,[4],5],6]
    ```
    Возможный решения:
    ```js
    // flat 
    console.log(t.flat(Infinity);
    ```
    ```js
    // Сделать функцию с рекурсией
    const foo = (arr) => {
        let result = [];
        
        arr.forEach(item => {
            if(Array.isArray(item)) {
                result = [...result, ...foo(item)]
            } else {
                result.push(item)
            }
        })
        return result;
    }
    
    foo([1,[2,3,[4],5],6,[7,[8]]]);
    ```
