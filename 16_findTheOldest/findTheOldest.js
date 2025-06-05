const findTheOldest = function(arr) {
    return arr.reduce((oldest, curr) => {
        oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        currentAge = getAge(curr.yearOfDeath, curr.yearOfBirth);
        
        return oldestAge > currentAge ? oldest : curr;
    })
};

function getAge(death, birth) {
    if (!death) {
    death = new Date().getFullYear();
  }
    return death-birth
}

// Do not edit below this line
module.exports = findTheOldest;
