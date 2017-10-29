/*
 * * Write a function that generates every sequence of throws a single
 * * player could throw over a three-round game of rock-paper-scissors.
 * *
 * * Your output should look something like:
 * *   [["rock", "rock", "rock"],
 * *    ["rock", "rock", "paper"],
 * *    ["rock", "rock", "scissor"],
 * *    ["rock", "paper", "rock"],
 *              ...etc...
 *                   */

const rockPaperScissors = () => {
  const answer = [];
  const choice = ['rock', 'paper', 'scissors'];
  for (let i = 0; i < choice.length; i++) {
    for (let j = 0; j < choice.length; j++) {
      for (let k = 0; k < choice.length; k++) {
        answer.push([choice[i], choice[j], choice[k]]);
      }
    }
  }
  return answer;
};


console.log(rockPaperScissors());
