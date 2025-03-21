function multiply(a, b) {
    if (b < 0) return -multiply(a, -b); // Handle negative numbers

    let result = 0;
    while (b > 0) {
        if (b % 2 === 1) { 
            result += a; // If b is odd, add 'a' to result
        }
        a += a; // Double 'a'
        b = Math.floor(b / 2); // Halve 'b'
    }
    return result;
}

console.log(multiply(5, 3)); // Output: 15
console.log(multiply(7, 8)); // Output: 56
console.log(multiply(-4, 6)); // Output: -24
console.log(multiply(10, -2)); // Output: -20
console.log(multiply(-3, -3)); // Output: 9
