class Ball {
    constructor (x, y, radius, dx, dy, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }

    // Create a method to draw the ball
    draw (ctx){
        
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.fill()
    }

    // Create a method to update the ball's positions
    update (width, height) {
        
        if (this.x - this.radius < 0 || this.x + this.radius > width){
            this.dx *= -1
        }
        if (this.y - this.radius < 0 || this.y + this.radius > height){
            this.dy *= -1
        }

        // Update the x, y coordinates
        this.x += this.dx;
        this.y += this.dy;
    }
}

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
const width = canvas.width
const height = canvas.height
function canvasBoundary (){
    ctx.strokeStyle = 'black';
    ctx.strokeRect(0, 0, width, height)
}
let ball = new Ball(200, 160, 20, 2, 2, 'red')        
setInterval(() => {
    ctx.clearRect(0, 0, width, height);  
    canvasBoundary();                   
    ball.draw(ctx);                     
    ball.update(width, height);  
}, 
10) 