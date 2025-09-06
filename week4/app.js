
const students = [
  { id: 1, name: "Alice", score: 85 },
  { id: 2, name: "Bob", score: 72 },
  { id: 3, name: "Charlie", score: 90 },
  { id: 4, name: "David", score: 60 },
  { id: 5, name: "Eve", score: 45 }
];


const withGrades = students.map(student => {
  let grade = "F";
  if (student.score >= 80) grade = "A";
  else if (student.score >= 70) grade = "B";
  else if (student.score >= 60) grade = "C";
  else grade = "F";

  return { ...student, grade };
});

console.log("Students with Grades:", withGrades);


const gradeAStudents = withGrades.filter(s => s.grade === "A");
console.log(" Grade A Students:", gradeAStudents);


const averageScore = withGrades.reduce((acc, s) => acc + s.score, 0) / withGrades.length;
console.log(" Average Score:", averageScore);

console.log("All Students:");
withGrades.forEach(s => console.log(`- ${s.name} (${s.grade})`));


const hasFail = withGrades.some(s => s.score < 50);
console.log(hasFail);
