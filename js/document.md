### Документ

1. Отключить переход у ссылок
    ```js
    const all = document.querySelectorAll('*');
    function disableLinks () { }
    ```
   
   
elements.forEach(element => {
  if(element.tagName === 'body'){
    element.addEventListener('click', (e) => {
      if(e.currentTarget.tagName = 'a') { // currentTarget не подойдет target
        e.preventDefault();
      	console.log(e.target.href)
			}
		}, {
      capture: true  //  не нужно
    })
  }
});


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
		
    return element 
	}
  
  element.html = function(htmlString) {
    element.innerHTML = htmlString;
		
    return element 
	}
  
 	return element 
}
