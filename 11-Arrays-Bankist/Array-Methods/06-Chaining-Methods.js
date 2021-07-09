const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUSD)
  .reduce((acc, curr) => acc + curr, 0);
console.log(`Total deposits USD: ${Math.floor(totalDepositsUSD)}`);
