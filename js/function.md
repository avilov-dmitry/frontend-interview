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