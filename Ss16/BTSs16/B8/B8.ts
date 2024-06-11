type AnyObject = { [key: string]: any };

function mergeObjects<T extends AnyObject, U extends AnyObject>(obj1: T, obj2: U): T & U {
    const merged: any = {};

    for (const key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                merged[key] = mergeObjects(obj1[key], obj2[key]);
            } else {
                merged[key] = obj2.hasOwnProperty(key) ? obj2[key] : obj1[key];
            }
        }
    }

    for (const key in obj2) {
        if (obj2.hasOwnProperty(key) && !merged.hasOwnProperty(key)) {
            merged[key] = obj2[key];
        }
    }

    return merged;
}

let object1 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4]
    },
};

let object2 = {
    a: 5,
    b: {
        c: 6,
        d: [7, 8],
        e: {
            f: 9,
        },
    },
    g: 10,
};

const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject);
