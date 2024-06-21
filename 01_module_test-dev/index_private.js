// 函数作用域 + 闭包
function test() {
    var a = 1;
    return {
        set(v) {
            a = v;
        },
        get() {
            return a;
        }
    }
}

const handle = test();
console.log(handle.get());  // 1
handle.set(2);
console.log(handle.get());  // 2