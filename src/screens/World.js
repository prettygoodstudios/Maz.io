class World {
    direction = "right";

    constructor(){
        window.addEventListener("keydown", (e) => {
            switch(e.key.toLowerCase()){
                case "w":
                case "arrowup":
                    this.direction = "up";
                    break;
                case "s":
                case "arrowdown":
                    this.direction = "down";
                    break;
                case "d":
                case "arrowright":
                    this.direction = "right";
                    break;
                case "a":
                case "arrowleft":
                    this.direction  = "left";
                    break;
            }
        });
    }
}

export default World;