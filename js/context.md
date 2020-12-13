
```js
let square = {
  side: 5,
  area() {
    return this.side * this.side
  },
  perimeter: () => this.side * 4
}

console.log(square.area());
console.log(square.perimeter());

// 25
// NaN

```


```js
function foo() {
  console.log(this);
}
function doFoo(fn) {
  fn();
}
var a = { foo };
doFoo(a.foo)

// window
```


```js
function foo() {
  console.log(this)
}

foo.call(1)
foo.call(false)
foo.call('привет')

// [Number: 1] [[PrimitiveValue]]
// [Boolean: false] [[PrimitiveValue]]
// [String: 'привет'] [[PrimitiveValue]]
```