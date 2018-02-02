// I need to add logic description here
import readlineSync from 'readline-sync';

const getResponseAndShow = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`'Hello, ${userName}!'`);
  return userName;
};

