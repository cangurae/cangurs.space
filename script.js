function hideOverlay() {
    const overlay = document.querySelector('.overlay');
    const mainContent = document.querySelector('main');

    if (overlay.classList.contains('is-hiding')) return;

    const audio = new Audio('files/bgaudio.mp3');
    audio.volume = 0.3;
    audio.play();

    overlay.classList.add('is-hiding');
    mainContent.style.display = 'block';

    overlay.addEventListener('transitionend', () => {
        overlay.style.display = 'none';
    }, { once: true });
}

function discord() {
    navigator.clipboard.writeText('490557374893916174')
    alert('Copied user ID to clipbord!')
}