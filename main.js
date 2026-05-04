// Task 1: Adding and Removing Elements

let fruits = ["apple", "banana", "cherry"];
fruits.push("orange"); // Add "orange" to the end
fruits.shift(); // Remove the first element
fruits.unshift("grape"); // Add "grape" to the beginning
console.log(fruits); // Output: ["grape", "banana", "cherry", "orange"]


// Task 2: Query and Access
let colors = ["red", "blue", "green", "blue", "yellow"];
let includesResult = colors.includes("blue");      // true
let firstIndex = colors.indexOf("blue");           // 1
let lastIndex = colors.lastIndexOf("blue");        // 3
let task2Result = [includesResult, firstIndex, lastIndex];
console.log(task2Result);   // [true, 1, 3]

// Task 3: Combining Arrays
let teamA = ["Alice", "Bob"];
let teamB = ["Charlie", "Diana"];

let allTeams = teamA.concat(teamB); // Combine the two arrays
allTeams.push("Eve"); // Add "Eve" to the end
console.log(allTeams); // Output: ["Alice", "Bob", "Charlie", "Diana", "Eve"]

// Task 4: Extracting and Splicing
let numbers = [10, 20, 30, 40, 50];
let middleNumbers = numbers.slice(1, 3);   // [20, 30]
numbers.splice(3, 2, 60, 70);              // remove 2 elements at index 3, insert 60 and 70
console.log("middleNumbers:", middleNumbers);
console.log("numbers:", numbers);             

// Task 5: Sorting and Reversing
let scores = [85, 70, 95, 60, 75];
scores.sort();      // [60, 70, 75, 85, 95]
scores.reverse();   // [95, 85, 75, 70, 60]
console.log(scores);