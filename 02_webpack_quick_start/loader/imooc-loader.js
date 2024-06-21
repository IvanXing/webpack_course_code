// const REG = /<script>(.*)<\/script>/;   //匹配两个script标签中的部分
// \s匹配空字符 \S匹配非空字符
const REG = /<script>([\s\S]+?)<\/script>/;   

module.exports = function(source) {
    console.log('== imooc-loader running ==', source);
    const __source = source.match(REG);
    console.log(__source);
    return __source && __source[1] ? __source[1] : source;
};


// require.main 代表的是 当前模块是作为主模块运行 require.main就是true，并且会返回module
// 如果 node ./loader/imooc-loader.js 执行，imooc才是主模块
if (require.main === module) {
    const source = `<script>
        export default {
            a: 1,
            b: 2
        }
    </script>`;
    const match = source.match(REG);
    console.log(match);

    console.log('------------------');
    console.log(' ab'.match(/\S/));   //[ 'a', index: 1, input: ' ab', groups: undefined ]
    console.log('------------------');
    console.log(' '.match(/\s/));   // [ ' ', index: 0, input: ' ', groups: undefined ]
    console.log('------------------');
    console.log(' abx'.match(/\S+/));  // [ 'abx', index: 1, input: ' abx', groups: undefined ]
    console.log('------------------');
}