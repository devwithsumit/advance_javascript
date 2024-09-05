function objectToArray(obj) {
    return Object.entries(obj);
}

console.log(objectToArray({ name: 'Alice', age: 25 })); // Output: [['name', 'Alice'], ['age', 25]]
