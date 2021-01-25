Дан массив строк, нужно сгруппировать в нем анаграммы.
Важно, что это нужно сделать максимально эффективно по памяти и времени.
Слово X является анаграммой слова Y, если оно может быть 
получено из другого перестановкой букв.
```
// вызов
groupAnagrams(['сон', 'нос', 'сорт', 'трос', 'торт', 'рост']);

// возвращает:
[
  ['сон', 'нос'],
  ['сорт', 'трос', 'рост'],
  ['торт']
]
```


``` js
function groupAnagrams(list) {
    const hash = {};

    return list.reduce((result, item, index) => {
        const clearWord = item.split().sort().join();
        
        result[clearWord] = result[clearWord] ? [...result[clearWord], item] : [item];

        if(index === list.length - 1) {
            return Object.values(result)
        }

        return result
    } , {})
}

groupAnagrams(['сон', 'нос', 'сорт', 'трос', 'торт', 'рост']);
```