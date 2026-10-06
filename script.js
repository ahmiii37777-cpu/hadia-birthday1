/ Gallery Slider Management Logic
‎const wrapper = document.getElementById('slider-wrapper');
‎const prevBtn = document.getElementById('prev-slide');
‎const nextBtn = document.getElementById('next-slide');
‎let slideIndex = 0;
‎const totalSlides = 3;
‎
‎function updateSlider() {
‎    wrapper.style.transform = `translateX(-${slideIndex * 33.333}%)`;
‎}
‎
‎nextBtn.addEventListener('click', () => {
‎    slideIndex = (slideIndex + 1) % totalSlides;
‎    updateSlider();
‎});
‎
‎prevBtn.addEventListener('click', () => {
‎    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
‎    updateSlider();
‎});
‎
‎// Automatic Slide Change Every 4 Seconds
‎setInterval(() => {
‎    slideIndex = (slideIndex + 1) % totalSlides;
‎    updateSlider();
‎}, 4000);
‎
‎// Music Play/Pause & Mute Toggle Management
‎const audio = document.getElementById('romantic-music');
‎const playBtn = document.getElementById('play-btn');
‎const muteBtn = document.getElementById('mute-btn');
‎const statusText = document.getElementById('music-status');
‎
‎playBtn.addEventListener('click', () => {
‎    if (audio.paused) {
‎        audio.play().then(() => {
‎            statusText.innerHTML = `<i class="fa-solid fa-compact-disc fa-spin"></i> Playing Sweet Music... 🎵`;
‎            playBtn.innerHTML = `<i class="fa-solid fa-pause"></i> Pause`;
‎        }).catch(err => console.log("Audio play blocked by browser setup. Need interaction."));
‎    } else {
‎        audio.pause();
‎        statusText.innerHTML = `<i class="fa-solid fa-compact-disc"></i> Music is Paused`;
‎        playBtn.innerHTML = `<i class="fa-solid fa-play"></i> Play`;
‎    }
‎});
‎
‎muteBtn.addEventListener('click', () => {
‎    if (audio.muted) {
‎        audio.muted = false;
‎        muteBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i> Mute`;
‎    } else {
‎        audio.muted = true;
‎        muteBtn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i> Unmute`;
‎    }
‎});
‎
‎// Dynamic Love Quotes Rotation
‎const quotes = [
‎    "Hadia, aap meri zindagi ki sabse pyari khushi ho... ✨",
‎    "Meri har muskurahat aap hi se shuru hoti hai, Meri Jaan! 💕",
‎    "Duniya mein sabse khoobsurat cheez aapka sath hona hai... 🌸",
‎    "No matter what, my endless love belongs only to you! 🥹"
‎];
‎let quoteIndex = 0;
‎setInterval(() => {
‎    quoteIndex = (quoteIndex + 1) % quotes.length;
‎    document.getElementById('love-quote').innerText = quotes[quoteIndex];
‎}, 4500);
‎
‎// Procedural Particle Hearts Generator
‎function spawnHeart() {
‎    const heartObj = document.createElement('div');
‎    heartObj.classList.add('floating-heart');
‎    const heartIcons = ['❤️', '💖', '💝', '💕', '✨'];
‎    heartObj.innerText = heartIcons[Math.floor(Math.random() * heartIcons.length)];
‎    heartObj.style.left = Math.random() * 100 + 'vw';
‎    heartObj.style.animationDuration = Math.random() * 2 + 3 + 's';
‎    heartObj.style.fontSize = Math.random() * 12 + 15 + 'px';
‎    document.body.appendChild(heartObj);
‎    setTimeout(() => { heartObj.remove(); }, 4000);
‎}
‎setInterval(spawnHeart, 400);
