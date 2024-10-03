let generateExcuse = () => {
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    let who = Math.floor(Math.random() * who.length)
    let action = Math.floor(Math.random() * action.length)
    let what = Math.floor(Math.random() * what.length)
    let when = Math.floor(Math.random() * when.length)


    return (
        who[whoIndex] + " " + action[actionIndex] + " " + what[whatIndex] + " " + when[whenIndex]
    )
}










let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = ["before the class", "when I was sleeping", "while I was exercising", "during my lunch", "while I was praying"];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandom(anyArray) {
  let max = anyArray.length - 1;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector("#excuse").innerHTML =
    getRandom(who) +
    " " +
    getRandom(action) +
    " " +
    getRandom(what) +
    " " +
    getRandom(when);
};
