//*********************REDUCE METHOD*************** */
const salaries = [5500, 8000, 6500, 9000, 10000, 15000];
const sumOfSalaries = salaries.reduce((acc, val) => acc + val); //sum of the salaries
console.log("SUM:", sumOfSalaries);

//9000 tl.den az olan maaşlara %10 zam yapmak ve zamlı maaşların toplamının kaç tl olacağını bulmak istiyor.

const sumOfRaisedSalaries = salaries
  .filter((sal) => sal <= 9000)
  .map((sal) => Math.trunc(sal * 1.1))
  .reduce((acc, salary) => acc + salary, 0);
console.log(sumOfRaisedSalaries);

//******************************************************************OBJECTS**************** */

// 1st method to create an object
const cars = new Object();
cars.brand = "BMW";
cars.engine = "1.3";
cars.model = 2022;
cars.lpg = true;
console.log(cars);
console.log(cars.brand); //.dot notation
console.log(cars["engine"]); //square bracket notation
const key = "model";
console.log(cars[key]); //square bracket notation allows to define and invoke with a varible.

cars.engine = "1.6"; //change the value
console.log(cars);

//& 2nd method to create object OBJECT CONSTRUCTOR

function Personel(id, ad, maas) {
  this.perId = id;
  this.perAd = ad;
  this.maas = maas;
}
const kisi1 = new Personel("1245", "mustafa", 15000);
const kisi2 = new Personel("1654", "Canan", 20000);

console.log(kisi1);
console.log(kisi2.perAd);
console.log(kisi2["perId"]);

//3- object literal method

const employee = {
  name: "Can",
  surname: "Canan",
  age: 33,
  job: "developer",
  languages: ["c++", "java", "javascript", "python", "go"],
  salary: 140000,
};

console.log(employee.job);
employee["languages"].forEach((l) => console.log(l));
employee.birth = "1990";
console.log(employee);
employee["email"] = "can@gmail.com";
employee["birth"] = "1991";
employee["salary"] *= 1.1;

//object copy

const person = employee; //shallow copying
console.log(person);
person.birth = 2000;
console.log(person.birth);
console.log(employee.birth); // the source object of the copy also changed..

let deepCopyofEmployee = JSON.parse(JSON.stringify(employee)); //deep copying
console.log(deepCopyofEmployee);
deepCopyofEmployee.birth = 2022; //only the copy changed thanks to deep copying.

//*********OBJECT METHODS******** */
const personal = {
  name: "Can",
  surname: "Canan",
  birth: 1993,
  job: "developer",
  drivingLicence: true,
  salary: 140000,
  calculateAge: function () {
    return new Date().getFullYear() - this.birth;
  },
};

console.log(personal.calculateAge());
