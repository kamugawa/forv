// Music Player Controls
document.addEventListener('DOMContentLoaded', () => {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;

    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicToggle.querySelector('span').textContent = 'Play Music';
        } else {
            bgMusic.play();
            musicToggle.querySelector('span').textContent = 'Pause Music';
        }
        isPlaying = !isPlaying;
    });
});