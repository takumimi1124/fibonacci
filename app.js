'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,1);

function fb(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = fb(n - 1) + fb(n - 2);
    memo.set(n, value);
    return fb(n - 1) + fb(n - 2);
}

const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fb(i));
}