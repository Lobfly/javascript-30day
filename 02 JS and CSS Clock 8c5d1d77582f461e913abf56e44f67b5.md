# 02.JS and CSS Clock

Created: September 3, 2021 9:25 AM

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JS + CSS Clock</title>
</head>
<body>

    <div class="clock">
      <div class="clock-face">
        <div class="hand hour-hand animation"></div>
        <div class="hand min-hand animation"></div>
        <div class="hand second-hand animation"></div>
      </div>
    </div>

  <style>
    html {
      background: #018DED url(https://unsplash.it/1500/1000?image=881&blur=5);
      background-size: cover;
      font-family: 'helvetica neue';
      text-align: center;
      font-size: 10px;
    }

    body {
      margin: 0;
      font-size: 2rem;
      display: flex;
      flex: 1;
      min-height: 100vh;
      align-items: center;
    }

    .clock {
      width: 30rem;
      height: 30rem;
      border: 20px solid white;
      border-radius: 50%;
      margin: 50px auto;
      position: relative;
      padding: 2rem;
      box-shadow:
        0 0 0 4px rgba(0,0,0,0.1),
        inset 0 0 0 3px #EFEFEF,
        inset 0 0 10px black,
        0 0 10px rgba(0,0,0,0.2);
    }

    .clock-face {
      position: relative;
      width: 100%;
      height: 100%;
      transform: translateY(-3px); /* account for the height of the clock hands */
    }

    .hand {
      width: 50%;
      height: 6px;
      background: black;
      position: absolute;
      top: 50%;
      transform: rotate(90deg);
      transform-origin: right;
      transition: 0.05s  all;
      transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
    }
  </style>
  <script>
    const secondHand = document.querySelector(".second-hand");
    const minHand = document.querySelector(".min-hand");
    const hourHand = document.querySelector(".hour-hand");
    function getTime() {
      const time = new Date();

      const second = time.getSeconds();
      const secondDegree = 360*second/60 + 90;
      secondHand.style.transform = `rotate(${secondDegree}deg)`;

      const minute = time.getMinutes();
      const minDegree = 360*minute/60 + 90;
      minHand.style.transform = `rotate(${minDegree}deg)`;

      const hour = time.getHours();
      const hourDegree = 360*hour/12 + 90; //钟是十二制的     
      hourHand.style.transform = `rotate(${hourDegree}deg)`;
      
    }
    setInterval(getTime,1000);

  </script>
</body>
</html>
```

### 知识点

- transform-origin

    [transform-origin - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)

- transition-timing-function
- Data对象

    [JavaScript Date 对象](https://www.w3school.com.cn/js/jsref_obj_date.asp)

### 待解决

如何解决59到0的那个鬼畜动画

JS and CSS Clock