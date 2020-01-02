class Snake {
    segments = [];
    color = "red";
    speed = 0.1;
    lastUpdate = 0;
    deltaX = 0;

    constructor(direction){
        this.lastUpdate = new Date();
        for(let i = 0; i < 4; i++){
            this.segments.push(new SnakeSegment(-i*45+50, 50, direction));
        }
    }

    update = (context, canvas, direction) => {
        this.deltaX = new Date().getTime() - this.lastUpdate.getTime();
        this.lastUpdate = new Date();
        this.segments.forEach((seg, i) => {
            let prev = i >= 1 ? i-1 : 0;
            seg.update(context, canvas, this.segments[prev], this.color, direction, this.speed*this.deltaX, this.getPosition);
        });
    }

    getPosition = () => {
        const {x, y} = this.segments[0];
        return [x, y];
    }
}

class SnakeSegment {
    size = 50;
    x = 200;
    y = 200;
    direction = "";

    constructor(x, y, direction){
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    update = (context, canvas, prev, color, direction, speed, getPosition) => {
        if(this == prev){
            const leftRight = this.direction == "left" && direction == "right";
            const rightLeft = this.direction == "right" && direction == "left"; 
            const upDown = this.direction == "up" && direction == "down";
            const downUp = this.direction == "down" && direction == "up";
            const inValidOperation = leftRight || rightLeft || upDown || downUp;
            if(!inValidOperation){
                this.direction = direction;
            }
        }
        switch(this.direction){
            case "left":
                if(prev.x > this.x){
                    this.direction = prev.y < this.y ? "up" : "down";
                    this.x = prev.x;
                    return this.update(context, canvas, prev, color, direction, speed);
                }
                this.x -= speed;
                break;
            case "right":
                if(prev.x < this.x){
                    this.direction = prev.y < this.y ? "up" : "down";
                    this.x = prev.x;
                    return this.update(context, canvas, prev, color, direction, speed);
                }
                this.x += speed;
                break;
            case "up":
                if(prev.y > this.y){
                    this.direction = prev.x < this.x ? "left" : "right";
                    this.y = prev.y;
                    return this.update(context, canvas, prev, color, direction, speed);
                }
                this.y -= speed;
                break;
            case "down":
                if(prev.y < this.y){
                    this.direction = prev.x < this.x ? "left" : "right";
                    this.y = prev.y;
                    return this.update(context, canvas, prev, color, direction, speed);
                }
                this.y += speed;
                break;
            default:
                break;
        }
        context.fillStyle = color;
        if(getPosition){
            let offSetX = this.x - getPosition()[0];
            let offSetY = this.y - getPosition()[1];
            context.fillRect(50 + offSetX, 200 + offSetY, this.size, this.size);
        }
    }
}

export default Snake;