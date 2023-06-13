const canvasEL = document.querySelector('#canvas'),
canvasCtx = canvasEL.getContext('2d');

const lineWidth = 15;

function setup(){
    canvasEL.width = canvasCtx.width = window.innerWidth;
    canvasEL.height = canvasCtx.height = window.innerHeight;
}

function draw(){
    canvasCtx.fillStyle = "#286047";
    canvasCtx.fillRect(0,0, window.innerWidth, window.innerHeight)

    canvasCtx.fillStyle = "#ffffff";
    canvasCtx.fillRect(
        window.innerWidth / 2 - lineWidth / 2,
        0,
        lineWidth,
        window.innerHeight
    );

    canvasCtx.fillRect(
        10,
        400, 
        lineWidth,
        200
    )

    canvasCtx.fillRect(
        window.innerWidth - lineWidth - 10,
        400, 
        lineWidth,
        200
    )

    canvasCtx.beginPath()
    canvasCtx.arc(
        200,
        300,
        20,
        2 * Math.PI, 
        false
    )
    canvasCtx.fill()
            
    canvasCtx.font = "bold 72px Arial";
    canvasCtx.textAlign = "center";
    canvasCtx.textBaseline = "top";
    canvasCtx.fillStyle = "#01341D";
    canvasCtx.fillText(
        '3',
        window.innerWidth/4,
        50
    )
    canvasCtx.fillText(
        '1',
        window.innerWidth/4 + window.innerWidth / 2,
        50
        )
}

setup();
draw();