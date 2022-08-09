import getResult from '../index.js';
import randomize from '../functions.js';

const randomizeOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * 3)];
};

const calcResult = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return +num1 + +num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Not appropriate operator');
  }
};

const getCalcTask = () => {
  const num1 = randomize(10);
  const num2 = randomize(10);
  const operator = randomizeOperator();
  const rightAnswer = calcResult(num1, num2, operator);
  const question = `${num1} ${operator} ${num2}`;
  return [question, rightAnswer];
};

export default () => {
  console.log('What is the result of the expression?');
  getResult(getCalcTask);
};
