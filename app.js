// Fast way to check if list, or in this case array,
// contains two values which added are equal to the provided sum
var hasPairWithSum = function (data, sum) {
    var comp = [];
    var hasFound = false;
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
        super(name,age, Animal.getTypes().dog)
        this.tag = tag;
    }
}

const dog1 = new Animal('Rex', '7', Animal.getTypes().dog);
console.log(dog1);
const dog2 = new Dog('Rex', '7', 'Tag name');
console.log(dog2);