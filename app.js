// Fast way to check if list, or in this case array,
// contains two values which added are equal to the provided sum
let hasPairWithSum = function (data, sum) {
    let comp = [];
    let hasFound = false;
    data.some((element, index) => {
        if (comp.indexOf(element) != -1) {
            hasFound = true;
            return true;
        }
        comp.push(sum - element);
    });
    return hasFound;
}

// Should return false
console.log(hasPairWithSum([1, 2, 3, 4], 8));

// Should return true
console.log(hasPairWithSum([1, 4, 4, 2], 8));

// Test example class..
class Animal {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    getAgeSentence() {
        return `${this.name} is ${this.age} years old.`;
    }

    static getTypes() {
        return {
            dog: 1,
            cat: 2,
            cat: 3,
        }
    }
}

// ..and it's subclass
class Dog extends Animal {
    constructor(name, age, tag) {
        super(name, age, Animal.getTypes().dog)
        this.tag = tag;
    }
}

const dog1 = new Animal('Rex', '7', Animal.getTypes().dog);
console.log(dog1);
const dog2 = new Dog('Rex', '7', 'Tag name');
console.log(dog2);

// Higher order array methods
let values = [12, 17, 99, 2, 8, 3, 87, 77, 92, 10, 27, 65, 33, 11];

const combinedResult = values
    .map(value => value * 2) // Multiply all values by 2
    .filter(value => value >= 50) // Get only values which are higher or equal to 50
    .sort((a, b) => a - b) // Sort asc
    .reduce((total, value) => total + value, 0); // Get the sum of all the remaining, sorted values

console.log(combinedResult);