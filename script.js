
let studentName = "Tanmay";
let marks = 78;
let attendance = 80;
let department = "CS";

console.log("Student Name:", studentName);
console.log("Marks:", marks);
console.log("Attendance:", attendance + "%");


if (marks >= 35) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}


if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 75) {
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: B");
} else if (marks >= 35) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}

switch (department) {
    case "CS":
        console.log("Department: Computer Science");
        break;

    case "IT":
        console.log("Department: Information Technology");
        break;

    case "CE":
        console.log("Department: Computer Engineering");
        break;

    case "ME":
        console.log("Department: Mechanical Engineering");
        break;

    default:
        console.log("Department: Invalid");
}

let eligibility =
    attendance >= 75 ? "Eligible for Exam" : "Not Eligible for Exam";

console.log("Attendance Status:", eligibility);

console.log("\nFor Loop (1 to 20)");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}


console.log("\nWhile Loop (Even Numbers)");
let num = 2;

while (num <= 20) {
    console.log(num);
    num += 2;
}


console.log("\nDo-While Loop (Reverse Order)");
let j = 10;

do {
    console.log(j);
    j--;
} while (j >= 1);


console.log("\nBreak Example");
for (let k = 1; k <= 20; k++) {
    if (k === 15) {
        break;
    }
    console.log(k);
}



console.log("\nContinue Example");
for (let m = 1; m <= 20; m++) {
    if (m % 3 === 0) {
        continue;
    }
    console.log(m);
}