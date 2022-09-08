// //*********************REDUCE METHOD*************** */
// const salaries = [5500, 8000, 6500, 9000, 10000, 15000];
// const sumOfSalaries = salaries.reduce((acc, val) => acc + val); //sum of the salaries
// console.log("SUM:", sumOfSalaries);

// //9000 tl.den az olan maaşlara %10 zam yapmak ve zamlı maaşların toplamının kaç tl olacağını bulmak istiyor.

// const sumOfRaisedSalaries = salaries
//   .filter((sal) => sal <= 9000)
//   .map((sal) => Math.trunc(sal * 1.1))
//   .reduce((acc, salary) => acc + salary, 0);
// console.log(sumOfRaisedSalaries);

// //******************************************************************OBJECTS**************** */

// // 1st method to create an object
// const cars = new Object();
// cars.brand = "BMW";
// cars.engine = "1.3";
// cars.model = 2022;
// cars.lpg = true;
// console.log(cars);
// console.log(cars.brand); //.dot notation
// console.log(cars["engine"]); //square bracket notation
// const key = "model";
// console.log(cars[key]); //square bracket notation allows to define and invoke with a varible.

// cars.engine = "1.6"; //change the value
// console.log(cars);

// //& 2nd method to create object OBJECT CONSTRUCTOR

// function Personel(id, ad, maas) {
//   this.perId = id;
//   this.perAd = ad;
//   this.maas = maas;
// }
// const kisi1 = new Personel("1245", "mustafa", 15000);
// const kisi2 = new Personel("1654", "Canan", 20000);

// console.log(kisi1);
// console.log(kisi2.perAd);
// console.log(kisi2["perId"]);

// //3- object literal method

// const employee = {
//   name: "Can",
//   surname: "Canan",
//   age: 33,
//   job: "developer",
//   languages: ["c++", "java", "javascript", "python", "go"],
//   salary: 140000,
// };

// console.log(employee.job);
// employee["languages"].forEach((l) => console.log(l));
// employee.birth = "1990";
// console.log(employee);
// employee["email"] = "can@gmail.com";
// employee["birth"] = "1991";
// employee["salary"] *= 1.1;

// //object copy

// const person = employee; //shallow copying
// console.log(person);
// person.birth = 2000;
// console.log(person.birth);
// console.log(employee.birth); // the source object of the copy also changed..

// let deepCopyofEmployee = JSON.parse(JSON.stringify(employee)); //deep copying
// console.log(deepCopyofEmployee);
// deepCopyofEmployee.birth = 2022; //only the copy changed thanks to deep copying.

// //*********OBJECT METHODS******** */
// const personal = {
//   name: "Can",
//   surname: "Canan",
//   birth: 1993,
//   job: "developer",
//   drivingLicence: true,
//   salary: 140000,
//   calculateAge: function () {
//     return new Date().getFullYear() - this.birth;
//   },
//   summary: function () {
//     return `${this.name} is ${this.calculateAge()} years old`;
//   },
// };

// console.log(personal.calculateAge());
// console.log(personal.summary());

// //! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
// //! kullanilmak ve bu fonksiyonlarda this keyword kullanim
// //! gereksinimini kaldirmak icin gelistirilmistir.
// //! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
// //! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
// //! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
// //! diger (func. expression veya declaration) yontemlerini kullanabilir.

// //*******************OBJECT ITERATION ****/

const people = {
  person1: {
    name: "Can",
    surname: "canan",
    birth: 1990,
    job: "developer",
    salary: 140000,
    drivingLicence: true,
  },
  person2: {
    name: "john",
    surname: "sweet",
    birth: 1990,
    job: "tester",
    salary: 130000,
    drivingLicence: false,
  },
  person3: {
    name: "Steve",
    surname: "Jose",
    birth: 1980,
    job: "QA",
    salary: 135000,
    drivingLicence: true,
  },
};

// console.log(people);
// console.log("salary of p2: ", people.person2.salary);

// //! FOR - IN
// //* for (key in object) {
// //*   // code block to be executed
// //* }

// for (let person in people) {
//   console.log(person);
//   console.log(people[person]);
// }

// //! FOR -OF

// for (let v of Object.values(people)) {
//   console.log(v.salary);
// }

// for (let [key, value] of Object.entries(people)) {
//   console.log(`${key} - ${value.salary}`);
// }

// //!WITH ARRAY METHODS

// Object.keys(people).forEach((p) => console.log(p));

// Object.values(people).forEach((v) => console.log(v.surname));

// Object.values(people)
//   .filter((p) => p.job === "developer")
//   .forEach((p) => console.log(p.birth));

//***************************************** */
// JSON --- Javascript Object Notation---
//***************************************** */
// const team = [
//   {
//     name: "josh",
//     surname: "Adams",
//     job: "developer",
//     age: 30,
//   },
//   {
//     name: "mary",
//     surname: "bary",
//     job: "tester",
//     age: 22,
//   },
//   {
//     name: "hazel",
//     surname: "nut",
//     job: "developer",
//     age: 20,
//   },
// ];

// team.forEach((item) => console.log(item.job));
// ages = team.map((item) => item.age + 1);
// console.log(ages);

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu fullName key'i olarak saklayan, ayni zamanda age degerlerini 5
//* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.

// const teamFullName = team.map((p) => ({
//   fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
//   age: p.age + 5,
// }));
// console.log(teamFullName);

// const teamFullName = team.map((p) => {
//   return {
//     fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
//     age: p.age + 5,
//   };
// });
// console.log(teamFullName);

//?yaşları 22 den küçük eşit olanların isimlerini döndür

// team.filter((p) => p.age <= 22).forEach((p) => console.log(p.name));

// const teamUnder22 = team.filter((p) => p.age <= 22);
// console.log(teamUnder22);

//?yaşları 22 den küçük eşit olanların isimlerini diziye at.
// const teamUnder22 = team.filter((p) => p.age <= 22).map((p) => p.name);
// console.log(teamUnder22);

//?yaş ortalamasını hesaplama
// const avgAges =
//   team.reduce((sum, person) => (sum += person.age), 0) / team.length;

//

//*************************************** */
//-----DESTRUCTURING OBJECT---------------------
//***************************************** */

// const car = {
//   name: "BMW",
//   model: 1990,
//   engine: 1.6,
//   colors: ["blue", "purple"],
// };

// const { name, colors, model, engine } = car;
// console.log(name, model, colors, engine);

// const cars = {
//   car1: {
//     name: "BMW",
//     model: 1990,
//     engine: 1.6,
//   },

//   car2: {
//     name: "Mercedes",
//     model: 2022,
//     engine: 2.0,
//   },
// };

// const { car1, car2 } = cars;
// console.log(car1);

// const { name: c1Name, model: c1model } = car1;
// const { name: c2Name, model: c2Model } = car2;

// console.log(c1Name, c2Name);

// const team = [
//   {
//     name: "Josh",
//     surname: "Barry",
//     job: "developer",
//     age: 30,
//   },
//   {
//     name: "Josh",
//     surname: "Barry",
//     job: "tester",
//     age: 45,
//   },
//   {
//     name: "Hazel",
//     surname: "Nut",
//     job: "team lead",
//     age: 40,
//   },
// ];

// team.forEach((p) => {
//   console.log("************");
//   console.log(p.name);
//   console.log(p.surname);
//   console.log(p.job);
//   console.log(p.age);
// });

// team.forEach((p) => {
//   const { name, surname, job, age } = p;
//   console.log("************");
//   console.log(name);
//   console.log(surname);
//   console.log(job);
//   console.log(age);
// });

// const getInfo = () => {
//   return {
//     id: 1,
//     productName: "Iphone",
//     price: 30000,
//   };
// };

// console.log(getInfo());
// const { productName, price } = getInfo();
// console.log(productName, price);

//*************************************** */
//-----DESTRUCTURING ARRAY---------------------
//***************************************** */

// const names = ["Ahmet", "Mehmet", "Ismet", "Saffet"];
// const [p1, p2, , p4] = names;
// console.log(p1, p2, p4);

//*************************************** */
//-----REST ... ---------------------
//***************************************** */

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//* REST: (Arrays)
// const vehicles = ["anadol", "reno", "bmw", "mercedes", "ferrari"];

// const [anadol, reno, ...restVehicles] = vehicles;
// console.log(reno, anadol);
// console.log(restVehicles);

// const personel = {
//   pname: "john",
//   surname: "smith",
//   job: "developer",
//   age: 30,
// };

// const { pname, job, ...ageSurname } = personel;
// console.log(pname, job, ageSurname);

// //! bir fonksiyonun argümanlarını diziye çevirmek

// function sum(x, y) {
//   return x + y;
// }
// console.log(sum(1, 2, 3, 4, 5, 6)); //3

// const sumAll = (...numbers) => {
//   return numbers.reduce((x, y) => x + y, 0);
// };

// console.log(sumAll(1, 2, 3, 4, 5));

// const showName = (name, surname, ...titles) => {
//   const summary = `${name} ${surname} is a ${titles.join(" and ")}`;
//   console.log(summary);
// };

// showName("noah", "adams", "developer", "instr", "prof.", "dad");

//**************************************** */
//-----------------SPREAD---------------
//**************************************** */

// const flyingVehicles = ["aircraft", "helicopter", "quadcopter"];
// const automobiles = ["truck", "bus", "car"];

// const allVehicles = [...flyingVehicles, ...automobiles]; //concat
// console.log(allVehicles);

// const citrus = ["orange", "lime", "lemon"];
// const fruits = ["apple", ...citrus, "banana", "cherry"];
// console.log(fruits); //concat in

// //string spread

// let str = "Hello FS12";
// console.log([...str]);

// //MAX()
// console.log(Math.max(1, 2, 6, 8, 9, 4)); //9
// const nums = [1, 2, 6, 8, 9, 4];
// console.log(Math.max(...nums)); //9 -diziyi açmak için ... kullandık

// //array copy

// const myNumbers = [1, 2, 3];
// const herNumbers = [-1, ...myNumbers, 7]; // diziyi açtık ... ile
// const hisNumbers = [...myNumbers];
// console.log(herNumbers);
// hisNumbers.push(100); //copyden myNumbers etkilenmedi.
// console.log(hisNumbers, myNumbers);

// //object copy

// const myObj = { a: 1, b: 2, c: 3 };
// const herObj = { a: 2, z: 4, k: 3 };
// const copyObj = { ...myObj };
// console.log(copyObj);

// copyObj.c = 33;
// console.log(myObj, copyObj); //copyden orijinal obje etkilenmedi.

// const combinedObj = { ...myObj, ...herObj };
// console.log(combinedObj);
