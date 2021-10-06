```javascript
  <script>
    // ## Array Cardio Day 2

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    const someResult = people.some(person=>2021-person.year >= 19)
    console.log("some:",someResult)
    // Array.prototype.every() // is everyone 19 or older?
    const everyResult = people.every(person=>2021-person.year >= 19)
    console.log("every:",everyResult)
    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    const findResult = comments.find(comment=>comment.id == 823423)     //也是根据返回值的true或false来决定结果，返回值为true则将该项返回
    console.log("find:",findResult)
    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    const index = comments.findIndex(comment=>comment.id == 823423)
    console.log("index:",index)
    //comments.splice(index,1)
    const newComments = [
      ...comments.slice(0,index),
      ...comments.slice(index+1)
    ]
    console.log("newComment:",newComments)
  </script>
```

### 相关知识点

+ some、every的用法 和filter类似
+ find、findIndex的用法
+ 扩展运算符...的使用

### 知识点总结

+ some：数组里面若至少存在一项使得返回值为true，则some返回true
+ every：数组里面若每一项都能使得返回值为true，则some返回true

+ find：根据返回值的true或false来决定是否返回，若为true则**将该项返回**（不是返回布尔值）
+ findIndex：根据返回值的true或false来决定是否返回，若为true则将该项的index返回

+ slice只有一个参数的情况：则默认将第二个参数设置为数组长度