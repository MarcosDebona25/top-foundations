const findTheOldest = function (arrayObjs) {
    arrayObjs.forEach(obj => {
        const fechaMuerte = obj.yearOfDeath || new Date().getFullYear();
        obj.edad = fechaMuerte - obj.yearOfBirth;
    });

    return arrayObjs.sort((a, b) => (-(a.edad - b.edad)))[0];
};

// Do not edit below this line
module.exports = findTheOldest;