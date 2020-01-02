class Snake {
    segments = [];
    color = "red";
    speed = 3;

    constructor(direction){
        for(let i = 0; i < 4; i++){
            this.segments.push(new SnakeSegment(-i*50+50, 50, direction));
        }
    }

    update = (context, canvas, direction) => {
        this.segments.forEach((seg, i) => {
            let prev = i >= 1 ? i-1 : 0;
            seg.update(context, canvas, this.segments[prev], this.color, direction, this.speed);
        });
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

    update = (context, canvas, prev, color, direction, speed) => {
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
                    return this.update(context, canvas, prev, color, direction, speed);
                }
                this.x -= speed;
                break;
            case "right":
                if(prev.x < this.x){
                    this.direction = prev.y < this.y ? "up" : "down";
                    return this.update(context, canvas, prev, color, direction, speed);
                }
                this.x += speed;
                break;
            case "up":
                if(prev.y > this.y){
                    this.direction = prev.x < this.x ? "left" : "right";
                    return this.update(context, canvas, prev, color, direction, speed);
                }
                this.y -= speed;
                break;
            case "down":
                if(prev.y < this.y){
                    this.direction = prev.x < this.x ? "left" : "right";
                    return this.update(context, canvas, prev, color, direction, speed);
                }
                this.y += speed;
                break;
            default:
                break;
        }
        context.fillStyle = color;
        
        context.fillRect(this.x, this.y, this.size, this.size);
    }
}

export default Snake;