botonContinuar = document.getElementById("continuar")
contenedorTexto = document.getElementById("contenedor-texto")
contenedorRegalo = document.getElementById("contenedor-regalos")
contenedorBoton = document.getElementById("contenedor-boton")
modalRegalo = document.getElementById("modal-regalo")
listaDeTextos = ["Estamos muy orgullosos de ti. ", "Siempre has dado todo por cuidarnos y todo lo que tenemos y lo que somos es gracias a TI.",
    "Tenemos la suerte de tener la mejor madre del mundo. TE QUEREMOS ❤️"]
numeroDeTexto = 0


botonContinuar.addEventListener("click", cambiarTexto)

function mostrarModalRegalo() {
    modalRegalo.classList.toggle("oculto")
    launchConfetti()
}

function desvelarRegalo(img) {
    if (parseInt(img.id) === 13) mostrarModalRegalo()

    else img.src = "regaloVacio.jpg"
}

function mostrarCajaRegalos() {

    for (let i = 1; i <= 21; i++) {

        const regaloWrapper = document.createElement("div");
        regaloWrapper.className = "regalo-wrapper";

        const img = document.createElement("img")
        img.src = "regalo.png"
        img.alt = ""
        img.className = "regalos"
        img.id = i.toString()

        const num = document.createElement("p")
        num.textContent = i.toString()
        num.id = "texto"
        num.className = "regalo-numero"

        regaloWrapper.appendChild(img)
        regaloWrapper.appendChild(num)

        contenedorRegalo.appendChild(regaloWrapper)
        img.addEventListener("click", () => desvelarRegalo(img))
    }
}

function cambiarTexto(){
    if (numeroDeTexto < listaDeTextos.length) {
        contenedorTexto.innerHTML = ""

        let texto = listaDeTextos[numeroDeTexto]

        let p = document.createElement("p")
        p.textContent = texto
        p.id = "texto"

        contenedorTexto.appendChild(p)
    }

    numeroDeTexto++

    if (numeroDeTexto === listaDeTextos.length+1 ){
        contenedorBoton.innerHTML = ""
        contenedorTexto.innerHTML = '<p id="texto">ENCUENTRA TU REGALO DE NAVIDAD</p>'
        mostrarCajaRegalos()
    }
}

const CONFETTI_COLORS = [
    "#C0392B",
    "#27AE60",
    "#F4D03F",
    "white"
];

function launchConfetti() {
    const confettiContainer = document.body;
    const numberOfPieces = 120;

    const BASE_CENTER_X = 50;
    const BASE_CENTER_Y = 50;

    const DISPERSION_RADIUS = 30;

    for (let i = 0; i < numberOfPieces; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti';

        const cornerIndex = i % 4;
        let startX, startY;

        if (cornerIndex === 0) {
            startX = Math.random() * 5;
            startY = Math.random() * 5;
        } else if (cornerIndex === 1) {
            startX = 95 + Math.random() * 5;
            startY = Math.random() * 5;
        } else if (cornerIndex === 2) {
            startX = Math.random() * 5;
            startY = 95 + Math.random() * 5;
        } else {
            startX = 95 + Math.random() * 5;
            startY = 95 + Math.random() * 5;
        }

        const targetX = BASE_CENTER_X + (Math.random() * DISPERSION_RADIUS * 2) - DISPERSION_RADIUS;
        const targetY = BASE_CENTER_Y + (Math.random() * DISPERSION_RADIUS * 2) - DISPERSION_RADIUS;


        piece.style.left = startX + 'vw';
        piece.style.top = startY + 'vh';

        piece.style.setProperty('--start-x', startX + 'vw');
        piece.style.setProperty('--start-y', startY + 'vh');


        piece.style.setProperty('--target-x', targetX + 'vw');
        piece.style.setProperty('--target-y', targetY + 'vh');


        piece.style.backgroundColor = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
        piece.style.animationDuration = Math.random() * 1.5 + 2 + 's';
        piece.style.animationDelay = Math.random() * 0.5 + 's';
        piece.style.width = Math.random() * 10 + 5 + 'px';
        piece.style.height = Math.random() * 15 + 5 + 'px';

        confettiContainer.appendChild(piece);
    }


    setTimeout(() => {
        document.querySelectorAll('.confetti').forEach(c => c.remove());
    }, 4000);
}

