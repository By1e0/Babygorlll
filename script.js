let step = 0; // Schritt-Zähler für den "Nein"-Button

// Ja-Button: Overlay anzeigen und Musik starten
document.getElementById("yesButton").addEventListener("click", function() {
    document.querySelector(".container").style.display = "none";
    document.getElementById("overlay").classList.add("visible");

    const music = document.getElementById("backgroundMusic");
    music.volume = 1;
    music.play();

    setTimeout(() => {
        document.getElementById("firstMessage").classList.add("hidden");
        document.getElementById("secondMessage").classList.remove("hidden");

        const fadeAudio = setInterval(() => {
            if (music.volume > 0.05) {
                music.volume -= 0.05;
            } else {
                music.pause();
                clearInterval(fadeAudio);
            }
        }, 500);
    }, 40000);
});

// Nein-Button: Bewegt sich in einer festen Route
document.getElementById("noButton").addEventListener("mouseover", function() {
    const button = this;
    const moves = [
        "translateX(100px)",
        "translateY(-50px)",
        "translateX(-100px)",
        "translateY(50px)",
        "translate(0, 0)"
    ];
    button.style.transform = moves[step];
    step = (step + 1) % 5;
});

// Countdown-Funktion
function updateCountdown() {
    const now = new Date();
    let valentinesDay = new Date(now.getFullYear(), 1, 14);
    
    if (now > valentinesDay) {
        valentinesDay.setFullYear(now.getFullYear() + 1);
    }

    const diff = valentinesDay - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown-overlay").innerText = 
        `Valentinstag in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Countdown sofort starten und jede Sekunde aktualisieren
setInterval(updateCountdown, 1000);
updateCountdown();
