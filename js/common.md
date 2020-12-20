### Общие моменты

#### Что такое конструктор? 
Конструктор - функция, которая создает объекты, определенного типа. 
Имя конструкторая с большой буквы
Вызывается конструктор, через оператор "new"&
Подробнее [тут](https://learn.javascript.ru/constructor-new)

#### Пример конструктора?
    function User(name, age) {
        this.name = name;
        this.age = age;
        
        this.getInfo = function() {
            console.log(this.name, this.age)
        }
    }
    
    const user = new User('Ivan', 12)
    
    user.getInfo()
