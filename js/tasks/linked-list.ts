class NodeList {
    constructor(args) {
      // this.head = new Node(value);
      
      this.head = args.reduceRight((result, value, index) => {
        if(index === args.length - 1) {
          return {
            value,
            index: null
          }
        } else {
          return {
            value,
            index: result
          }
        }
      }, {})
    }
    
    add = (newValue) => {
      const addNewItem = (obj, value) => {
        if(obj.index) {
          addNewItem(obj.index, value)
        } else {
          obj.index = {
            value,
            index: null
          }
        }
      }
      
      addNewItem(this.head, newValue)
    }
    
    print = () => {
      let result = '';
      
      const getString = (obj) => {
        if(obj.index) {
          result = result ? `${result}, ${obj.value}` : obj.value
          return getString(obj.index)
        } else {
          return `${result}, ${obj.value}`
        }
      }
      
      return getString(this.head)
    }
  }
  
  const inputArg = [1, 2, 3, 4, 5, 6, 7, 8];
  const nodeList = new NodeList(inputArg);
  
  nodeList.add(9);
  console.log(nodeList.print()) // 1, 2, 3, 4, 5, 6, 7, 8, 9



  ////////////////////////////////////////////////////




function MyPromise(callback) {
    this.lastArgument;
    this.lastError;
    this.isResolved = false;
    this.queue = []
    
    this.then = function(callbackThen) {
      if(this.isResolved) {
        if(this.queue.length) {
          isResolved = false
          this.queue.shift()(this.lastArgument)
        }
        try {
          this.lastArgument = callbackThen(this.lastArgument)
        } catch(error){
          this.lastError = error
        }
      }
      this.queue.push(callbackThen)
      
      return this
    }
    
    this.catch = function(catchCallback) {
      if(this.lastError) {
        try {
          this.lastArgument = catchCallback(this.lastError);
          this.lastError = null;
        } catch(error){
          this.lastError = error
        }
      }
      return this;
    }
    
    this.resolve = function(ars) {
      isResolved = true;
      return this
    }
    
    this.reject = function(args) {
      return this
    }
    
    this.finally = function(funallyCallback) {
      funallyCallback(this.lastArgument)
    }
    
    callback(this.resolve, this.reject)
  }
  
  //2
   new MyPromise((res)=>{
    setTimeout(()=>{
         res();
       }, 2000);
   }).then(()=>{
    console.log('1 -> ');
   })
  
   //1
   new MyPromise((res)=>{
       setTimeout(()=>{
         res();
       }, 1000);
   }).then(()=>{
     console.log('2 -> none');
   })
  
   //3
   new MyPromise((res)=>{
       setTimeout(()=>{
         res(10);
       }, 3000);
   }).then((val)=>{
     console.log('3 -> ', val);
     return val + 10;
   }).then((val2) => {
     console.log('3 --> ', val2);
   }).finally(() => {
     console.log('3 --> finally');
   })
  
   //4
   new MyPromise((_, rej)=>{
    setTimeout(()=>{
      rej(32);
    }, 4000);
  })
    .then(()=>{
      console.log('never fires');
    })
    .catch((err) => {
    console.log('4 -> error', err);
  }).finally(()=>{
    console.log('4 -> finally');
  })
  // 
  // // 5
   // const plan = new MyPromise((res)=>{
     // setTimeout(()=>{
       // res(100);
     // }, 5000);
   // })
   // .then((res)=>{
       // console.log('5 -> never fires', res);
     // })
   // .catch((err) => {
     // console.log('5 -> error', err);
   // }).finally(()=>{
     // console.log('5 -> finally');
   // });
  
   // setTimeout(()=> {
     // plan.cancel();
   // }, 2500);