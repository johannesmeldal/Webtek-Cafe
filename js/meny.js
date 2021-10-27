drikker = [
    {name: "Te",
    price: 50,
    quantity: 0},
    {name: "Juice",
        price: 45,
        quantity: 0},
    {name: "Kaffe",
        price: 30,
        quantity: 0}
]

drikker.forEach(drikke => {
    var div = document.createElement("div");
    var paragraph = document.createElement("p");
    paragraph.innerText = drikke.name+" - "+drikke.price;
    var quant = document.createElement("p");
    quant.innerText = drikke.quantity;
    var less = document.createElement("button")
    less.innerText = "-"
    less.onclick = () => {
        if (drikke.quantity > 0) {
            drikke.quantity -= 1;
            quant.innerText = drikke.quantity;
        }
    }
    var more = document.createElement("button")
    more.onclick = () => {
        if (drikke.quantity < 6) {
            drikke.quantity += 1;
            quant.innerText = drikke.quantity;
        }
    }
    more.innerText = "+"

    paragraph.className = "menuelement";
    less.className = "menuelement";
    quant.className = "menuelement";
    more.className = "menuelement";
    
    div.appendChild(paragraph)
    div.appendChild(less);
    div.append(quant);
    div.appendChild(more);
    
    document.getElementById("drikker").appendChild(div);
});

salater = [
    {name: "Cæsarsalat",
    price: 100,
    quantity: 0},
    {name: "Salat 2",
    price: 100,
    quantity: 0},
    {name: "Salat 3",
    price: 100,
    quantity: 0}
]

salater.forEach(salat => {
    var div = document.createElement("div");
    var paragraph = document.createElement("p");
    paragraph.innerText = salat.name+" - "+salat.price;
    var quant = document.createElement("p");
    quant.innerText = salat.quantity;
    var less = document.createElement("button")
    less.innerText = "-"
    less.onclick = () => {
        if (salat.quantity > 0) {
            salat.quantity -= 1;
            quant.innerText = salat.quantity;
        }
    }
    var more = document.createElement("button")
    more.onclick = () => {
        if (salat.quantity < 6) {
            salat.quantity += 1;
            quant.innerText = salat.quantity;
        }
    }
    more.innerText = "+"

    paragraph.className = "menuelement";
    less.className = "menuelement";
    quant.className = "menuelement";
    more.className = "menuelement";
    
    div.appendChild(paragraph)
    div.appendChild(less);
    div.append(quant);
    div.appendChild(more);
    
    document.getElementById("salater").appendChild(div);
});

snacks = [
    {name: "Snack 1",
    price: 100,
    quantity: 0},
    {name: "Snack 2",
    price: 100,
    quantity: 0},
    {name: "Snack 3",
    price: 100,
    quantity: 0}
]

snacks.forEach(snack => {
    var div = document.createElement("div");
    var paragraph = document.createElement("p");
    paragraph.innerText = snack.name+" - "+snack.price;
    var quant = document.createElement("p");
    quant.innerText = snack.quantity;
    var less = document.createElement("button")
    less.innerText = "-"
    less.onclick = () => {
        if (snack.quantity > 0) {
            snack.quantity -= 1;
            quant.innerText = snack.quantity;
        }
    }
    var more = document.createElement("button")
    more.onclick = () => {
        if (snack.quantity < 6) {
            snack.quantity += 1;
            quant.innerText = snack.quantity;
        }
    }
    more.innerText = "+"

    paragraph.className = "menuelement";
    less.className = "menuelement";
    quant.className = "menuelement";
    more.className = "menuelement";

    div.appendChild(paragraph)
    div.appendChild(less);
    div.append(quant);
    div.appendChild(more);
    
    document.getElementById("snacks").appendChild(div);
});

kaker = [
    {name: "Kake 1",
    price: 100,
    quantity: 0},
    {name: "Kake 2",
    price: 100,
    quantity: 0},
    {name: "Kake 3",
    price: 100,
    quantity: 0}
]

kaker.forEach(kake => {
    var div = document.createElement("div");
    var paragraph = document.createElement("p");
    paragraph.innerText = kake.name+" - "+kake.price;
    var quant = document.createElement("p");
    quant.innerText = kake.quantity;

    var less = document.createElement("button")
    less.innerText = "-"
    less.onclick = () => {
        if (kake.quantity > 0) {
            kake.quantity -= 1;
            quant.innerText = kake.quantity;
        }
    }
    
    var more = document.createElement("button")
    more.onclick = () => {
        if (kake.quantity < 6) {
            kake.quantity += 1;
            quant.innerText = kake.quantity;
        }
    }
    more.innerText = "+"

    paragraph.className = "menuelement";
    less.className = "menuelement";
    quant.className = "menuelement";
    more.className = "menuelement";

    div.append(paragraph)
    div.append(less);
    div.append(quant);
    div.append(more);
    
    document.getElementById("kaker").appendChild(div);
});

function bestill() {
    var sum = 0;
    var kvittering = document.createElement("p");
    drikker.forEach(drikke => {
        if (drikke.quantity > 0) {
            sum += drikke.price*drikke.quantity;
            kvittering.innerHTML += drikke.quantity + " x " + drikke.name+" ( "+(drikke.quantity*drikke.price)+",- )</br>";
        }
    })
    salater.forEach(salat => {
        if (salat.quantity > 0) {
            sum += salat.price*salat.quantity;
            kvittering.innerHTML += salat.quantity + " x " + salat.name+" ( "+(salat.quantity*salat.price)+",- )</br>";
        }
    })
    snacks.forEach(snack => {
        if (snack.quantity > 0) {
            sum += snack.price*snack.quantity
            kvittering.innerHTML += snack.quantity + " x " + snack.name+" ( "+(snack.quantity*snack.price)+",- )</br>";
        }
        
    })
    kaker.forEach(kake => {
        if (kake.quantity > 0) {
            sum += kake.price*kake.quantity
            kvittering.innerHTML += kake.quantity + " x " + kake.name + " ( "+(kake.quantity*kake.price)+",- )</br>";
        }
        
    })
    console.log(kvittering);
    document.getElementById("menu").innerHTML = "Takk for din bestilling!";
    document.getElementById("menu").innerHTML += "Her er en liten oversikt";
    document.getElementById("menu").innerHTML += "</br>--------------------------------------------------";
    document.getElementById("menu").appendChild(kvittering);
    document.getElementById("menu").innerHTML += "</br>--------------------------------------------------";
    document.getElementById("menu").innerHTML += "</br>Total sum: " + sum + ",-</br></br>";

    var returnbutton = document.createElement("button");
    returnbutton.innerHTML = "Return to menu";
    returnbutton.onclick = () => {
        window.location.href = 'meny.html';
    }

    document.getElementById("menu").appendChild(returnbutton);
}