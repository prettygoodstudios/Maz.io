import Button from "../widgets/Button";

class MainMenu {
    background = "brown";
    fontStyle = "Avenir";
    fontSize = "3em";
    fontColor = "white";
    playButton = null;
  
    constructor(canvas, context, startGame){
        this.playButton = new Button("Play!", startGame, canvas.width/2-50, canvas.height/2-25, 100, 50);
    }
  
    update = (canvas, context, startGame) => {
      context.fillStyle = this.background;
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = this.fontColor;
      context.font = this.fontSize + " " + this.fontStyle;
      context.textAlign = "center";
      context.fillText("Maz.io", canvas.width/2, canvas.height/2-100);
      context.textAlign = "left";
      this.playButton.update(context, canvas);
    }
  
}

export default MainMenu;