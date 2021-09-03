# 03.CSS Variables

Created: September 4, 2021 2:28 AM

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Scoped CSS Variables and JS</title>
</head>
<body>
  <h2>Update CSS Variables with <span class='hl'>JS</span></h2>

  <div class="controls">
    <label for="spacing">Spacing:</label>
    <input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">

    <label for="blur">Blur:</label>
    <input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">

    <label for="base">Base Color</label>
    <input id="base" type="color" name="base" value="#ffc600" data-sizing="">
  </div>

  <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500">

  <style>

    :root {
      --spacing: 10px;
      --blur: 2px;
      --base: #f1d059;
    }

    body {
      text-align: center;
      background: #193549;
      color: white;
      font-family: 'helvetica neue', sans-serif;
      font-weight: 100;
      font-size: 50px;
    }

    .controls {
      margin-bottom: 50px;
    }

    input {
      width: 100px;
    }
    
    img {
      background-color: var(--base);
      filter: blur(var(--blur));
      padding: var(--spacing);
    }

    .hl {
      color: var(--base);
    }
  </style>

  <script>
    const inputs = document.querySelectorAll("input");
    function changeData() {
      document.documentElement.style.setProperty(`--${this.name}`,`${this.value}${this.dataset.sizing}`);
    }
    inputs.forEach(input=>{input.addEventListener('change',changeData)})
    inputs.forEach(input=>{input.addEventListener('mousemove',changeData)})
  </script>

</body>
</html>
```

### 涉及特性

- css变量

[使用CSS自定义属性（变量） - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)

- document.documentElement
- setProperty

[CSSStyleDeclaration.setProperty() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty)

- dataset

[HTMLElement.dataset - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)

- :root根伪类

### 基础知识

- addEventListener中的函数不需要传参，this指向的就是被监听的那个属性
- NodeList 和 Array 的区别：

    NodeList有着一些和Array一样的基本属性和方法，但不完全是Array

    NodeList就不能使用push、pop、shift、unshift等数组原生的方法

- dataset：

    dataset是DOM元素的一个属性，其值是一个对象，里面包含着“data-自定义属性”的“名-值”对

- :root根伪类:这个css选择器匹配的是html标签，常用于声明css自定义变量
- document.documentElement：

    返回html文档的根元素html标签，用该方法在js中获取html标签

- setProperty：

    用来设置\添加css描述对象的css属性

    style.setProperty(“属性名”,"属性值");

### 操作过程

1. 在根标签html中添加css变量
2. 在img的css样式中使用css变量，这样通过改变css变量，就能改变img的样式
3. 在js中获取到input的value值等属性，给input都添加上事件监听器，监听器的作用为：

    当input的value改变时，赋值给对应的css变量，即可实现页面响应效果

整个流程是：

页面—>js—>css—>页面

### 总结

由这个例子可以看到css变量配合js使用的具体操作，在以后的css变量使用中大体框架应该都和这个差不多，其中涉及特性里面的相关知识点要熟练掌握