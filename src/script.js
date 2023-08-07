let fortune;
let advice;
let luckyNum;

// declare and define our functions
const makeFortune = () => {
  let arr = ['Outlook not so good', 'Signs point to yes', 'Without a doubt', 'My sources say no', 'As I see it yes', 'Ask again later', 'My reply is no', 'Concentrate and ask again']
  const num = Math.floor(Math.random() * 8) 
  fortune = arr[num];
};

const makeAdvice = () => {
  let arr2 = ['Deal with it!', 'Figure it out!', 'That sucks!', 'Who cares anyways!', 'Stop whinning!', 'Leave me alone!', 'Gurl bye!', 'Careful what you wish for!']
  const num2 = Math.floor(Math.random() * 8)
  advice = arr2[num2];
};

const makeLuckyNumber = () => {
  const num3 = Math.floor(Math.random() * 101)
  luckyNum = num3;
};

function changeText(){
  document.querySelector('.fortune').innerHTML = "Your fortune is: " + fortune
  document.querySelector('.advice').innerHTML = "Your advice is: " + advice
  document.querySelector('.luckyNumber').innerHTML = "Your lucky number is: " + luckyNum
};

function itWorked(){
  console.log('it worked')

  // create fortune, advice, and luckynumber
  makeFortune();
  makeAdvice();
  makeLuckyNumber();
  
  // put the text on screen
  changeText();
};

// add click eventlistener
document.querySelector('#theBtn').addEventListener("click", itWorked)
