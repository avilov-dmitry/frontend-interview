Не прочитанное 
https://developer.mozilla.org/ru/docs/Web/Performance/How_browsers_work
    https://habr.com/ru/post/320430/

! https://zen.yandex.ru/media/nuancesprog/pochemu-nelzia-preryvat-cikl-foreach-v-javascript-5f909bf9be60787eb9943ed9
! https://learn.javascript.ru/array-iteration
https://learn.javascript.ru/object-conversion

! https://habr.com/ru/post/463125/



MOBX
HTTP / HTTP2

https://learn.javascript.ru/proxy

копирование объектов - https://learn.javascript.ru/object-copy

https://yandex.ru/turbo/internet-technologies.ru/s/articles/zhiznennyy-cikl-stranicy.html

! https://learn.javascript.ru/generator


! https://www.html5rocks.com/ru/tutorials/internals/howbrowserswork/

! https://learn.javascript.ru/closures

! https://learn.javascript.ru/event-loop

https://medium.com/nuances-of-programming/%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%B2%D0%BE%D0%B5-%D1%81%D0%BB%D0%BE%D0%B2%D0%BE-this-%D0%B8-%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BA%D1%81%D1%82-%D0%B2-javascript-6ff1561f64f5



Есть матрица размерностью n * m.
Необходимо заполнить матрицу случайными значениями от 0 до 1000,
но так, чтобы каждое число в матрице было уникальным.
Чтобы не придумывать свою функцию-генератор, у нас уже есть в языке функция rand(),
которая возвращает случайное значение от 0 до 1000

[
    [1, 2, 3],
    [11, 12, 13],
    [111, 112, 113]
    ]


const getUniq = (result) => {
    const num = rand();
    if(!result[num]) {
        result[num] = true;
        return num;
    }
    return getUniq(result)
}

const matrix = (n, m) => {
    const temp = {};
    const result = new Array(n).fill(0).map(() => {
        return new Array(m).fill(0).map(() => {
            return getUniq(temp)
        })
    })
}



// one(plus(two())) === 3
// two(plus(one())) === 3

// one(minus(two())) === -1
// six(plus(three()) === 9
// nine(divide(three())) === 3

const two = () => 2;

const plus = (n) => '+' + n;

const one = (str) => {
    const second = Number(str.slice(1));
    
    if(str.includes('-') {
        return 1 - second;
    }
    return 1 + second;
}

const plus = createOperator('+') // (args: any) => number 
const minus = createOperator('-')

const one = fabricNumber(1)
const two = fabricNumber(2) // (args: any) => number

// +, -

const createOperator = (operator) => {
    if(operator === '+') {
            return (value) => (value2) => value + value2
    } else if(operator === '-') {
        return (value) => (value2) => value - value2
    }
}

const fabricNumber = (t = 0) => {
    return (args) => {
        return args ? args(t) : t
    }
}
