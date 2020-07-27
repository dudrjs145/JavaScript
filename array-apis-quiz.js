// Good! - 정답이 일치한 경우

// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.toString();
  console.log("Q1:", result);

  // Ellie
  const ellie = fruits.join(" and ");
  console.log("ellie:", ellie);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = Array(fruits);
  console.log("Q2:", result);

  // Ellie
  const ellie = fruits.split(", ");
  console.log("ellie", ellie);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  // Good!
  const array = [1, 2, 3, 4, 5];
  console.log("Q3:", array.reverse());
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  array.shift();
  array.shift();
  console.log("Q4:", array);

  // Good!
  const array2 = [1, 2, 3, 4, 5];
  console.log("Q4:", array2.slice(2));
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.filter((value) => value.score === 90);
  console.log("Q5:", result);

  // ellie
  const ellie = students.find((student) => student.score === 90);
  console.log("ellie:", ellie);
}

// Q6. make an array of enrolled students
{
  // Good!
  const result = students.filter((student) => student.enrolled);
  console.log("Q6:", result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = [];
  students.forEach((student) => result.push(student.score));
  console.log("Q7:", result);

  // Ellie
  const ellie = students.map((student) => student.score);
  console.log("ellie:", ellie);
}

// Q8. check if there is a student with the score lower than 50
{
  // Good!
  const result = students.some((student) => student.score < 50);
  console.log("Q8:", result);
}

// Q9. compute students' average score
{
  let result = 0;
  students.forEach((student) => (result += student.score));
  console.log("Q9:", result / students.length);

  // Ellie
  const ellie = students.reduce((prev, curr) => {
    return prev + curr.score;
  }, 0);
  console.log("ellie", ellie / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = [];
  students.forEach((student) => result.push(student.score));
  console.log("Q10:", result.toString());

  // ellie
  const ellie = students.map((student) => student.score).join();
  console.log("ellie:", ellie);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = [];
  students.forEach((value) => result.push(value.score));
  console.log("Bounus:", result.sort().toString());

  // ellie
  const ellie = students
    .map((student) => student.score)
    .sort((a, b) => b - a)
    .join();
  console.log("ellie:", ellie);
}
