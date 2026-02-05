// Typewriter effect for landing page
const text = "Welcome to Leafy Hub";
let i = 0;

function typeEffect() {
  if(i < text.length){
    document.getElementById("type").textContent += text[i];
    i++;
    setTimeout(typeEffect, 80);
  }
}
typeEffect();

// Tween / fade effect to hub
function goToHub(){
  const landing = document.getElementById("landing");
  const hub = document.getElementById("hub");

  // fade out landing
  landing.style.opacity = 0;
  setTimeout(() => {
    landing.style.display = "none";
    // show hub
    hub.style.display = "block";
    hub.style.opacity = 0;

    // tween fade in
    let opacity = 0;
    const fade = setInterval(() => {
      if(opacity >= 1) clearInterval(fade);
      opacity += 0.05;
      hub.style.opacity = opacity;
    }, 20);
  }, 600);
}

// copy code logic
function copyCode(){
  const code = document.getElementById("code").innerText;
  navigator.clipboard.writeText(code);

  const status = document.getElementById("status");
  status.textContent = "✅ Script copied to clipboard";
}
