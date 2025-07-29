// Student Grade Calculator

// Function to calculate average
function calculateAverage(marks) {
    let sum = 0;
    for (let mark of marks) {
        sum += mark;
    }
    return sum / marks.length;
}

// Function to assign grade based on average
function assignGrade(avg) {
    if (avg >= 90) return "A";
    else if (avg >= 75) return "B";
    else if (avg >= 60) return "C";
    else if (avg >= 40) return "D";
    else return "F";
}

// Function to calculate and display student result
function studentResult(student) {
    let avg = calculateAverage(student.marks);
    let grade = assignGrade(avg);
    console.log(`Student: ${student.name}`);
    console.log(`Average Marks: ${avg.toFixed(2)}`);
    console.log(`Grade: ${grade}`);
    console.log("--------------------------");
}

// Array of student objects
let students = [
    { name: "Alice", marks: [85, 92, 78, 88, 90] },
    { name: "Bob", marks: [60, 55, 70, 68, 72] },
    { name: "Charlie", marks: [95, 98, 92, 96, 94] },
    { name: "David", marks: [35, 40, 45, 50, 38] }
];

// Loop through each student and display result
for (let student of students) {
    studentResult(student);
}
