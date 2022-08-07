export const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const random10 = () => Math.floor(Math.random() * 10 + 1);
export const random100 = () => Math.floor(Math.random() * 100 + 1);
export const randomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * 3)];
};

export const calc = (expr) => {
  const arr = expr.split(' ');
  const a = arr[0];
  const b = arr[2];
  switch (arr[1]) {
    case '+':
      return +a + +b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

export const gcd = (expr) => {
  const arr = expr.split(' ').sort((a, b) => a - b);
  for (let i = arr[0]; i > 0; i -= 1) {
    if (arr[0] % i === 0 && arr[1] % i === 0) {
      return i;
    }
  }
  return 1;
};

export const progression = (expr) => {
  const arr = expr.split(' ');
  const index = arr.indexOf('..');
  switch (index) {
    case 0:
      return arr[1] - (arr[2] - arr[1]);
    case 9:
      return +arr[8] + (arr[8] - arr[7]);
    default:
      return (+arr[index - 1] + +arr[index + 1]) / 2;
  }
};

export const isPrime = (num) => {
  const start = Math.floor(num / 2);
  for (let i = start; i > 1; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
