const openBtn = document.getElementById('openBtn');
const messageBox = document.getElementById('messageBox');
const bgMusic = document.getElementById('bgMusic');

openBtn.addEventListener('click', function() {
    messageBox.classList.remove('hidden');
    bgMusic.play();
    openBtn.style.display = 'none';
});
