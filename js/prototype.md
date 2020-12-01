# Вопросы по прототипам

1. Нужно сделать, чтобы отработал console.log
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
