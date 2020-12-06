# Функции

1. Какие есть способы объявления функций.
    [Подробнее здесь](https://learn.javascript.ru/function-declaration-expression)
    ```js
    // Стрелочные функции:
   const fooArrow = () => {}
   
   // function expression - функциональное выражение
   const fooExpression = function () {}
   
   // function declaration
   function fooDeclaration () {}
   
   // коструктор new Function
   const fooConstructor = new Function(); 
    ```
    
2. Что будет в консоли:
    ```js
    function foo () {
    return Array.from(arguments).reduce((result, next) => {
            return result + next
        }, 0)
     };
     
     console.log(foo(1, 3, 5, 10)); // 19
     console.log(foo(2, 5, 10, 20, 30)); //67
     ```
   
3. Реализовать функцию суммирующую аргументы 
    [Подробнее тут](https://learn.javascript.ru/task/sum-many-brackets)
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
   ```