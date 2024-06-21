const { api, handle } = require('./api');
const sum = require('./sum');   // 写路径，找不到就会去node_modules中找

const data = api();
const a = handle(data, 'a');
const b = handle(data, 'b');
const c = sum(a, b);

console.log(c);