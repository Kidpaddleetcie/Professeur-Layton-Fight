let e = 100;
let m = 100;
document.getElementById("LEN").addEventListener("click", ENNEMIS(2));
document.getElementById("Hit").addEventListener("click", ENNEMIS(1));
document.getElementById("Desc").addEventListener("click", ENNEMIS(0));



function ManaPlus() {
    if (m < 100) {
        document.getElementById("mana").style.width = m + "%";
        m++;
    }
}

function EnergiePlus() {
    if (e < 100) {
        document.getElementById("mana").style.width = e + "%";
        e++;
    }
}

function ENNEMIS(villain) {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    ennemi_position = getRandomInt(4);
    switch (ennemi_position) {
        case 0:
            document.getElementById("interface").style.backgroundImage = 'url(' + ennemis[villain] + ')';
            console.log(villain + ',' + ennemis[villain]);
            break
        case 1:
            document.getElementById("interface").style.backgroundImage = 'url(' + ennemis[villain] + ')';
            console.log(villain + ',' + ennemis[villain]);

            break
        case 2:
            document.getElementById("interface").style.backgroundImage = 'url(' + ennemis[villain] + ')';
            console.log(villain + ',' + ennemis[villain]);

            break
        case 3:
            document.getElementById("interface").style.backgroundImage = 'url(' + ennemis[villain] + ')';
            console.log(villain + ',' + ennemis[villain]);

            break
    }
}


function ASTATIC() {
    document.getElementById("interface").innerHTML = '<img src=' + layton_anim[stactic].anim + '/>';
    setTimeout(ManaPlus, 1000);
    setTimeout(EnergiePlus, 2000)
}

function ADROITE() {
    document.getElementById("interface").innerHTML = '<img src=' + layton_anim[droite].anim + '/>'
}

function AGAUCHE() {
    document.getElementById("interface").innerHTML = '<img src=' + layton_anim[gauche].anim + '/>'
}

function ASAUT() {
    document.getElementById("interface").innerHTML = '<img src=' + layton_anim[saut].anim + '/>'
}

function AATTAQUE() {
    setTimeout(function a() {
        document.getElementById("interface").innerHTML += '<img id="attack" src=' + layton_anim[attaque].anim + '/>'
    }, 500)
    document.getElementById("attack").style.display = "none";

}

document.addEventListener('keydown', (event) => {
    const nomTouche = event.key;

    if (nomTouche === 'ArrowLeft') {
        document.getElementById("interface").style.backgroundColor = "blue";
        AGAUCHE();
        if (nomTouche === 'a') {
            document.getElementById("interface").innerHTML = '<div class="hit w3-animate-right"></div>';

            return;
        }
        return;
    }
    if (nomTouche === 'ArrowUp') {
        document.getElementById("interface").style.backgroundColor = "orange";
        ASAUT();
        if (nomTouche === 'a') {
            document.getElementById("interface").innerHTML = '<div class="hit w3-animate-bottom"></div>';

            return;
        }
        return;
    }
    if (nomTouche === 'ArrowRight') {
        document.getElementById("interface").style.backgroundColor = "red";
        ADROITE();
        if (nomTouche === 'a') {
            document.getElementById("interface").innerHTML = '<div class="hit w3-animate-left"></div>';

            return;
        }
        return;
    }
    if (nomTouche === 'a') {
        document.getElementById("interface").innerHTML = '<div class="hit"></div>';

        return;
    }
}, false);

document.addEventListener('keyup', (event) => {
    const nomTouche = event.key;
    document.getElementById("interface").style.backgroundColor = "rgb(201, 201, 201)";
    document.getElementById("interface").innerHTML = '';

}, false);