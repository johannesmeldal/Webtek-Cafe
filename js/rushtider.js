//Liste som inneholder informasjon over hvor travel kafeen er
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


//Koden under er i stor grad hentet fra WebTek øving 8, og videreutviklet med den som utgangspunkt.

//Definerer konstanter
const canvas = document.getElementById('chart');
const context = canvas.getContext('2d');
const wCanvas = 500
const hCanvas = 500
const margin = 50
const smallMargin = margin / 2
const widthBar = 50

//Funksjon som tegner en linje
function drawLine(fromX, fromY, toX, toY) {
  context.beginPath();
  context.moveTo(toX, toY);
  context.lineTo(fromX, fromY);
  context.stroke();
}

//Funksjon som tegner tekst
function drawText(text, x, y) {
  context.fillStyle = 'black';
  context.fillText(text, x, y);
}

//Funksjon som setter sammen de to funksjonene over
function drawLineWithText(text, fromX, fromY, toX, toY) {
  drawText(text, fromX - 35, fromY + 7);
  drawLine(fromX, fromY, toX, toY);
}

//Funksjon som tegner et rektangel
function drawRect(x, y, w, h, color) {
  context.fillStyle = color
  context.fillRect(x, y, w, h)
}

//Funksjon som tegner rektangel med tekst under
function drawRectWithText(x, y, w, h, color, text) {
    drawRect(x, y, w, h, color);
    drawText(text,x + 3,y + 20)
}

//Kode som får tak i dagens dato og setter det som en variabel "day"
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
//Funksjon som tegner grafen på forsiden, kjøres en gang ved oppstart og kalles ellers av knappene på forsiden
function drawGraph(Array) {
    //Setter bakgrunnsfargen på alle knappene til hvit
    for (let j = 0; j < 7; j++) {
        document.getElementById(j).style.backgroundColor = 'white';
    }

    //Denne kjøres bare når funksjonen kalles av knappene
    //Oppdaterer overskriften på grafen og sette bakgrunnsfargen på knappen til den aktive dagen
    //til lysegrå
    if (t > 0) {
        document.getElementById("daydiv").innerHTML = event.srcElement.innerHTML;
        event.srcElement.style.backgroundColor = 'lightgrey';
    }
    
    //Tømmer canvasen og endrer skrifttype
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "26px Nunito"
    
    //Tegner de horisontale linjene som viser hvor opptatt kafeen er
    for (let i = 0; i < 4; i++) {
        drawLineWithText(String(i * 1), margin, hCanvas + margin - i * (hCanvas + margin) / 4, wCanvas + margin,
        hCanvas + margin - i * (hCanvas + margin) / 4)
    }

    //Tegner søylene i tabellen
    context.font = "20px Nunito";
    const length = Object.keys(Array).length
    let i = 0
    for (Obj in Array) {
        const height = Array[Obj] * 138
        x = i / (length - 1) * (wCanvas - (margin * 2)) + margin + smallMargin;

        let graphColor;
        if (Array[Obj] == 3) {
            graphColor = '#A85055'
        } else {
            graphColor = '#95C391'
        }
    drawRectWithText(x, hCanvas + margin, widthBar, -height, graphColor, Obj)
        
        i++
        t++;
    }
    context.font = "26px Nunito"
    drawText('3 - Mange besøkende', 565, 170);
    drawText('2 - Noen besøkende', 565, 210);
    drawText('1 - Få besøkende', 565, 250);
}

//Når siden lastes vil den få tak i dagens dato og tegne grafen for dagens ukedag, samt markere knappen og endre overskriften
drawGraph(days[day]);
document.getElementById("daydiv").innerHTML = day;
document.getElementById(String(d.getDay())).style.backgroundColor = 'lightgrey';