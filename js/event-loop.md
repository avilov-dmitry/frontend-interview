# Event loop

1. Что будет выведено в консоль
    ```js
    const promise = () => new Promise(res => res())
    
    function testOne() {
        console.log('1')
    }
    
    async function testTwo() {
        console.log('2')
        await promise();
        console.log('3')
    }
    
    console.log('foo');
    testTwo()
    console.log('bar')
    testOne()
    
    // foo
    // 2
    // bar
    // 1
    // 3
    ```
   
 2. Что будет выведено в консоль
    ```js
    const mockPromiseRequest = () => new Promise((resolve) => {
        console.log('1');
        resolve('2');
    });
    
    const mockRequestTimer = () => new Promise((resolve => {
        setTimeout(() => {
            console.log('3');
            resolve('4');
        },0 )
    }));
    
    const syncFunction = () => console.log('5');
    
    const asyncFunction = async () => {
        console.log('6');
    
        const timerResult = await mockRequestTimer();
        const promiseResult = await mockPromiseRequest();
    
        console.log('7');
        console.log('promiseResult', promiseResult);
        console.log('timerResult', timerResult);
    };
    
    console.log('8');
    
    asyncFunction();
    syncFunction();
    
    console.log('9');
    
    // 8
    // 6
    // 5
    // 9
    // 3
    // 1
    // 7
    // promiseResult 2
    // timerResult 4
    ```
    
3. Что будет в консоли
    ```js
    let a = 10;
    
    setTimeout(() => {
      a = 15;
      console.log('timeOut', a)
    });
    
    const promise = new Promise((resolve) => {
      a = 5;
      console.log('promise', a)
      resolve(a)
    });
    
    promise.then(() => {
      a = 25;
      console.log('then', a)
    });
    
    console.log(a);
    ```