# Вопросы по прототипам

1. Что будет в консоли и почему:
    ```js
    console.log( new Date() );
    console.log( +new Date() );
    ``` 

2. Нужно сделать, чтобы отработал console.log
    https://learn.javascript.ru/object-conversion
    https://learn.javascript.ru/object-toprimitive
    ```js
    const t = 1;
    console.log(t.count(2)) // 3
    ```
    
    Решение
    ```js
    Number.prototype.count = function (num) {
        if(num) {
            return this.valueOf() + num
        }
        return this.valueOf()
    }
    
    const t = 1;
    
    console.log(t.count())
    console.log(t.count(2))
    ```
