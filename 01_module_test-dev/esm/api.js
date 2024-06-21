import handle from './handle.js';

var x = 1;

function api() {
    return {
        code: 0,
        data: { a: 1, b: 2 }
    };
}

export default {
    x,
    getX() {
        return x;
    },
    api,
    handle
};