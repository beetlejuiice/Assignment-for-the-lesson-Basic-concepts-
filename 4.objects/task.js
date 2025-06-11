function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
  this.subject = null;
  this.excluded = false;
}

Student.prototype.setSubject = function(subjectName) {
  if (typeof subjectName === 'string') {
    this.subject = subjectName;
  }
};

Student.prototype.addMarks = function(...marksToAdd) {
  if (!this.hasOwnProperty('marks')) {
    return;
  }
  this.marks.push(...marksToAdd);
};

Student.prototype.getAverage = function() {
  if (!this.hasOwnProperty('marks') || this.marks.length === 0) {
    return 0;
  }
  const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length;
};

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};

let student1 = new Student('Дмитрий', 'мужской', 19);
student1.setSubject('Algebra');
console.log(student1.getAverage());
student1.addMarks(5, 4, 4, 4);
console.log(student1.getAverage());
console.log(student1);

let student2 = new Student('Кристина', 'женский', 18);
student2.setSubject('Geometry');
student2.exclude('Прогулы');
console.log(student2);