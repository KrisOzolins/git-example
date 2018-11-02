console.log(12345);

// Fast way to check if list, or in this case array,
// contains two values which added are equal to the provided sum
var hasPairWithSum = function (data, sum) {
    var comp = [];
    var hasFound = false;
    data.some((element, index) => {
        console.log(index);
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