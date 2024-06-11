"use strict";
function strings(type) {
    if (typeof type === 'string') {
        return type;
    }
    else {
        for (let i = 0; i < type.length; i++) {
            console.log(type[i]);
        }
    }
}
console.log(strings('hello'));
strings(['hello', 'my', 'name', 'is', 'Son']);
