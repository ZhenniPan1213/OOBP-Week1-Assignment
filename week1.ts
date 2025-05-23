// Define interfaces for Person and City
export interface Person {
  name: string;
  surname: string;
  age: number;
  fullName: string;
  isAdult: boolean;
}

export interface City {
  name: string;
  population: number;
  country: string;
  isCapital: boolean;
}

/* Task 1 - Fix the function below. It should operate as a calculator, 
which takes two numbers and an operator as arguments, and returns the result of the operation. 

For example calculator(1, 2, "+") should return 3.
*/
export function calculator(num1: number, num2: number, operator: string): number {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        throw new Error("Cannot divide by zero");
      }
    default:
      throw new Error("Invalid operator");
  }
}

/* Task 2 - Write a function, which creates objects describing a person.
The function should take three arguments: name, surname and age. 
The function should return an object with the following properties:
1. name - the name of the person
2. surname - the surname of the person
3. age - the age of the person
4. fullName - the full name of the person (name + surname)
5. isAdult - true if the person is an adult (age >= 18), false otherwise 
*/
export function createPerson(name: string, surname: string, age: number): Person {
  return {
    name,
    surname,
    age,
    fullName: `${name} ${surname}`,
    isAdult: age >= 18,
  };
}

/* Task 3 - Write a function, which takes an object as a parameter. The object given as a parameter should have the following properties:
1. name - the name of the person
2. surname - the surname of the person
3. age - the age of the person
4. fullName - the full name of the person (name + surname)
5. isAdult - true if the person is an adult (age >= 18), false otherwise
*/
export function personToString(person: Person): string {
  const ageDescriptor = person.isAdult ? "an adult" : "a minor";
  return `The person ${person.name}, ${person.surname} is ${person.age} years old, and is ${ageDescriptor}`;
}

/* Task 4 - Write a function, which takes an object as a parameter. 
The object given as a parameter should describe the information of a city.
The city object should have the following properties:
1. name - the name of the city
2. population - the population of the city
3. country - the country the city is located in
4. isCapital - true if the city is a capital, false otherwise
*/
export function cityNameAndPopulationToString(city: City): string {
  return `${city.name} has a population of ${city.population}`;
}

/* Task 5 - Write a function, which takes the same kind of object as parameter as the function in Task 4.
The function should return boolean value true if the city is a capital, false otherwise.
*/
export function isCapital(city: City): boolean {
  return city.isCapital;
}

/* Task 6 - Write a function, which takes the same kind of object as parameter as the function in Task 4.
The function should return the name of the country the city is located in.
*/
export function getCountryName(city: City): string {
  return city.country;
}

/* Task 7 - Write a function, which takes two parameters. Both parameters are of the same city object type as the function in Task 4.
The function should return the city with the larger population.
*/
export function getLargerPopulation(city1: City, city2: City): City {
  return city1.population > city2.population ? city1 : city2;
}

/* Task 8 - Write a function, which takes the same parameters as the function in Task 7.
The function should return a string in the following format:
"<name of the city with larger population> has larger population than <name of the city with smaller population>"
*/
export function getLargerPopulationString(city1: City, city2: City): string {
  const largerCity = city1.population > city2.population ? city1 : city2;
  const smallerCity = city1.population > city2.population ? city2 : city1;
  return `${largerCity.name} has larger population than ${smallerCity.name}`;
}

/* Export all the functions you have written above. 
The export is used to make the functions available to the tests. With this same logic, you 
can also import these functions in other files.
*/
/* module.exports = {
  calculator,
  createPerson,
  personToString,¬
  cityNameAndPopulationToString,
  isCapital,
  getCountryName,
  getLargerPopulation,
  getLargerPopulationString,
}; */