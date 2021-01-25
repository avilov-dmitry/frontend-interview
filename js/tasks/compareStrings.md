Две строки, проверить, что одну из другой можно получить не более чем одной заменой, вставкой или удалением одного символа.

// aaa aba => true
// aaa bbb => false
// aab ab => true

```
function compareStrings(str1, str2) {
  if(str1.length - str2.length > 1) {
    return false
  }
  
  if(str2.length - str1.length > 1) {
    return false
  }
  
  let amountError = 0
  
  for(let i = 0; i< Math.max(str1.length, str2.length); i++){
    if(str1[i] !== str2[i]) {
      amountError +=1;
      
      if(str1.slice(0, i) + str1.slice(i + 1) === str2) {
        return true
      }
      
      if(str2.slice(0, i) + str2.slice(i + 1) === str1) {
        return true
      }
    }
  }
  
  if(amountError > 1) {
    return false
  }
    
  return true
}

console.log("Удаление")
console.log(checkIs('asdasd', 'sdasd'), true) 
console.log(checkIs('asdasd', 'asdsd'), true) 
console.log(checkIs('asdasd', 'asdas'), true) 

console.log("вставка")
console.log(checkIs('asdasd', 'aasdasd'), true) 
console.log(checkIs('asdasd', 'asdfasd'), true) 
console.log(checkIs('asdasd', 'asdasdd'), true) 

console.log("замена")
console.log(checkIs('asdasd', 'qsdasd'), true) 
console.log(checkIs('asdasd', 'asdrsd'), true) 
console.log(checkIs('asdasd', 'asdase'), true) 

console.log(checkIs('asdasd', 'bsdasda'), false) 
console.log(checkIs('asdasd', 'asdasba'), false) 
console.log(checkIs('asdasd', 'assasb'), false)

```