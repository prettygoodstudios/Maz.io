import MainMenu from "./screens/MainMenu";
import World from "./screens/World";

class Game {
    mode = "main-menu";
    score = 0;
    fps = 30;
    mainMenu = null;
    canvas = null;
    context = null;
    world = null;

    constructor(canvas, context){
        this.canvas = canvas;
        this.context = context;
        this.mainMenu = new MainMenu(canvas, context, this.startGame);
        //window.setInterval(() => this.update(), 1000/this.fps);
        const updater = () => {
            this.update();
            window.requestAnimationFrame(updater);
        }
        window.requestAnimationFrame(updater);
    }


    update = () => {
        switch(this.mode){
            case "main-menu":
                this.mainMenu.update(this.canvas, this.context, this.startGame);
                break;
            case "play":
                this.world.update(this.context, this.canvas);
                break;
            default:
                break;
        }
    }

    startGame = () => {
        this.world = new World();
        this.mode = "play";
    }

}  

export default Game;