const canvasEL = document.querySelector('#canvas'),
canvasCtx = canvasEL.getContext('2d')
const gapX = 10

const field = {
    w: window.innerWidth,
    h: window.innerHeight,
    draw: function(){
        canvasCtx.fillStyle = "#286047"
        canvasCtx.fillRect(0, 0, this.w, this.h)
    },
}

const line = {
    w: 15,
    h: field.h,
    draw: function(){
        canvasCtx.fillStyle = "#ffffff"
        canvasCtx.fillRect(field.w / 2 - this.w / 2, 0, this.w, this.h)
    },
}

const leftPaddle = {
    x: gapX,
    y: 400,
    w: line.w,
    h: 200,
    draw: function(){
        canvasCtx.fillRect( this.x, this.y, this.w, this.h)
    },
}

const rightPaddle = {
    x: field.w - line.w - gapX,
    y: 400,
    w: line.w,
    h: 200,
    draw: function(){
        canvasCtx.fillRect( this.x, this.y, this.w, this.h)
    },
}

const score = {
    human: 1,
    computer: 2,
    draw: function(){
        canvasCtx.font = "bold 72px Arial";
        canvasCtx.textAlign = "center";
        canvasCtx.textBaseline = "top";
        canvasCtx.fillStyle = "#01341D";
        canvasCtx.fillText(this.human, field.w/4, 50)
        canvasCtx.fillText(this.computer, field.w/4 + field.w / 2, 50)
    }

}

const ball = {
    x: 200,
    y: 300,
    r: 20,
    arc: 2 * Math.PI,
    speed: 5,
    _move: function(){
        this.x +=1 * this.speed
        this.y +=1 * this.speed
    },
    draw: function(){
        canvasCtx.fillStyle = "#ffffff"
        canvasCtx.beginPath()
        canvasCtx.arc(this.x, this.y, this.r, 0, this.arc, false)
        canvasCtx.fill()

        this._move()
    }
}

function setup(){
    canvasEL.width = canvasCtx.width = field.w
    canvasEL.height = canvasCtx.height = field.h
}

function draw(){
    field.draw()
    line.draw()
    leftPaddle.draw()
    rightPaddle.draw()
    score.draw()
    ball.draw()
}

window.animateFrame = (function(){
    return(
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback){
            return window.setTimeout(callback, 1000 / 60)
        }
    )
})()

function main(){
    animateFrame(main)
    draw()
}

setup()
main()