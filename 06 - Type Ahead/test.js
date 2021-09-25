var a = [1,2,3];
(function(a) {
    a.pop()
}(a));
console.log(a);
//复习了下立即执行函数，没加分号会出问题