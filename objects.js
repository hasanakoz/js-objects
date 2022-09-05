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
