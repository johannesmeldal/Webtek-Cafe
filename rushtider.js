const days = {
    "Mandag" : {
        "9-11" : 1,
        "11-13" : 2,
        "13-15" : 2,
        "15-18" : 3,  
        "18-20" : 2,      
    },
    "Tirsdag" : {
        "9-11" : 1,
        "11-13" : 1,
        "13-15" : 2,
        "15-18" : 3,  
        "18-20" : 2,   
    },
    "Onsdag" : {
        "9-11" : 1,
        "11-13" : 2,
        "13-15" : 2,
        "15-18" : 3,  
        "18-20" : 2,      
    },
    "Torsdag" : {
        "9-11" : 1,
        "11-13" : 1,
        "13-15" : 2,
        "15-18" : 3,  
        "18-20" : 2,      
    },
    "Fredag" : {
        "9-11" : 1,
        "11-13" : 2,
        "13-15" : 2,
        "15-18" : 3,  
        "18-20" : 2,      
    },
    "Lørdag" : {
        "10-12" : 1,
        "12-14" : 2,
        "14-16" : 3,
        "16-18" : 2,        
    },
    "Søndag" : {
        "10-12" : 1,
        "12-14" : 2,
        "14-15" : 2, 
        "15-16" : 1,      
    },
}

const canvas = document.getElementById('chart');
const context = canvas.getContext('2d');
const wCanvas = 500
const hCanvas = 500
const margin = 50
const smallMargin = margin / 2
const widthBar = 50

function drawLine(fromX, fromY, toX, toY) {
  context.beginPath();
  context.moveTo(toX, toY);
  context.lineTo(fromX, fromY);
  context.stroke();
}

function drawText(text, x, y) {
  context.fillStyle = 'black';
  context.fillText(text, x, y);
}

function drawLineWithText(text, fromX, fromY, toX, toY) {
  drawText(text, fromX - 35, fromY + 7);
  drawLine(fromX, fromY, toX, toY);
}


// function to draw rectangles width color
function drawRect(x, y, w, h, color) {
  context.fillStyle = color
  context.fillRect(x, y, w, h)
}

function drawRectWithText(x, y, w, h, color, text) {
    drawRect(x, y, w, h, color);
    drawText(text,x + 3,y + 20)
}

const d = new Date();

const weekday = new Array(7);
weekday[0] = "Søndag";
weekday[1] = "Mandag";
weekday[2] = "Tirsdag";
weekday[3] = "Onsdag";
weekday[4] = "Torsdag";
weekday[5] = "Fredag";
weekday[6] = "Lørdag";


let day = weekday[d.getDay()];
let t = 0;
// function to draw the graph
function drawGraph(Array) {
    for (let j = 0; j < 7; j++) {
        document.getElementById(j).style.backgroundColor = 'white';
    }
    if (t > 0) {
        document.getElementById("daydiv").innerHTML = event.srcElement.innerHTML;
        event.srcElement.style.backgroundColor = 'lightgrey';
    }
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "26px Nunito"
    
    for (let i = 0; i < 4; i++) {
        drawLineWithText(String(i * 1), margin, hCanvas + margin - i * (hCanvas + margin) / 4, wCanvas + margin,
        hCanvas + margin - i * (hCanvas + margin) / 4)
    }

    context.font = "20px Nunito";
    const length = Object.keys(Array).length
    let i = 0
    for (Obj in Array) {
        const height = Array[Obj] * 138
        x = i / (length - 1) * (wCanvas - (margin * 2)) + margin + smallMargin;

        let graphColor;
        if (Array[Obj] == 3) {
            graphColor = 'red'
        } else {
            graphColor = 'blue'
        }
        drawRectWithText(x, hCanvas + margin, widthBar, -height, graphColor, Obj)
        
        i++
        t++;
    }
    context.font = "26px Nunito"
    drawText('3 - Opptatt', 565, 170);
    drawText('2 - Middels', 565, 210);
    drawText('1 - Rolig', 565, 250);
}



drawGraph(days[day]);
document.getElementById("daydiv").innerHTML = day;
document.getElementById(String(d.getDay())).style.backgroundColor = 'lightgrey';