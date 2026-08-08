 document.getElementById('year').textContent = new Date().getFullYear();
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

const PLAY_PATH  = 'M8 5v14l11-7z';
const PAUSE_PATH = 'M6 5h4v14H6zM14 5h4v14h-4z';

document.querySelectorAll('.reel-card').forEach(card => {
  const video = card.querySelector('.video');
  const playButton = card.querySelector('.play-btn');
  const iconPath = playButton.querySelector('svg path');

  function toggle(e){
    e.stopPropagation();
    if (video.paused) {
      video.play();
      iconPath.setAttribute('d', PAUSE_PATH);
    } else {
      video.pause();
      iconPath.setAttribute('d', PLAY_PATH);
    }
  }

  playButton.addEventListener('click', toggle);
  video.addEventListener('click', toggle);
  video.addEventListener('ended', () => iconPath.setAttribute('d', PLAY_PATH));
});