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
