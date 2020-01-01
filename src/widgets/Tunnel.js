const width = 100;

class Tunnel {
    x = 0;
    y = 0;
    length = 0;
    horizontal = false;
    color = "";

    constructor(horizontal, x, y, length, color){
        this.horizontal = horizontal;
        this.x = x;
        this.y = y;
        this.length = length;
        this.color = color;
    }

    update = (context, canvas) => {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.horizontal ? this.length : width, this.horizontal ? width : this.length);
    }
}

export default Tunnel;