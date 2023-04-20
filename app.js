const express = require('express');
const app = express();

const students = [
  { name: 'fathy', age: 21, major: 'علوم الحاسب ' },
  { name: 'walid', age: 44, major: 'تكنولوجيا المعلومات' },
  { name: 'elghazaly', age: 70, major: 'نظم المعلومات ' }
];

app.get('/students', (req, res) => {
  let studentList = '<ul>';

  students.forEach(student => {
    const { name, age, major } = student;
    studentList += `<li>${name}, ${age}, ${major}</li>`;
  });

  studentList += '</ul>';

  res.send(studentList);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
