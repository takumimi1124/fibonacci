'use strict';
function fb(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fb(n - 1) + fb(n - 2);
}

const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fb(i));
}