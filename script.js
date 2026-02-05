/* 🎵 Auto Play Music on First Click */
const music = document.getElementById("bgMusic");
document.body.addEventListener("click", () => {
  music.play();
}, { once: true });

/* 💕 Falling Hearts */
function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

/* 📸 Carousel */
let index = 0;
const images = document.querySelectorAll(".carousel img");

setInterval(() => {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
}, 2500);

/* 🎉 Confetti + Message */
document.getElementById("loveBtn").addEventListener("click", () => {
  document.getElementById("loveMsg").classList.toggle("hidden");
  confetti();
});

/* 🎊 Confetti Effect */
function confetti() {
  for (let i = 0; i < 50; i++) {
    const conf = document.createElement("span");
    conf.innerHTML = "💖";
    conf.style.position = "fixed";
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.top = "0px";
    conf.style.fontSize = "20px";
    document.body.appendChild(conf);

    conf.animate(
      [{ transform: "translateY(0)" }, { transform: "translateY(100vh)" }],
      { duration: 2000 }
    );

    setTimeout(() => conf.remove(), 2000);
  }
}

/* 🔗 Share Link */
document.getElementById("shareBtn").addEventListener("click", async () => {
  await navigator.share({
    title: "For My Valentine ❤️",
    text: "A little surprise made with love 💕",
    url: window.location.href
  });
});
