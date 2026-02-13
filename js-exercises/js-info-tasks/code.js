// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.

function camelize(str) {
    let palabras = str.toLowerCase().split("-");
    let texto = palabras[0];

    for (let i = 1; i < palabras.length; i++) {
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].slice(1);
        texto += palabras[i];
    }
    return texto;
}

console.log(`Resultado 1: ${camelize("hola-estoy-probando-que-sea-camel-case")}`);


// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.

function filterRange(arr, a, b) {
    return arr.filter(elemento => (elemento >= a && elemento <= b));
}

let arr1 = [5, 3, 8, 1];
console.log(`Resultado 2: ${filterRange(arr1, 1, 4)}`);

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.

function filterRangeInPlace(arr2, a, b) {
    for (let i = 0; i < arr2.length; i++) {
        if (!(a <= arr2[i] && arr2[i] <= b)) {
            arr2.splice(i, 1);
        }
    }
}

let arr2 = [5, 3, 8, 1];
filterRangeInPlace(arr2, 1, 4);
console.log(`Resultado 3: ${arr2}`);

// Sort in decreasing order

function ordernarDescendentemente(arreglo) {
    return arreglo.sort((a, b) => -(a - b));
}

let arr3 = [5, 2, 1, -10, 8];
console.log(`Resultado 4: ${arr3}`);

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.

function copySorted(arr) {
    let nuevoArreglo = [].concat(arr);
    return nuevoArreglo.sort((a, b) => a.localeCompare(b));
}

let arr4 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr4);
console.log(`Resultado 5: ${sorted}, sin modificar: ${arr4}` );

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// Multiple runs of shuffle may lead to different orders of elements. For instance:

function negative() {
    return Math.random() > 0.50 ? 1 : -1;
}

function shuffle(array) {
    return array.sort((a,b) => negative() * (a-b));
}

let arr5 = [1, 2, 3];

console.log(`Resultado 6: ${shuffle(arr5)}`);
console.log(`Resultado 6: ${shuffle(arr5)}`);
console.log(`Resultado 6: ${shuffle(arr5)}`);


// Create a function unique(arr) that should return an array with unique items of arr.

function onlyUnique(arr) {
    let result = [];
    for (element of arr) {
        if (arr.indexOf(element) === arr.lastIndexOf(element)) {
            result.push(element);
        } 
    }
    return result;
}   

function unique(arr) {
    let result = [];
  
    for (let i = 0; i<arr.length; i++) {
        if (!(result.includes(arr[i]))) result.push(arr[i]);
    }

    return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log(`Resultado 7: ${onlyUnique(strings)}`); // :-O
console.log(`Resultado 7: ${unique(strings)}`); // Hare, Krishna, :-O