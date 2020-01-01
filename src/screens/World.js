import Tunnel from "../widgets/Tunnel";

class World {
    direction = "right";
    groundColor = "brown";
    tunnelColor = "white";

    tunnels = [];

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

        let totalX = 0;
        let totalY = 100;
        for(let i = 0; i < 50; i++){
            let length = Math.floor(Math.random()*400)+200;
            let isEven = i % 2 == 0;
            let newTunnel = new Tunnel(isEven, totalX, totalY, length, this.tunnelColor);
            this.tunnels.push(newTunnel);
            if(isEven){
                totalX += length;
            }else{
                totalY += length;
            }
        }
    }


    update = (context, canvas) => {
        context.fillStyle = this.groundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
        this.tunnels.forEach((t) => {
            t.update(context, canvas);
        });
    }
}

export default World;