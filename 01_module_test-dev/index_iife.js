(function() {
    var x = 1;
    // 调用后端接口
    function api() {
        return {
            code: 0,
            data: { a: 1, b: 2 }
        };
    };

    // 处理后端接口
    function handle(data, key) {
        return data.data[key];
    };

    // 数据运算
    function sum(a, b) {
        return a + b;
    };

    function setX(v) {
        x = v;
    }

    function getX() {
        return x;
    }

    window.__Module = {
         x,    // 返回的和作用域内定义的不是同一个了
         api,
         setX,
         getX,
         handle,
         sum
    }
}());




const m = window.__Module;

const data = m.api();
const a = m.handle(data, 'a');
const b = m.handle(data, 'b');
const c = m.sum(a, b);

console.log(c, window);
console.log(m.x);  // 1
m.x = 2;
console.log(m.x);  // 2   这个2是window_Module上挂了一个x，并不是iife中的x，新赋值的x
// 函数作用域和对象属性的区别，commonjs中也有类似问题
console.log(m.getX());  // 1
console.log(m)


// 想修改x需要调用setX()函数