const audio = document.querySelector('#audio');
const seekBar = document.querySelector('#seekBar');
const volumeBar = document.querySelector('#volumeBar');
const currentTime = document.querySelector('#currentTime');
const durationText = document.querySelector('#duration');
const trackRow = document.querySelector('.track-row');
const toast = document.querySelector('.toast');
const playButtons = document.querySelectorAll('[data-play]');

const formatTime = (seconds) => {
  if (!Number.isFinite(seconds)) return '0:00';
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remaining}`;
};

const paintRange = (range, percentage) => {
  range.style.setProperty('--progress', `${percentage}%`);
};

const setPlayingUI = (playing) => {
  document.body.classList.toggle('is-playing', playing);
  trackRow.classList.toggle('is-playing', playing);
  playButtons.forEach((button) => {
    button.setAttribute('aria-label', playing ? 'Jeda' : 'Putar');
    const label = button.querySelector('span:not(.brand-mark)');
    if (label && (label.textContent.includes('Putar') || label.textContent.includes('Jeda'))) {
      label.textContent = playing ? 'Jeda lagu' : 'Putar lagu';
    }
  });
};

const togglePlayback = async () => {
  try {
    if (audio.paused) await audio.play();
    else audio.pause();
  } catch (error) {
    toast.textContent = 'Browser belum mengizinkan audio diputar.';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2400);
  }
};

playButtons.forEach((button) => button.addEventListener('click', togglePlayback));
audio.addEventListener('play', () => setPlayingUI(true));
audio.addEventListener('pause', () => setPlayingUI(false));
audio.addEventListener('ended', () => setPlayingUI(false));

audio.addEventListener('loadedmetadata', () => {
  seekBar.max = audio.duration;
  durationText.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
  seekBar.value = audio.currentTime;
  currentTime.textContent = formatTime(audio.currentTime);
  paintRange(seekBar, (audio.currentTime / audio.duration) * 100 || 0);
});

seekBar.addEventListener('input', () => {
  audio.currentTime = Number(seekBar.value);
  paintRange(seekBar, (seekBar.value / seekBar.max) * 100);
});

audio.volume = Number(volumeBar.value);
volumeBar.addEventListener('input', () => {
  audio.volume = Number(volumeBar.value);
  audio.muted = false;
  paintRange(volumeBar, Number(volumeBar.value) * 100);
});

document.querySelector('#muteButton').addEventListener('click', () => {
  audio.muted = !audio.muted;
  paintRange(volumeBar, audio.muted ? 0 : Number(volumeBar.value) * 100);
});

document.querySelector('#restartButton').addEventListener('click', () => {
  audio.currentTime = 0;
  if (audio.paused) togglePlayback();
});

document.querySelector('#forwardButton').addEventListener('click', () => {
  audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 10);
});

document.querySelector('#repeatButton').addEventListener('click', (event) => {
  audio.loop = !audio.loop;
  event.currentTarget.classList.toggle('enabled', audio.loop);
});

document.querySelector('#shuffleButton').addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('enabled');
});

document.querySelectorAll('.like-button').forEach((button) => {
  button.addEventListener('click', () => {
    const liked = !button.classList.contains('liked');
    document.querySelectorAll('.like-button').forEach((item) => {
      item.classList.toggle('liked', liked);
      item.setAttribute('aria-pressed', liked);
    });
    toast.textContent = liked ? 'Ditambahkan ke favorit' : 'Dihapus dari favorit';
    toast.classList.add('show');
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
  });
});

const searchInput = document.querySelector('#searchInput');
const emptySearch = document.querySelector('.empty-search');
searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  const visible = 'hltc x so asu'.includes(query);
  trackRow.hidden = !visible;
  emptySearch.hidden = visible;
});

document.addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.code === 'Space' && document.activeElement.tagName !== 'INPUT') {
    event.preventDefault();
    togglePlayback();
  }
});
