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
Возможные ответы:
* Нужно добавить bind
```js
let sayName = dog.sayName.bind(dog);
```
* Изменить объявление dog
```js
let dog = {
  name: 'doggo',
  sayName: function() {
    console.log('=== name ===', this.name);
  }
};
```


3. Задача на контекст
