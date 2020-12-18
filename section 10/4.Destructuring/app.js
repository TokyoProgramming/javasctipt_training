// Destructuring Assignment

let a, b;
[a, b] = [100, 200];
// Reset pattern
[a, b, c, ...k] = [100, 200, 300, 400, 500];
[a, b, c, ...reset] = [100, 200, 300, 400, 500];

({ a, b });

console.log(k);
console.log(reset);

// Array Destructuring

// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// Parse array returned from function
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}

let person1, person2, person3;

[person1, person2, person3] = getPeople();
console.log(person1, person2, person3);

const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
};

// ES 5
const name_5 = person.name,
  age_5 = person.age,
  city_5 = person.city;
console.log(name_5, age_5, city_5);

// ES 6 Destructuring
const { name, age, city } = person;
console.log(name, age, city);
