const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];


function getTopScoringStudents(students) {
  return students
    .filter(function(student) {
      return student.score > 80;
    })
    .map(function(student) {
      return student.name;
    });
}

function getAverageAge(students) {
  const totalAge = students.reduce(function(sum, student) {
    return sum + student.age;
  }, 0);
  return totalAge / students.length;
}


function addStudent(students, student) {
  return [...students, student]; 
}


function removeStudentByName(students, name) {
  return students.filter(function(student) {
    return student.name !== name;
  });
}

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };
