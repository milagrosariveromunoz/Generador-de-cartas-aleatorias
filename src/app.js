/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// import { doc } from "prettier";

window.onload = function() {
  //write your code here

  document.querySelector(".card").classList.add(generateSuitRandom());
  document.querySelector(".card").innerHTML = generateRandomNumber();
};

let generateRandomNumber = function() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numberI = Math.floor(Math.random() * numbers.length);
  return numbers[numberI];
};

let generateSuitRandom = function() {
  let suit = ["heart", "spade", "clover", "diamond"];
  let suitI = Math.floor(Math.random() * suit.length);
  return suit[suitI];
};
