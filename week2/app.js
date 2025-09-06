// Shallow Equality Example
let student1 = {
    id: 101,
    name: "Jaidee",
    major: "Computer Science"
}

let student2 = {
    id: 101,
    name: "Meejai",
    major: "Computer Science"
}

function shallowEquality(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false;
        }
    }

    return true;
}

console.log(shallowEquality(student1, student2));
