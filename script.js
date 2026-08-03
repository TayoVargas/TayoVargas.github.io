const pages = [
"Hay sueños que nunca desaparecen.",
"Sé que One Direction fue parte de una etapa muy especial para ti.",
"Sé que siempre soñaste con verlos en vivo... y ese momento nunca llegó.",
"También recuerdo que te hice una promesa: haría todo lo posible por cumplir tus sueños.",
"No puedo regresar el tiempo ni reunir a One Direction.",
"Pero sí puedo regalarte un pedacito de ese sueño. ❤️"
];

let i = -1;
let start = false;

const t = document.getElementById("text");
const b = document.getElementById("btn");
const m = document.getElementById("music");

function type(texto) {
    t.innerHTML = "";
    let n = 0;

    const escribir = setInterval(() => {
        t.innerHTML = texto.slice(0, n++);
        if (n > texto.length) {
            clearInterval(escribir);
        }
    }, 35);
}

b.onclick = async () => {

    if (!start) {
        start = true;
        b.textContent = "Continuar";

        try {
            await m.play();

            m.volume = 0;

            let volumen = 0;

            const fade = setInterval(() => {
                volumen += 0.02;
                m.volume = Math.min(volumen, 0.5);

                if (volumen >= 0.5) {
                    clearInterval(fade);
                }
            }, 100);

        } catch (e) {
            console.log(e);
        }
    }

    i++;

    if (i < pages.length) {
        type(pages[i]);
        return;
    }

    document.getElementById("story").classList.add("hide");
    document.getElementById("reveal").classList.remove("hide");

    const countdown = document.getElementById("countdown");
    const finalContent = document.getElementById("finalContent");
    const number = document.getElementById("number");

    countdown.classList.remove("hide");

    let c = 3;

    number.textContent = c;

    const intervalo = setInterval(() => {

        c--;

        if (c > 0) {

            number.textContent = c;

        } else {

            clearInterval(intervalo);

            flash();

            countdown.classList.add("hide");
            finalContent.classList.remove("hide");

            confetti();
        }

    }, 1000);

};

function flash() {

    const f = document.getElementById("flash");

    f.style.transition = "opacity .4s";

    f.style.opacity = 1;

    setTimeout(() => {
        f.style.opacity = 0;
    }, 400);

}

function confetti() {

    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const piezas = [];

    for (let i = 0; i < 180; i++) {

        piezas.push({
            x: Math.random() * canvas.width,
            y: -20,
            r: 2 + Math.random() * 5,
            dx: (Math.random() - 0.5) * 4,
            dy: 2 + Math.random() * 5
        });

    }

    function animar() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        piezas.forEach(p => {

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

            ctx.fillStyle = `hsl(${Math.random() * 360},100%,60%)`;
            ctx.fill();

            p.x += p.dx;
            p.y += p.dy;

        });

        requestAnimationFrame(animar);

    }

    animar();

}

window.addEventListener("resize", () => {

    const canvas = document.getElementById("confetti");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});
