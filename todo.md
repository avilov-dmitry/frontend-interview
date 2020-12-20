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


// авито

function fn() {
  console.log('hello'); // 1

  setTimeout(function() {
    console.log('setTimeout1'); // 5
  }, 0);

  new Promise(function(resolve) {
    resolve();
  }).then(function() {
    console.log('then1'); // 3
  }).then(function() {
    console.log('then2'); // 4
  });

  console.log('bye'); // 2
}

fn()


/////


'use strict';

x = 5;

console.log(++x); //(1) 6
console.log(x++); //(2) 6

function fn() {
    console.log(x); //(3) undefined
    x += 10;

    console.log(x); //(4) NaN / 10
    console.log(typeof x); //(5) number
    let x = 13;
    console.log(x); //(6) 13
}

fn();
console.log(x); //(7) 7


/////////

//A = [3, 4, 5, 0, 0, 2, 3, 0, 7] -> A = [3, 4, 5, 2, 3, 7,) 0, 0, 0]

function foo (arr) {
    let zeroIndex = 0;
  
     arr.forEach((i, index) => {
      if(i === 0) {
        zeroIndex += 1 ;
      }
      if(index > zeroIndex) {
        arr[index-zeroIndex] = i
      }
    })
    
    return arr
}


//////


const t = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

function foo(matrix) {
	return matrix.reduce((result, row, index) => {
        if(result.length === 0) {
            row.forEach(i => result.push([i]))
        } 
        if(index > 0) {
            row.forEach((i, rowIndex) => {
            if(result[index + rowIndex]) {
                result[index + rowIndex].unshift(i)
                    } else {
                result.push([i])
                }})
        }    
    return result
	}, [])
} 

console.log(foo(t))


//////


foo([3, 4, 5, 0, 0, 2, 3, 0, 7])



]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

1. 

 1 2 3
 4 5 6
 7 8 9

 1
 4 2
 7 5 3
 8 6
 9
 
function foo(matrix) {
	return matrix.reduce((result, row, index) => {
  	if(result.length === 0) {
    	row.forEach(i => result.push([i]))
    } 
    if(index > 0) {
    	row.forEach((i, rowIndex) => {
      	if(result[index + rowIndex]) {
        	result[index + rowIndex].push(i)
				} else {
        	result.push([i])
			})
    }    
    return result.map(i => i.reverse())
	}, [])
} 

[
[1],
[4, 2], 
[5, 3],
[6]
]

2.

A = [3, 4, 5, 0, 0, 2, 3, 0, 7] -> A = [3, 4, 5, 2, 3, 7,) 0, 0, 0]


function foo (arr) {
	let zeroIndex = null;
  
	return arr.forEach((i, index) => {
  	if(i === 0) {
    	arr.push(i)
      delete arr[index]
    }
	})
}

]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

1. 

 1 2 3
 4 5 6
 7 8 9

 1
 4 2
 7 5 3
 8 6
 9
 
function foo(matrix) {
    return matrix.reduce((result, row, index) => {
      if(result.length === 0) {
        row.forEach(i => result.push([i]))
    } 
    if(index > 0) {
        row.forEach((i, rowIndex) => {
          if(result[index + rowIndex]) {
            result[index + rowIndex].push(i)
                } else {
            result.push([i])
            })
    }    
    return result.map(i => i.reverse())
    }, [])
} 

[
[1],
[4, 2], 
[5, 3],
[6]
]

2.

A = [3, 4, 5, 0, 0, 2, 3, 0, 7] -> A = [3, 4, 5, 2, 3, 7,) 0, 0, 0]
B = [0, 0, 0, 0, .., 0, 1]


function foo (arr) {
    let zeroIndex = 0;
    let count = 0
  
     arr.forEach((i, index) => {
      if(i === 0) {
        zeroIndex += 1 ;
      }
      if(index > zeroIndex) {
        arr[index-zeroIndex] = i
        count += 1
      }
    })
    
    return arr, count
}

]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]


/**
 * Написать функцию `$`, чтобы можно было вызывать методы, как показано ниже.
 *
 */
const $node = $('.js-node');

$node
    .addClass('node')
    .toggleClass('item')
    .removeClass('node')
    .css({
        color: 'red',
        paddingTop: '10px'
    })
    .html('<li>hello</li>');


function $(selector) {
	const element = document.querySelector(selector);
  
  element.addClass = function(className) {
    element.classname = `${element.classname} ${className}`;
		
    return this 
	}
  
  element.html = function(htmlString) {
    element.innerHTML = htmlString;
		
    return this 
	}
  
 	return element 
}



const elements = document.querySelectorAll('*');

elements.forEach(element => {
  if(element.tagName === 'body'){
    element.addEventListener('click', (e) => {
      if(e.currentTarget.tagName = 'a') {
        e.preventDefault();
      	console.log(e.target.href)
			}
		}, {
      capture: true
    })
  }
});

function fn() {
  console.log('hello'); // 1

  setTimeout(function() {
    console.log('setTimeout1'); // 5
  }, 0);

  new Promise(function(resolve) {
    resolve();
  }).then(function() {
    console.log('then1'); // 3
  }).then(function() {
    console.log('then2'); // 4
  });

  console.log('bye'); // 2
}

fn();













'use strict';

x = 5;

console.log(++x); //(1) 6
console.log(x++); //(2) 6

function fn() {
    console.log(x); //(3) undefined
    x += 10;

    console.log(x); //(4) NaN / 10
    console.log(typeof x); //(5) number
    var x = 13;
    console.log(x); //(6) 13
}

fn();
console.log(x); //(7) 7


]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

import React from 'react';
const userEndpoint = 'https://api.github.com/users'
// e.g.: fetch(`${userEndpoint}/defunkt`)
 
const Github = (props) => {
  const [user, setUser] = useState(null)
  // finish this
  useEffect(() => {
    const signal = new Abort();
    fetch(`${userEndpoint}/${props.username}`, signal)
      .then(resp => resp.json())
      .then((u) => {
        setUser(u)
      });
      
    return signal
  }, [])
  
  return props.children(user)
}
 
const Loading = () => {
  return 'Loading...'
}
 
const User = ({ info }) => {
  return <pre>{JSON.stringify(info, null, 2)}</pre>
}
 
const App = () => {
  return <Github username='foobar'>
    {(user) => user === null ? <Loading /> : <User info={user} />}
  </Github>
}
 
export default App;




////////////////////////

const userService = {
    currentFilter: 'active',
    users: [
        {name: 'Alex', status: 'active'},
        {name: 'Nick', status: 'deleted'},
    ],
    getFilteredUsers: function() {
  
        const foo = function(user) {
            return user.status === this.currentFilter;
        };
        return this.users.filter(foo.bind(this));
    }
};
 
console.log(userService.getFilteredUsers());
////////////////////////


function Person(name, lastName) {
  const person = {
    name,
    lastName,
    fullName: function() {
      return `${this.name} ${this.lastName}`
    }
  }
  
  return person
}

const person = new Person('Alex', 'Petrov');
console.log(person.fullName()); // 'Alex Petrov'
////////////////////////


https://learn.javascript.ru/modifying-document

https://habr.com/ru/company/dataart/blog/304138/