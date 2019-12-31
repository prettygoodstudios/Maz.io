import MainMenu from "./MainMenu";

class Game {
    mode = "main-menu";
    score = 0;
    fps = 30;
    mainMenu = null;
    canvas = null;
    context = null;

    constructor(canvas, context){
        this.canvas = canvas;
        this.context = context;
        this.mainMenu = new MainMenu(canvas, context, this.startGame);
        window.setInterval(this.update, 1000/this.fps);
    }


    update = () => {
        switch(this.mode){
            case "main-menu":
                this.mainMenu.update(this.canvas, this.context, this.startGame);
                break;
            default:
                break;
        }
    }

    startGame(){
        this.state = "play";
        console.log("let's play!");
    }

}  

export default Game;