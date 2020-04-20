const vibes = ["...Hi there", "...You are awesome", "...Wow", "...Amazing"];

const vibe = vibes[Math.floor(Math.random() * vibes.length)];

document.querySelector(".vibe").append(vibe);
