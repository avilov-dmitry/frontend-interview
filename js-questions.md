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

5. Функции
    ```js
    function foo () {
       return Array.from(arguments).reduce((result, next) => {
           return result + next
       }, 0)
    };
    
    console.log(foo(1, 3, 5, 10)); // 19
    console.log(foo(2, 5, 10, 20, 30)); //67
    ```
   
6. Document
    ```js
    const all = document.querySelectorAll('*');
    
    function disableLinks () {
    
    }
    
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
    console.log(t.flat(Infinity)
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

3. Реализовать функцию суммирующую аргументы 
    Посмотреть можно тут - https://learn.javascript.ru/task/sum-many-brackets
    ```js
    function sum(a) {
        // Создаем переменную с суммой
        let result = a;
    
        // Создаем колбэк, который будет добавлять новый аргумент к сумме
        const callback = (b) => {
            result += b;
            return callback;
        }
    
        // Переопреденяем toString, чтобы при выводе в консоль отображалась сумма
        callback.toString = () => result;
    
        return callback;
    }
    console.log(sum(1)(2))
    console.log(sum(1)(2)(3))
    console.log(sum(5)(-1)(2))
    console.log(sum(6)(-1)(-2)(-3))
    console.log(sum(0)(1)(2)(3)(4)(5))

   
#### Event loop
1. Что будет выведено в консоль
    ```js
    const promise = () => new Promise(res => res())
    
    function testOne() {
        console.log('1')
    }
    
    async function testTwo() {
        console.log('2')
        await promise();
        console.log('3')
    }
    
    console.log('foo');
    testTwo()
    console.log('bar')
    testOne()
    
    // foo
    // 2
    // bar
    // 1
    // 3
    ```
 2. Что будет выведено в консоль
    ```js
    const mockPromiseRequest = () => new Promise((resolve) => {
        console.log('1');
        resolve('2');
    });
    
    const mockRequestTimer = () => new Promise((resolve => {
        setTimeout(() => {
            console.log('3');
            resolve('4');
        },0 )
    }));
    
    const syncFunction = () => console.log('5');
    
    const asyncFunction = async () => {
        console.log('6');
    
        const timerResult = await mockRequestTimer();
        const promiseResult = await mockPromiseRequest();
    
        console.log('7');
        console.log('promiseResult', promiseResult);
        console.log('timerResult', timerResult);
    };
    
    console.log('8');
    
    asyncFunction();
    syncFunction();
    
    console.log('9');
    
    // 8
    // 6
    // 5
    // 9
    // 3
    // 1
    // 7
    // promiseResult 2
    // timerResult 4
    ```