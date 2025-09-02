import { TennisScorer } from "./tennisScore.js";

const scorer = new TennisScorer();

const scoreDiv = document.querySelector("#score");
const p1Btn = document.querySelector("#p1-btn");
const p2Btn = document.querySelector("#p2-btn");

scoreDiv.textContent = scorer.showScore();

p1Btn.addEventListener("click", (e) => {
  e.preventDefault();           
  scorer.player1Score();
  scoreDiv.textContent = scorer.showScore();
});

p2Btn.addEventListener("click", (e) => {
  e.preventDefault();            
  scorer.player2Score();
  scoreDiv.textContent = scorer.showScore();
});
s