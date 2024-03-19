/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = onload;

function onload() {
  const pinta = ["♦", "♥", "♠", "♣"];
  const numero = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];

  const aleatoriopinta = Math.floor(Math.random() * pinta.length);
  const aleatorionumero = Math.floor(Math.random() * numero.length);

  const textNumber = document.createTextNode(numero[aleatorionumero]);
  const textPintaTop = document.createTextNode(pinta[aleatoriopinta]);
  const textPintaBotton = document.createTextNode(pinta[aleatoriopinta]);

  const numberNode = document.getElementById("numero");
  const pintaTopNode = document.getElementById("pintatop");
  const pintaBottonNode = document.getElementById("pintabotton");

  numberNode.appendChild(textNumber);
  pintaTopNode.appendChild(textPintaTop);
  pintaBottonNode.appendChild(textPintaBotton);

  if (aleatoriopinta === 0 || aleatoriopinta === 1) {
    pintaTopNode.classList.add("red");
    pintaBottonNode.classList.add("red");
  }
}
