module.exports = function getZerosCount(number, base) {
  let zeros = 0;
  let x = number;
  let y = base;
  let i = 2;

  const multipliers = []; // simple multipliers
  let maxMultiplierCount = 0;
  let maxMultiplier = 0;
  while (i < y) {
    if (y % i === 0) {
      multipliers.push(i);
      y = y / i;
    } else {
      i++;
    }
  }
  multipliers.push(y)
    ;
  maxMultiplier = Math.max(...multipliers);

  for (let i = 0; i < multipliers.length; i++) {
    if (multipliers[i] === maxMultiplier) {
      maxMultiplierCount++;
    }
  }
  while (x) {
    x = Math.floor(x / maxMultiplier);
    zeros += x;
  }

  return Math.floor(zeros / maxMultiplierCount);
}





