const fs = require('fs').promises;
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });

(async () => {
  const userInput = await new Promise(resolve => readline.question('Greetings! Please enter some text: ', resolve));
  await fs.writeFile('02-write-file/textTest.txt', userInput, 'utf-8');
  console.log('Text successfully written to "textTest.txt".');
  readline.close();
  process.exit();
})();