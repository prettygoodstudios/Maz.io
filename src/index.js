import Game from "./Game";


window.onload = () => {
  const canvas = document.getElementById("world");
  const context = canvas.getContext("2d");
  context.fillStyle = "blue";
  const {innerWidth, innerHeight} = window;
  canvas.height = innerHeight;
  canvas.width = innerWidth;
  context.fillRect(0, 0, canvas.width, canvas.height);
  const myGame = new Game(canvas, context);
}
