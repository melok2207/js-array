//Функція filterAdults приймає масив об'єктів, що представлє людей (з полями name та age),
//вам потрібно написати код, який повертає новий масив, який містить лише тих людей, чий вік більше або дорівнює 18.
function filterAdults(people) {
  
  return people.filter(function(person) {
    return person.age >= 18;
  });
}

const people = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 15 },
  { name: 'Alice', age: 18 },
  { name: 'Bob', age: 17 }
];

console.log(filterAdults(people));


module.exports = filterAdults;

