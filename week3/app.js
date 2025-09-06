let user1 = {
    id: 1,
    name: "Jaidee",
    age: 20
}

let userUpdate = {
    age: 21,
    major: "Computer Science"
}

function mergeAndUpdate(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

let newUser = mergeAndUpdate(user1, userUpdate);
console.log(newUser);
