import m from './api.js';
import sum  from './sum.js';   // 写路径，找不到就会去node_modules中找

const data = m.api();
const a = m.handle(data, 'a');
const b = m.handle(data, 'b');
const c = sum(a, b);

console.log(c);
console.log(m.x);
m.x = 2;
console.log(m.x);
console.log(m.getX());