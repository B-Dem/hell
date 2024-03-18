//comments obvi
const subtitles = [
    "welcome to hell",
    "Re-Hosted By Memz",
    "Memz On Top !",
    "Hell is fun (The Website)",
    "Want a Discord server ?",
];

function xd() {
    const subtitleElement = document.getElementById("subtitle");
    const randomIndex = Math.floor(Math.random() * subtitles.length);
    const randomSubtitle = subtitles[randomIndex];
    subtitleElement.textContent = randomSubtitle;
}

xd();
setInterval(updateSubtitle, 10);
