const canvas = document.getElementById("gradient-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let colors = ["#ff758c", "#ff7eb3", "#ffa69e", "#ff9a9e"]; // Valentine theme
let gradient;

function createGradient() {
    gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(0.5, colors[1]);
    gradient.addColorStop(1, colors[2]);
    ctx.fillStyle = gradient;
}

function drawGradient() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function animateGradient() {
    colors.push(colors.shift());
    createGradient();
    drawGradient();
    setTimeout(animateGradient, 3000); // Smooth transition
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createGradient();
    drawGradient();
});

createGradient();
drawGradient();
animateGradient();
