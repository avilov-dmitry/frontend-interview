### Events

**Как можно сотановить фазу распространения**
    
    e.stopPropagation()
    
**В чем отличие event.stopPropagation() и event.stopImmediatePropagation().**

    Если на элементе несколько обработчиков, то stopPropagation не остановит выволнение других обработчиков на этому элементе, 
    он остановит всплытие выше. stopImmediatePropagation остановит его сразу и на других обработчиках этого элементам.
    
**Как удалить обработчик события**
  
    const listener = (event) => console.log(event);
    
    document.addEventListener('click', listener)
    document.removeEventListener('click', listener)
    
[Подробней тут](https://developer.mozilla.org/ru/docs/Web/API/EventTarget/removeEventListener)
