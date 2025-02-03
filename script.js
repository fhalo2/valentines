let yesButtonSize = 18; // Initial size
let growthFactor = 1.7; // Adjusted for more controlled growth
let maxSize = 200; // Prevents excessive size
let currentImageIndex = 0;

// **Updated Image Links**
const snoopyImages = [
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/snoopy-sad-scott-k-wild.jpg",
    "https://cdn.theatlantic.com/thumbor/iRIVzWCrLxABf1kjfzOSnIde070=/801x0:3363x2562/1080x1080/media/img/2015/09/BOB_Boxer_Peanuts_Opener_HP/original.jpg",
    "https://render.fineartamerica.com/images/rendered/default/flat/puzzle/images/artworkimages/medium/3/snoopy-sad-patricia-l-sexton-transparent.png?&targetx=207&targety=53&imagewidth=586&imageheight=644&modelwidth=1000&modelheight=750&backgroundcolor=ffffff&orientation=0&producttype=puzzle-18-24&brightness=765&v=6",
    "https://media.tenor.com/m1TvHNAFXYcAAAAe/byuntear-snoopy.png"
    ];

// **Default Snoopy Image**
document.getElementById("snoopy-img").src = "https://cdn.inspireuplift.com/uploads/images/seller_products/44919/1707538401_1801241048-snoopy-woodstock-heart-valentine-couple-svg-1801241048png.png";

// **Happy Snoopy Image when "Yes" is Clicked**
const happySnoopy = "https://images.fineartamerica.com/images/artworkimages/medium/3/snoopy-woodstock-love-kelli-p-holt-transparent.png";

// **Function to increase "Yes" button size & cycle sad Snoopy images when "No" is clicked**
function makeYesBigger() {
    if (yesButtonSize < maxSize) {
        yesButtonSize *= growthFactor; // Controlled growth
    }
    document.getElementById("yes-btn").style.fontSize = yesButtonSize + "px";
    document.getElementById("yes-btn").style.padding = (yesButtonSize / 5) + "px"; // Adjust padding proportionally

    currentImageIndex = (currentImageIndex + 1) % snoopyImages.length;
    document.getElementById("snoopy-img").src = snoopyImages[currentImageIndex];
}

// **Function to show happy Snoopy & trigger confetti when "Yes" is clicked**
function sayYes() {
    document.getElementById("snoopy-img").src = happySnoopy;
    document.querySelector("h1").innerText = "Yay! You're my Valentine! 💖";
    document.getElementById("no-btn").style.display = "none";

    triggerConfetti(); // 🎊 Trigger confetti!
}

// **Confetti Animation**
function triggerConfetti() {
    const confettiContainer = document.createElement("div");
    confettiContainer.classList.add("confetti-container");
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
        confetti.style.backgroundColor = Math.random() < 0.5 ? "#ff4d6d" : "#ff85a1"; // Pink & Red Confetti
        confettiContainer.appendChild(confetti);
    }

    // Remove confetti after animation completes
    setTimeout(() => {
        confettiContainer.remove();
    }, 5000);
}
