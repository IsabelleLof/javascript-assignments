const students6 = [
  { name: "Alice", age: 20, grades: [80, 90, 75] },
  { name: "Bob", age: 22, grades: [95, 87, 92] },
  { name: "Charlie", age: 21, grades: [70, 65, 80] },
];

function showAllTheGrades(students) {
  //let allGrades = [];
  //let averageGrades = [];
  let gradesForEachStudents = null;
  let sumOfGradesForEach = 0;
  let splitArray = [];

  students.forEach((student) => {
    gradesForEachStudents = student.grades;
    //splitArray = gradesForEachStudents / 3;
    //console.log(splitArray);

    //sumOfGradesForEach = gradesForEachStudents.join("");
    console.log(gradesForEachStudents);
    let sumGrades = 0;
    for (let i = 0; i < gradesForEachStudents.length; i++) {
        sumGrades = sumGrades + gradesForEachStudents[i];
        console.log(sumGrades);
        
    }

    // gradesForEachStudents.forEach((grades) => {
    //   sumOfGradesForEach = grades + sumOfGradesForEach;
    //   console.log(sumOfGradesForEach);

    // });
    //averageGrades = grades.concat(grades);
    //console.log(grades);
    //console.log(averageGrades);
    //allGrades = allGrades.concat(grades);
  });
  return gradesForEachStudents;
}

// function findNameInStudents() {
//   for (let i = 0; i < students6.length; i++) {
//     console.log(students6[i]);
//   }
// }

// findNameInStudents();

console.log(showAllTheGrades(students6));
