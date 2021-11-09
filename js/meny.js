//Array som inneholder menyen for drikker-seksjonen
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

//forEach-løkke som bygger hele menyen basert på arrayet over, og setter det inn i HTML-filen

//Denne funksjonen er skrevet 4 ganger, med forskjellige IDer og klasser, en gang for hver
//meny-kategori.
drikker.forEach(drikke => {

    //Lager div-en som inneholder et element i menyen
    let div = document.createElement("div");
        div.id = (drikke.name).toLowerCase();
        div.className = "menuitem";
    let firstdiv = document.createElement("div");
        firstdiv.className = "menufirstdiv";
    let innerdiv = document.createElement("div");
        innerdiv.className = "menuinnerdiv";
    let name = document.createElement("p");
        name.innerText = drikke.name+" - ";
    let price = document.createElement("p");
        price.innerText = drikke.price+",-";
    let quant = document.createElement("p");
        quant.innerText = drikke.quantity;

    //Lager knapper som øker/reduserer antallet av hver vare
    let less = document.createElement("button")
        less.innerText = "-"
        less.onclick = () => {
            if (drikke.quantity > 0) {
                drikke.quantity -= 1;
                quant.innerText = drikke.quantity;
            }
        }
    let more = document.createElement("button")
        more.onclick = () => {
            if (drikke.quantity < 6) {
                drikke.quantity += 1;
                quant.innerText = drikke.quantity;
            } else {
                alert("Du kan maksimalt bestille 6 på en gang!");
            }
        }
        more.innerText = "+"
    
    //Definerer klassenavn for css-styling
    name.className = "menuelement";
    price.className = "menuprice";
    less.className = "quantbutton";
    quant.className = "quant";
    more.className = "quantbutton";
    
    //Appender elementene inn i HTML dokumentet
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
    let div = document.createElement("div");
        div.id = (salat.name).toLowerCase();
        div.className = "menuitem";
    let firstdiv = document.createElement("div");
        firstdiv.className = "menufirstdiv";
    let innerdiv = document.createElement("div");
        innerdiv.className = "menuinnerdiv";
    let name = document.createElement("p");
        name.innerText = salat.name+" - ";
    let price = document.createElement("p");
        price.innerText = salat.price+",-";
    let quant = document.createElement("p");
        quant.innerText = salat.quantity;
    let less = document.createElement("button")
        less.innerText = "-"
        less.onclick = () => {
            if (salat.quantity > 0) {
                salat.quantity -= 1;
                quant.innerText = salat.quantity;
            }
        }
    let more = document.createElement("button")
        more.onclick = () => {
            if (salat.quantity < 6) {
                salat.quantity += 1;
                quant.innerText = salat.quantity;
            } else {
                alert("Du kan maksimalt bestille 6 på en gang!");
            }
        }
        more.innerText = "+"
    
    //Legger til en beskrivelse under varenavnet.
    let description = document.createElement("p");
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
    description: "Inneholder gluten, melk og egg",
    price: 59,
    quantity: 0}
]

snacks.forEach(snack => {
    let div = document.createElement("div");
        div.id = (snack.name).toLowerCase();
        div.className = "menuitem";
    let firstdiv = document.createElement("div");
        firstdiv.className = "menufirstdiv";
    let innerdiv = document.createElement("div");
        innerdiv.className = "menuinnerdiv";
    let name = document.createElement("p");
        name.innerText = snack.name+" - ";
    let price = document.createElement("p");
        price.innerText = snack.price+",-";
    let quant = document.createElement("p");
        quant.innerText = snack.quantity;
    let less = document.createElement("button")
        less.innerText = "-"
        less.onclick = () => {
            if (snack.quantity > 0) {
                snack.quantity -= 1;
                quant.innerText = snack.quantity;
            }
        }
    let more = document.createElement("button")
        more.onclick = () => {
            if (snack.quantity < 6) {
                snack.quantity += 1;
                quant.innerText = snack.quantity;
            } else {
                alert("Du kan maksimalt bestille 6 på en gang!");
            }
        }
        more.innerText = "+"
    

    let description = document.createElement("p");
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
    let div = document.createElement("div");
        div.id = (kake.name).toLowerCase();
        div.className = "menuitem";
    let firstdiv = document.createElement("div");
        firstdiv.className = "menufirstdiv";
    let innerdiv = document.createElement("div");
        innerdiv.className = "menuinnerdiv";
    let name = document.createElement("p");
        name.innerText = kake.name+" - ";
    let price = document.createElement("p");
        price.innerText = kake.price+",-";
    let quant = document.createElement("p");
        quant.innerText = kake.quantity;

    let less = document.createElement("button")
        less.innerText = "-"
        less.onclick = () => {
            if (kake.quantity > 0) {
                kake.quantity -= 1;
                quant.innerText = kake.quantity;
            }
        }
    
    let more = document.createElement("button")
        more.onclick = () => {
            if (kake.quantity < 6) {
                kake.quantity += 1;
                quant.innerText = kake.quantity;
            } else {
                alert("Du kan maksimalt bestille 6 på en gang!");
            }
        }
        more.innerText = "+"
    

    let description = document.createElement("p");
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




//her er bestill.js, lagt inn i denne filen fordi den bruker mange av variablene i denne filen
function bestill() {

    //Definerer variabler
    let sum = 0;
    let kvittering = document.createElement("p");

    //Regner ur summen av hver menykategori, og legger den til i den totale summen
    drikker.forEach(drikke => {
        if (drikke.quantity > 0) {
            sum += drikke.price*drikke.quantity;
            kvittering.innerHTML += drikke.quantity + " x " + drikke.name+" ( "+drikke.price+",- )</br>";
        }
    })
    salater.forEach(salat => {
        if (salat.quantity > 0) {
            sum += salat.price*salat.quantity;
            kvittering.innerHTML += salat.quantity + " x " + salat.name+" ( "+salat.price+",- )</br>";
        }
    })
    snacks.forEach(snack => {
        if (snack.quantity > 0) {
            sum += snack.price*snack.quantity
            kvittering.innerHTML += snack.quantity + " x " + snack.name+" ( "+snack.price+",- )</br>";
        }
        
    })
    kaker.forEach(kake => {
        if (kake.quantity > 0) {
            sum += kake.price*kake.quantity
            kvittering.innerHTML += kake.quantity + " x " + kake.name + " ("+kake.price+",- )</br>";
        }
        
    })

    //Så lenge mer enn 1 vare er bestilt, lages kvitteringen
    if (sum == 0) {
        alert("Vennligst bestill minst 1 ting fra menyen!");
    } else {
        let section1 = document.createElement("section");
            section1.className = "menusection";
            section1.innerHTML = `<b class="introtekst">Takk for din bestilling!</br></br>Vedlagt finner du kvitteringen:</b></br></br>`;
        let section2 = document.createElement("section");
            section2.className = "menusection";
            section2.appendChild(kvittering);
        let section3 = document.createElement("section");
            section3.className = "menusection";
            section3.innerHTML = "</br><b>Total sum: " + sum + ",-</b></br></br>";

        let returnbutton = document.createElement("button");
            returnbutton.innerHTML = "Tilbake til menyen";
            returnbutton.className = "menubutton"
            returnbutton.onclick = () => {
                window.location.href = 'meny.html';
            }

        //Endrer innholdet på siden fra meny til kvittering
        document.getElementById("menu").innerHTML = null;
        document.getElementById("menu").appendChild(section1);
        document.getElementById("menu").appendChild(section2);
        document.getElementById("menu").appendChild(section3);
        document.getElementById("menu").innerHTML += "</br>";
        document.getElementById("menu").appendChild(returnbutton);
        document.getElementById("navmenu").style.display = "none";
    }
}