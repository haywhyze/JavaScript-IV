// CODE here for your Lambda Classes
class Person {
  constructor(name, age, location, gender) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.gender = gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(name, age, location, gender, specialty, favLanguage, catchPhrase) {
    super(name, age, location, gender);
    this.specialty = specialty;
    this.favLanguage = favLanguage;
    this.catchPhrase = catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }

  updateGrade(student) {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const updateNumber = getRandomNumber(0 - student.grade, 100 - student.grade);
    const oldGrade = student.grade;
    student.grade = oldGrade - updateNumber;
    console.log(`${student.name}'s grade is now ${student.grade} from ${oldGrade}`)
  }
}

class Student extends Person {
  constructor(name, age, location, gender, previousBackground, className, favSubjects) {
    super(name, age, location, gender);
    this.previousBackground = previousBackground;
    this.className = className;
    this.favSubjects = favSubjects;
    this.grade = 50;
  }

  listsSubjects() {
    this.favSubjects.forEach(subject => console.log(subject));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`)
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`)
  }
}

class ProjectManagers extends Instructor {
  constructor(name, age, location, gender, specialty, favLanguage, catchPhrase, gradClassName, favInstructor) {
    super(name, age, location, gender, specialty, favLanguage, catchPhrase);
    this.gradClassName = gradClassName;
    this.favInstructor = favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

// Instantiate Student Objects
const martin = new Student('Martin Mensah', 24, 'Accra', 'Male', 'Data Analyst', 'WEBEU2', ['HTML', 'CSS', 'Javascript']);
const anna = new Student('Anna Winther', 22, 'London', 'Female', 'Graphics Designer', 'WEBEU2', ['React', 'Node', 'Python']);
const ben = new Student('Benjamin Grabow', 25, 'Berlin', 'Male', 'Neurologist', 'WEBEU2', ['CSS', 'Python', 'Javascript']);

// Instantiate Instructor Objects
const gabe = new Instructor('Gabriel Cabrejas', 46, 'Yorkshire', 'Male', 'node', 'Javascript', '@channel, let\'s go ');

// Instantiate ProjectManagers Objects
const tony = new ProjectManagers('Anthony Campbell', 27, 'Amsterdam', 'Male', 'react', 'Javascript', 'Alright @channel, hop in', 'WEBEU1', 'Gabe');
const delba = new ProjectManagers('Delba de Oliveira', 23, 'London', 'Female', 'django', 'Python', 'Let\'s do peer code reviews', 'WEBEU1', 'Gabe');

// Test Functionalty
// martin.speak();
// anna.speak();
// ben.speak();
// gabe.speak();
// tony.speak();
// delba.speak();

// gabe.demo('React');
// gabe.grade(martin, 'Redux');
// gabe.grade(ben, 'Testing');

// anna.listsSubjects();
// ben.PRAssignment('User Interface');
// martin.sprintChallenge('Applied Javascript');

// tony.standUp('webeu2_anthony');
// delba.debugsCode(ben, 'Express API');

// Stretch Goals
delba.updateGrade(martin);