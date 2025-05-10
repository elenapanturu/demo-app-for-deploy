const messages = [
    "Drink your daily water ratio. 💧",
    "The horror persists but so do I. 😊",
    "When I'm struggling but remember there's always phone time in bed at the end of the day. 🛋️",
    "You got this. 🔥",
    "Touching grass isn't enough. I need bad things to happen to evil men in power 💜",
    "Be brave. Be silly. 🐣",
    "Your vibe attracts your tribe. 🌿",
    "Born to jest, forced to joust. ☀️",
    "Slayin' n' playin'. 🔪",
  ];
  
  let currentRotation = 0;

function spin() {
  const wheel = document.getElementById("wheel");
  const messageBox = document.getElementById("message");

  const segment = Math.floor(Math.random() * messages.length);
  const angle = 360 / messages.length;
  const rotation = 360 * 3 + segment * angle;

  currentRotation += rotation;

  wheel.style.transform = `rotate(${currentRotation}deg)`;

  setTimeout(() => {
    messageBox.textContent = messages[segment];
  }, 2000);
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}
