const arr1 = [1, 3, 5, 3, 8, 1, 12];
const arr2 = [3, 4, 5, 9, 15, 18];

function foo (data1, data2) {

}

foo(arr1, arr2) // [1, 3, 5, 8, 12, 4, 9, 15,18]

const foo => (data1, data2) {
    let exist = {};
    return data1.concat(data2).filter(x => !exist[x] ? exist[x] = true : false);
}



// function foo (data1, data2) {
// 	let arr = [...data1, ...data2];
//   console.log(arr);
//   let result = arr.filter( (el, pos) => arr.indexOf(el) === pos);
//   console.log(result);
//   return arr.filter( (el, pos) => arr.indexOf(el) === pos)
// }