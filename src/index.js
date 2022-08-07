import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ', {
    defaultInput: 'Anonymous',
  });
  console.log(`Hello, ${user}!`);
  return user;
};

export const userName = greeting();

export const getResult = (func, game) => {
  let count = 0;
  while (count < 3) {
    const question = func();
    const answer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${answer}`);
    const rightAnswer = String(game(question));
    if (answer === rightAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
