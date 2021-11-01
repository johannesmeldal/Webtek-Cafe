drikker = [
    {name: "WEBTEK KAFFE",
    price: 39,
    quantity: 0},
    {name: "CAPPUCCINO",
        price: 45,
        quantity: 0},
    {name: "CAFFE MOCCA",
        price: 52,
        quantity: 0}
]

drikker.forEach(drikke => {
    var div = document.createElement("div");
    div.id = (drikke.name).toLowerCase();
    div.className = "menuitem";
    var firstdiv = document.createElement("div");
    firstdiv.className = "menufirstdiv";
    var innerdiv = document.createElement("div");
    innerdiv.className = "menuinnerdiv";
    var name = document.createElement("p");
    name.innerText = drikke.name+" - ";
    var price = document.createElement("p");
    price.innerText = drikke.price+",-";
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
        } else {
            alert("Du kan maksimalt bestille 6 på en gang!");
        }
    }
    more.innerText = "+"
    
    name.className = "menuelement";
    price.className = "menuprice";
    less.className = "quantbutton";
    quant.className = "quant";
    more.className = "quantbutton";
    
    firstdiv.append(name);
    firstdiv.append(price);
    div.append(firstdiv);
    div.append(innerdiv);
    innerdiv.append(less);
    innerdiv.append(quant);
    innerdiv.append(more);
    
    document.getElementById("drikker").appendChild(div);
});

salater = [
    {name: "Cæsarsalat",
    description: "kylling, krutonger, cherrytomater, feta",
    price: 169,
    quantity: 0},
    {name: "Kylling og baconsalat",
    description: "kylling, bacon, cherrytomater, parmesan",
    price: 189,
    quantity: 0},
    {name: "Salat med råstekte grønnsaker",
    description: "blomkål, brokkoli, gulrotkrem, egg",
    price: 149,
    quantity: 0}
]

salater.forEach(salat => {
    var div = document.createElement("div");
    div.id = (salat.name).toLowerCase();
    div.className = "menuitem";
    var firstdiv = document.createElement("div");
    firstdiv.className = "menufirstdiv";
    var innerdiv = document.createElement("div");
    innerdiv.className = "menuinnerdiv";
    var name = document.createElement("p");
    name.innerText = salat.name+" - ";
    var price = document.createElement("p");
    price.innerText = salat.price+",-";
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
        } else {
            alert("Du kan maksimalt bestille 6 på en gang!");
        }
    }
    more.innerText = "+"
    

    var description = document.createElement("p");
    description.innerText = salat.description;
    description.className = "menudescription";
    

    name.className = "menuelement";
    price.className = "menuprice";
    less.className = "quantbutton";
    quant.className = "quant";
    more.className = "quantbutton";
    
    firstdiv.append(name);
    firstdiv.append(price);
    div.append(firstdiv);
    div.append(innerdiv);
    innerdiv.append(less);
    innerdiv.append(quant);
    innerdiv.append(more);
    
    
    document.getElementById("salater").appendChild(div);
    document.getElementById("salater").appendChild(description);
});

snacks = [
    {name: "Kyllingvinger med aioli",
    description: "Inneholder egg",
    price: 89,
    quantity: 0},
    {name: "Fries/søtpotet med aioli",
    description: "Inneholder egg",
    price: 69,
    quantity: 0},
    {name: "Hvitløksbrød med aioli",
    description: "Innhold gluten, melk og egg",
    price: 59,
    quantity: 0}
]

snacks.forEach(snack => {
    var div = document.createElement("div");
    div.id = (snack.name).toLowerCase();
    div.className = "menuitem";
    var firstdiv = document.createElement("div");
    firstdiv.className = "menufirstdiv";
    var innerdiv = document.createElement("div");
    innerdiv.className = "menuinnerdiv";
    var name = document.createElement("p");
    name.innerText = snack.name+" - ";
    var price = document.createElement("p");
    price.innerText = snack.price+",-";
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
        } else {
            alert("Du kan maksimalt bestille 6 på en gang!");
        }
    }
    more.innerText = "+"
    

    var description = document.createElement("p");
    description.innerText = snack.description;
    description.className = "menudescription";

    name.className = "menuelement";
    price.className = "menuprice";
    less.className = "quantbutton";
    quant.className = "quant";
    more.className = "quantbutton";

    firstdiv.append(name);
    firstdiv.append(price);
    div.append(firstdiv);
    div.append(innerdiv);
    innerdiv.append(less);
    innerdiv.append(quant);
    innerdiv.append(more);
    
    document.getElementById("snacks").appendChild(div);
    document.getElementById("snacks").appendChild(description);
});

kaker = [
    {name: "Sjokoladekake",
    description: "Inneholder gluten, egg og melk",
    price: 59,
    quantity: 0},
    {name: "Ostekake",
    description: "Innholder gluten (hvete)",
    price: 59,
    quantity: 0},
    {name: "Brownie med is",
    description: "Innholder egg, gluten, melk",
    price: 69,
    quantity: 0}
]

kaker.forEach(kake => {
    var div = document.createElement("div");
    div.id = (kake.name).toLowerCase();
    div.className = "menuitem";
    var firstdiv = document.createElement("div");
    firstdiv.className = "menufirstdiv";
    var innerdiv = document.createElement("div");
    innerdiv.className = "menuinnerdiv";
    var name = document.createElement("p");
    name.innerText = kake.name+" - ";
    var price = document.createElement("p");
    price.innerText = kake.price+",-";
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
        } else {
            alert("Du kan maksimalt bestille 6 på en gang!");
        }
    }
    more.innerText = "+"
    

    var description = document.createElement("p");
    description.innerText = kake.description;
    description.className = "menudescription";

    name.className = "menuelement";
    price.className = "menuprice";
    less.className = "quantbutton";
    quant.className = "quant";
    more.className = "quantbutton";

    firstdiv.append(name);
    firstdiv.append(price);
    div.append(firstdiv);
    div.append(innerdiv);
    innerdiv.append(less);
    innerdiv.append(quant);
    innerdiv.append(more);
    
    document.getElementById("kaker").appendChild(div);
    document.getElementById("kaker").appendChild(description);
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
            kvittering.innerHTML += kake.quantity + " x " + kake.name + " ("+(kake.quantity*kake.price)+",-)</br>";
        }
        
    })
    console.log(kvittering);
    var section1 = document.createElement("section");
    section1.className = "menusection";
    section1.innerHTML = "Takk for din bestilling!</br></br>Vedlagt finner du kvitteringen:</br></br>";
    var section2 = document.createElement("section");
    section2.className = "menusection";
    section2.appendChild(kvittering);
    var section3 = document.createElement("section");
    section3.className = "menusection";
    section3.innerHTML = "</br>Total sum: " + sum + ",-</br></br>";

    var returnbutton = document.createElement("button");
    returnbutton.innerHTML = "Return to menu";
    returnbutton.className = "menubutton"
    returnbutton.onclick = () => {
        window.location.href = 'meny.html';
    }

    document.getElementById("menu").innerHTML = null;
    document.getElementById("menu").appendChild(section1);
    document.getElementById("menu").appendChild(section2);
    document.getElementById("menu").appendChild(section3);
    document.getElementById("menu").innerHTML += "</br>";
    document.getElementById("menu").appendChild(returnbutton);
    document.getElementById("navmenu").style.display = "none";
}