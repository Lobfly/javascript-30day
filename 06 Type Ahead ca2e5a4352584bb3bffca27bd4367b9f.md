# 06.Type Ahead

Created: September 25, 2021 5:23 PM

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Type Ahead 👀</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <form class="search-form">
      <input type="text" class="search" placeholder="City or State" />
      <ul class="suggestions">
        <li>Filter for a city</li>
        <li>or a state</li>
      </ul>
    </form>
    <script>
      const searchInput = document.querySelector(".search");
      const suggestions = document.querySelector(".suggestions");
      const endpoint =
        "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
      const cities = [];
      fetch(endpoint)
        .then((resolve) => resolve.json())
        .then((data) => cities.push(...data)); //这里要用扩展运算符赋值，否则数组长度是1      这里push进cities数组是异步操作，没完成时是空数组（踩坑，不要在下面直接操作cities，但是这里是用户输入文字后才执行相关函数，所以有足够时间把cities数组fetch到）
      // 正则表达式+filter过滤
      function wordMatch(keyWord, cities) {
        return cities.filter((item) => {
          const regex = new RegExp(keyWord, "gi");
          return item.city.match(regex) || item.state.match(regex);
        });
      }
      function displayWord() {
        const cityArray = wordMatch(this.value, cities);
        const html = cityArray
          .map((item) => {
            const regex = new RegExp(this.value, "gi");
            const cityName = item.city.replace(
              regex,
              `<span class="hl">${this.value}</span>`
            );
            const stateName = item.state.replace(
              regex,
              `<span class="hl">${this.value}</span>`
            );
            return ` <li>
                      <span class="name">${cityName}, ${stateName}</span>
                      <span class="population">${formatNum(item.population)}</span>
                   </li>`;
          })
          .join(""); //map返回的是一个数组，需要用join连接为一个字符串
        console.log(html);
        suggestions.innerHTML = html;
      }
      function formatNum(num) {
        //数字格式化，熟悉了slice的用法，倒序操作时用到了栈的思想
        let string = "";
        let stack = [];
        for (let i = num.length - 1; i > num.length % 3; i -= 3) {
          stack.push(num.slice(i - 2, i + 1));
        }
        while (stack.length) {
          string += stack.pop() + ",";
        }
        string = string.slice(0, string.length - 1);
        if (num.length % 3) {
          string = num.slice(0, num.length % 3) + "," + string;
        }
        return string;
      }
      searchInput.addEventListener("keyup", displayWord);
    </script>
  </body>
</html>
```

### 问题描述

通过fetch获取到城市数据，在搜索框内输入关键字，页面响应展示出城市及人口

### 相关知识点

- fetch、Promise、异步操作
- RegExp函数、正则表达式
- 数组操作方法 map forEach
- 字符串操作方法 slice replace match
- js添加html的方法

### 知识点总结

### 出现的问题