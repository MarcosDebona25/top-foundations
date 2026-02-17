/* Map to names
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names. */

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

const f1 = (array) => array.map(element => element.name);
let arrayResult = f1(users);

console.log("==========");
console.log(arrayResult);


/* Map to objects
You have an array of user objects, each one has name, surname and id.
Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname. */

let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users2 = [john2, pete2, mary2];

const f2 = (arrayObjs) => arrayObjs.map(element => ({ id: element.id, fullName: element.name + " " + element.surname }));
let usersMapped = f2(users2);

console.log("==========");
console.log(usersMapped);


/* Sort users by age
Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age. */

let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 28 };

let arr = [pete3, john3, mary3];

sortByAge(arr);

function sortByAge(arrayObjs) {
    return arrayObjs.sort((a, b) => a.age - b.age);
}

// now: [john, mary, pete]
console.log("==========");
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete

/* Get average age
Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
The formula for the average is (age1 + age2 + ... + ageN) / N. */

let john4 = { name: "John", age: 25 };
let pete4 = { name: "Pete", age: 30 };
let mary4 = { name: "Mary", age: 29 };

let arr4 = [john4, pete4, mary4];

function getAverageAge(arrObjs) {
    const n = arrObjs.length;
    let avg = 0;
    for (let obj of arrObjs) {
        avg += obj.age
    }
    return avg / n;
}

console.log("==========");
console.log(getAverageAge(arr4)); // (25 + 30 + 29) / 3 = 28


/* Create keyed object from array
Let’s say we received an array of users in the form {id:..., name:..., age:... }.
Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values. */

let users5 = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

function groupById(arrayObjs) {
    let newObj = {};
    for (obj of arrayObjs) {
        let keyValue = obj.id;
        newObj[keyValue] = obj;
    }
    
    return newObj
}

let usersById = groupById(users5);

console.log("==========");
console.log(usersById);