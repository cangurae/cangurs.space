const audio = new Audio('files/bgaudio.mp3');
audio.volume = 0.12;

audio.addEventListener('ended', () => {
    document.getElementById('play').src = '/files/play.png';
});

function hideOverlay() {
    const overlay = document.querySelector('.overlay');
    const mainContent = document.querySelector('main');

    if (overlay.classList.contains('is-hiding')) return;

    audio.play();

    overlay.classList.add('is-hiding');
    mainContent.style.display = 'block';

    overlay.addEventListener('transitionend', () => {
        overlay.style.display = 'none';
    }, { once: true });
}

function discord() {
    navigator.clipboard.writeText('490557374893916174');
    alert('Copied user ID to clipboard!');
}

function muteplay() {
    const przycisk = document.getElementById('play');
    
    if (audio.paused) {
        audio.play();
        przycisk.src = "/files/pause.png";
    } else {
        audio.pause();
        przycisk.src = "/files/play.png";
    }
}



function setVolume(val) {
    audio.volume = val
}
