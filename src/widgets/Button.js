class Button {
    text = ""
    onClick = null;
    backgroundColor = "green";
    color = "white";
    hoverColor = "blue";
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    lastUpdated = new Date();
  
    constructor(text, onClick, x, y, width, height){
       this.text = text;
       this.onClick = onClick;
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
       this.hovering = false;
       this.lastUpdated = new Date();
       window.addEventListener("click", (e) => this.isVisible() && this.clickHandler(e));
       window.addEventListener("mousemove", (e) => this.isVisible() && this.hoverHandler(e));
    }

    isVisible = () => {
        const now = new Date().getTime();
        const diff = now - this.lastUpdated.getTime();
        return diff < 100;
    }

    clickHandler = (e) => {
        const {clientX, clientY} = e;
        if(this.isBounded(clientX, clientY)){
            this.onClick();
        }
    }

    hoverHandler = (e) => {
        const {clientX, clientY} = e;
        if(this.isBounded(clientX, clientY)){
            this.hovering = true;
        }else{
            this.hovering = false;
        }
    }

    isBounded = (x, y) => {
        return x > this.x && x < this.x+this.width && y > this.y && y < this.y+this.height;
    }
  
    update = (context, canvas) => {
        this.lastUpdated = new Date();
        context.fillStyle = this.hovering ? this.hoverColor : this.backgroundColor;
        context.fillRect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.color;
        context.textAlign = "center";
        context.textBaseLine = "middle";
        context.font = "2em Avenir";
        context.fillText(this.text, this.x+this.width*0.5, this.y+this.height*0.5);
        context.textAlign = "left";
    }
}

export default Button;