import readlineSync from 'readline-sync';
import { isEven } from '../src/functions.js';

export default () => {
  const userName = readlineSync.question('May I have your name? ', {
    defaultInput: 'Anonymous',
  });
  console.log(`Hello, ${userName}!`);
  const askQuestion = () => {
    const question = Math.floor(Math.random() * 100 + 1);
    const answer = readlineSync.question(`Question: ${question} `);
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    if (answer === rightAnswer) {
      console.log('Correct');
      return true;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. 
    Let's try again, ${userName}!`);
    return false;
  };
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  while (count < 3 && askQuestion()) {
    count += 1;
    if (count === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
