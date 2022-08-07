export const isEven = (num) => num % 2 === 0;

export const random10 = Math.floor(Math.random() * 10 + 1);
export const random100 = Math.floor(Math.random() * 100 + 1);

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
