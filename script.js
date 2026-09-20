const tracks = [
  { id: 'special', title: 'Special Song', artist: '510 · Exclusive', album: 'Special Release', year: 2026, duration: '0:56', seconds: 56, group: 'latest', cover: 'assets/510-current.webp', local: true, order: 20 },
  { id: 'heavy-lies-the-crown', title: 'Heavy Lies The Crown', artist: '510', album: 'Single', year: 2026, duration: '4:20', group: 'latest', cover: 'assets/510-current.webp', spotify: 'https://open.spotify.com/search/510%20Heavy%20Lies%20The%20Crown', order: 19 },
  { id: 'esa-x-perih', title: 'ESA X PERIH', artist: '510, Vierratale', album: 'Single', year: 2026, duration: '4:12', group: 'latest', cover: 'assets/esa.jpg', spotify: 'https://open.spotify.com/search/510%20ESA%20X%20PERIH', order: 18 },
  { id: 'your-song', title: 'Your Song', artist: '510', album: 'Get Closer with 510', year: 2021, duration: '3:20', group: 'get-closer', cover: 'assets/get-closer.jpg', spotify: 'https://open.spotify.com/track/7ucGzV0yQJHMi6AE89V9xk', order: 0.9 },
  { id: 'deeper-than-the-ocean', title: 'Deeper Than The Ocean', artist: '510, Mustika Kamal', album: 'Get Closer with 510', year: 2021, duration: '4:34', group: 'get-closer', cover: 'assets/get-closer.jpg', spotify: 'https://open.spotify.com/search/510%20Deeper%20Than%20The%20Ocean', order: 0.8 },
  { id: 'alive-get-closer', title: 'Alive (Get Closer Version)', artist: '510, Andi Cakcak', album: 'Get Closer with 510', year: 2021, duration: '5:18', group: 'get-closer', cover: 'assets/get-closer.jpg', spotify: 'https://open.spotify.com/intl-id/track/0akbT3Ny7EhBM43TQa9n2m', order: 0.7 },
  { id: 'devils-need', title: "Devil's Need", artist: '510', album: 'Get Closer with 510', year: 2021, duration: '4:16', group: 'get-closer', cover: 'assets/get-closer.jpg', spotify: 'https://open.spotify.com/search/510%20Devil%27s%20Need', order: 0.6 },
  { id: 'ritual', title: 'Ritual', artist: '510', album: 'Spiritual', year: 2025, duration: '5:54', group: 'spiritual', cover: 'assets/spiritual.jpg', spotify: 'https://open.spotify.com/album/4Y6Ibp400mFwp0NCeD9YDF', order: 17 },
  { id: 'mimbar', title: 'Mimbar', artist: '510', album: 'Spiritual', year: 2025, duration: '4:46', group: 'spiritual', cover: 'assets/spiritual.jpg', spotify: 'https://open.spotify.com/album/4Y6Ibp400mFwp0NCeD9YDF', order: 16 },
  { id: 'dead-clown', title: 'Dead Clown', artist: '510, Bimopd', album: 'Spiritual', year: 2025, duration: '3:21', group: 'spiritual', cover: 'assets/spiritual.jpg', spotify: 'https://open.spotify.com/album/4Y6Ibp400mFwp0NCeD9YDF', order: 15 },
  { id: 'amo', title: 'AMO', artist: '510, Fanny Soegi', album: 'Spiritual', year: 2025, duration: '3:52', group: 'spiritual', cover: 'assets/spiritual.jpg', spotify: 'https://open.spotify.com/album/4Y6Ibp400mFwp0NCeD9YDF', order: 14 },
  { id: 'plastic-faith', title: 'Plastic Faith', artist: '510', album: 'Spiritual', year: 2025, duration: '4:18', group: 'spiritual', cover: 'assets/spiritual.jpg', spotify: 'https://open.spotify.com/album/4Y6Ibp400mFwp0NCeD9YDF', order: 13 },
  { id: 'r-u-broken-2', title: 'R U Broken 2?', artist: '510', album: 'Spiritual', year: 2025, duration: '4:52', group: 'spiritual', cover: 'assets/spiritual.jpg', spotify: 'https://open.spotify.com/album/4Y6Ibp400mFwp0NCeD9YDF', order: 12 },
  { id: 'where-do-we-came-from', title: 'WhereDoWeCameFrom', artist: '510', album: 'Origin', year: 2023, duration: '2:41', group: 'origin', cover: 'assets/origin.jpg', spotify: 'https://open.spotify.com/album/2K5MDbmwFbUulGB2Wsc1dG', order: 11 },
  { id: 'collapsed', title: 'Collapsed', artist: '510', album: 'Origin', year: 2021, duration: '3:45', group: 'origin', cover: 'assets/origin.jpg', spotify: 'https://open.spotify.com/album/2K5MDbmwFbUulGB2Wsc1dG', order: 10 },
  { id: 'the-last-suffer', title: 'The Last Suffer', artist: '510', album: 'Origin', year: 2021, duration: '3:57', group: 'origin', cover: 'assets/origin.jpg', spotify: 'https://open.spotify.com/album/2K5MDbmwFbUulGB2Wsc1dG', order: 9 },
  { id: 'death-parade', title: 'Death Parade', artist: '510', album: 'Origin', year: 2023, duration: '3:33', group: 'origin', cover: 'assets/origin.jpg', spotify: 'https://open.spotify.com/album/2K5MDbmwFbUulGB2Wsc1dG', order: 8 },
  { id: 'mama', title: 'Mama', artist: '510', album: 'Origin', year: 2023, duration: '4:02', group: 'origin', cover: 'assets/origin.jpg', spotify: 'https://open.spotify.com/album/2K5MDbmwFbUulGB2Wsc1dG', order: 7 },
  { id: 're-mine', title: 'Re-Mine', artist: '510', album: 'Origin', year: 2023, duration: '3:47', group: 'origin', cover: 'assets/origin.jpg', spotify: 'https://open.spotify.com/album/2K5MDbmwFbUulGB2Wsc1dG', order: 6 },
  { id: 'sorry', title: 'Sorry', artist: '510', album: 'Origin', year: 2023, duration: '4:28', group: 'origin', cover: 'assets/origin.jpg', spotify: 'https://open.spotify.com/album/2K5MDbmwFbUulGB2Wsc1dG', order: 5 },
  { id: 'esa', title: 'Esa', artist: '510', album: 'Origin', year: 2023, duration: '4:00', group: 'origin', cover: 'assets/origin.jpg', spotify: 'https://open.spotify.com/album/2K5MDbmwFbUulGB2Wsc1dG', order: 4 },
  { id: 'alive', title: 'Alive', artist: '510', album: 'Origin', year: 2021, duration: '4:11', group: 'origin', cover: 'assets/origin.jpg', spotify: 'https://open.spotify.com/album/2K5MDbmwFbUulGB2Wsc1dG', order: 3 },
  { id: 'callout', title: 'Callout', artist: '510', album: 'Origin', year: 2023, duration: '3:35', group: 'origin', cover: 'assets/origin.jpg', spotify: 'https://open.spotify.com/album/2K5MDbmwFbUulGB2Wsc1dG', order: 2 },
  { id: 'emotional-renegades', title: 'Emotional Renegades', artist: '510', album: 'Origin', year: 2022, duration: '3:00', group: 'origin', cover: 'assets/origin.jpg', spotify: 'https://open.spotify.com/album/2K5MDbmwFbUulGB2Wsc1dG', order: 1 }
];

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const byId = (id) => tracks.find((track) => track.id === id);
const safeParse = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
};

const state = {
  filter: 'all',
  query: '',
  newestFirst: true,
  favoritesOnly: false,
  favorites: new Set(safeParse('510-favorites', [])),
  queue: safeParse('510-queue', []).filter((id) => byId(id)),
  currentId: 'special',
  menuTrackId: null
};

const audio = $('#audio');
const trackList = $('#trackList');
const emptyState = $('#emptyState');
const visibleCount = $('#visibleCount');
const contextMenu = $('#contextMenu');
const queueDrawer = $('#queueDrawer');
const drawerScrim = $('#drawerScrim');
const queueList = $('#queueList');
const seekBar = $('#seekBar');
const volumeBar = $('#volumeBar');
let toastTimer;

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2100);
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00';
  return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;
}

function paintRange(input, percent) {
  input.style.setProperty('--progress', `${Math.max(0, Math.min(100, percent))}%`);
}

function visibleTracks() {
  const query = state.query.toLowerCase();
  return tracks
    .filter((track) => state.filter === 'all' || track.group === state.filter)
    .filter((track) => !state.favoritesOnly || state.favorites.has(track.id))
    .filter((track) => `${track.title} ${track.artist} ${track.album} ${track.year}`.toLowerCase().includes(query))
    .sort((a, b) => {
      if (a.id === 'special') return -1;
      if (b.id === 'special') return 1;
      return state.newestFirst ? b.order - a.order : a.order - b.order;
    });
}

function renderTracks() {
  const list = visibleTracks();
  visibleCount.textContent = list.length;
  emptyState.hidden = list.length > 0;
  trackList.innerHTML = list.map((track, index) => `
    <article class="track-row${state.currentId === track.id ? ' current' : ''}" data-track-id="${track.id}">
      <div class="track-number">
        <span>${String(index + 1).padStart(2, '0')}</span>
        <button type="button" data-play-track="${track.id}" aria-label="${track.local ? 'Putar' : 'Buka'} ${track.title}">
          <svg viewBox="0 0 24 24"><path d="m8 5 11 7-11 7z"/></svg>
        </button>
      </div>
      <div class="track-title">
        <img class="track-cover" src="${track.cover}" alt="" loading="lazy">
        <div><strong>${track.title}${track.local ? '<span class="track-badge">TOP</span>' : ''}</strong><small>${track.artist}</small></div>
      </div>
      <span class="track-album">${track.album}</span>
      <span class="track-year">${track.year}</span>
      <span class="track-duration">${track.duration}</span>
      <button class="more-button" type="button" data-menu-track="${track.id}" aria-label="Opsi ${track.title}">•••</button>
    </article>`).join('');
}

function updatePlayer(track) {
  state.currentId = track.id;
  $('#playerCover').src = track.cover;
  $('#playerTitle').textContent = track.title;
  $('#playerArtist').textContent = track.artist;
  $('#duration').textContent = track.duration;
  $('#likeCurrent').classList.toggle('liked', state.favorites.has(track.id));
  renderTracks();
}

async function playTrack(track, openExternal = true) {
  updatePlayer(track);
  if (!track.local) {
    audio.pause();
    document.body.classList.remove('playing');
    seekBar.value = 0;
    $('#currentTime').textContent = '0:00';
    paintRange(seekBar, 0);
    if (openExternal && track.spotify) window.open(track.spotify, '_blank', 'noopener,noreferrer');
    showToast(`${track.title} dibuka melalui Spotify`);
    return;
  }
  try {
    await audio.play();
  } catch {
    showToast('Tekan tombol play sekali lagi untuk memulai audio.');
  }
}

async function toggleCurrent() {
  const track = byId(state.currentId);
  if (!track.local) return playTrack(track, true);
  if (audio.paused) await playTrack(track, false);
  else audio.pause();
}

function setFilter(filter) {
  state.filter = filter;
  state.favoritesOnly = false;
  $$('.chip').forEach((chip) => chip.classList.toggle('active', chip.dataset.filter === filter));
  $('#favoriteNav').classList.remove('active');
  renderTracks();
  $('#catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function saveFavorites() {
  localStorage.setItem('510-favorites', JSON.stringify([...state.favorites]));
}

function toggleFavorite(id) {
  const track = byId(id);
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    showToast(`${track.title} dihapus dari favorit`);
  } else {
    state.favorites.add(id);
    showToast(`${track.title} ditambahkan ke favorit`);
  }
  saveFavorites();
  $('#likeCurrent').classList.toggle('liked', state.favorites.has(state.currentId));
  renderTracks();
}

function saveQueue() {
  localStorage.setItem('510-queue', JSON.stringify(state.queue));
  $$('.queue-count').forEach((badge) => badge.textContent = state.queue.length);
}

function addToQueue(id) {
  if (!state.queue.includes(id)) state.queue.push(id);
  saveQueue();
  renderQueue();
  showToast(`${byId(id).title} masuk ke antrean`);
}

function renderQueue() {
  if (!state.queue.length) {
    queueList.innerHTML = '<p class="queue-empty">Antrean masih kosong.<br>Tambahkan lagu melalui menu •••</p>';
    return;
  }
  queueList.innerHTML = state.queue.map((id) => {
    const track = byId(id);
    return `<div class="queue-item" data-queue-id="${id}"><img src="${track.cover}" alt=""><div><strong>${track.title}</strong><span>${track.artist} · ${track.duration}</span></div><button type="button" data-remove-queue="${id}" aria-label="Hapus ${track.title}">×</button></div>`;
  }).join('');
}

function openQueue() {
  renderQueue();
  queueDrawer.classList.add('open');
  queueDrawer.setAttribute('aria-hidden', 'false');
  drawerScrim.hidden = false;
  document.body.classList.add('no-scroll');
}

function closeQueue() {
  queueDrawer.classList.remove('open');
  queueDrawer.setAttribute('aria-hidden', 'true');
  drawerScrim.hidden = true;
  document.body.classList.remove('no-scroll');
}

function openMenu(button, id) {
  state.menuTrackId = id;
  const rect = button.getBoundingClientRect();
  contextMenu.hidden = false;
  contextMenu.style.top = `${Math.min(rect.bottom + 6, innerHeight - 185)}px`;
  contextMenu.style.left = `${Math.max(10, Math.min(rect.right - 195, innerWidth - 205))}px`;
  $$('.more-button').forEach((item) => item.classList.toggle('open', item === button));
  const favoriteButton = $('[data-menu-action="favorite"]');
  favoriteButton.innerHTML = state.favorites.has(id) ? '<span>♥</span> Hapus dari favorit' : '<span>♡</span> Tambah ke favorit';
}

function closeMenu() {
  contextMenu.hidden = true;
  $$('.more-button').forEach((item) => item.classList.remove('open'));
}

trackList.addEventListener('click', (event) => {
  const playButton = event.target.closest('[data-play-track]');
  const menuButton = event.target.closest('[data-menu-track]');
  if (playButton) playTrack(byId(playButton.dataset.playTrack), true);
  if (menuButton) {
    event.stopPropagation();
    openMenu(menuButton, menuButton.dataset.menuTrack);
  }
});

contextMenu.addEventListener('click', async (event) => {
  const actionButton = event.target.closest('[data-menu-action]');
  if (!actionButton || !state.menuTrackId) return;
  const track = byId(state.menuTrackId);
  const action = actionButton.dataset.menuAction;
  if (action === 'favorite') toggleFavorite(track.id);
  if (action === 'queue') addToQueue(track.id);
  if (action === 'spotify') {
    if (track.spotify) window.open(track.spotify, '_blank', 'noopener,noreferrer');
    else showToast('Special Song hanya tersedia di player ini.');
  }
  if (action === 'share') {
    const url = track.spotify || location.href;
    try {
      if (navigator.share) await navigator.share({ title: `${track.title} — 510`, url });
      else {
        await navigator.clipboard.writeText(url);
        showToast('Tautan lagu disalin.');
      }
    } catch (error) {
      if (error.name !== 'AbortError') showToast('Tautan belum dapat dibagikan.');
    }
  }
  closeMenu();
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('#contextMenu') && !event.target.closest('[data-menu-track]')) closeMenu();
});

$$('.chip').forEach((chip) => chip.addEventListener('click', () => setFilter(chip.dataset.filter)));
$$('[data-filter-side]').forEach((button) => button.addEventListener('click', () => setFilter(button.dataset.filterSide)));
$$('[data-album-filter]').forEach((button) => button.addEventListener('click', () => setFilter(button.dataset.albumFilter)));

$('#favoriteNav').addEventListener('click', () => {
  state.favoritesOnly = !state.favoritesOnly;
  state.filter = 'all';
  $('#favoriteNav').classList.toggle('active', state.favoritesOnly);
  $$('.chip').forEach((chip) => chip.classList.remove('active'));
  renderTracks();
  $('#catalog').scrollIntoView({ behavior: 'smooth' });
});

$('#searchInput').addEventListener('input', (event) => {
  state.query = event.target.value.trim();
  renderTracks();
  if (state.query) $('#catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

$('#sortButton').addEventListener('click', () => {
  state.newestFirst = !state.newestFirst;
  $('#sortButton span').textContent = state.newestFirst ? 'Terbaru' : 'Terlama';
  renderTracks();
});

$$('.queue-trigger').forEach((button) => button.addEventListener('click', openQueue));
$('#closeQueue').addEventListener('click', closeQueue);
drawerScrim.addEventListener('click', closeQueue);
$('#clearQueue').addEventListener('click', () => {
  state.queue = [];
  saveQueue();
  renderQueue();
  showToast('Antrean dikosongkan.');
});

queueList.addEventListener('click', (event) => {
  const remove = event.target.closest('[data-remove-queue]');
  if (remove) {
    state.queue = state.queue.filter((id) => id !== remove.dataset.removeQueue);
    saveQueue();
    renderQueue();
    return;
  }
  const item = event.target.closest('[data-queue-id]');
  if (item) {
    playTrack(byId(item.dataset.queueId), true);
    closeQueue();
  }
});

$('#likeCurrent').addEventListener('click', () => toggleFavorite(state.currentId));
$('#mainPlay').addEventListener('click', toggleCurrent);
$$('[data-play-special]').forEach((button) => button.addEventListener('click', () => playTrack(byId('special'), false)));

$('#previousButton').addEventListener('click', () => {
  const index = tracks.findIndex((track) => track.id === state.currentId);
  playTrack(tracks[(index - 1 + tracks.length) % tracks.length], true);
});

$('#nextButton').addEventListener('click', () => {
  if (state.queue.length) {
    const nextId = state.queue.shift();
    saveQueue();
    renderQueue();
    playTrack(byId(nextId), true);
    return;
  }
  const index = tracks.findIndex((track) => track.id === state.currentId);
  playTrack(tracks[(index + 1) % tracks.length], true);
});

$('#shuffleButton').addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('enabled');
  const candidates = tracks.filter((track) => track.id !== state.currentId);
  const randomTrack = candidates[Math.floor(Math.random() * candidates.length)];
  updatePlayer(randomTrack);
  showToast(`Pilihan acak: ${randomTrack.title}`);
});

$('#repeatButton').addEventListener('click', (event) => {
  audio.loop = !audio.loop;
  event.currentTarget.classList.toggle('enabled', audio.loop);
  showToast(audio.loop ? 'Ulangi lagu aktif' : 'Ulangi lagu nonaktif');
});

audio.volume = Number(volumeBar.value);
paintRange(volumeBar, 80);
audio.addEventListener('play', () => document.body.classList.add('playing'));
audio.addEventListener('pause', () => document.body.classList.remove('playing'));
audio.addEventListener('loadedmetadata', () => {
  seekBar.max = audio.duration;
  $('#duration').textContent = formatTime(audio.duration);
});
audio.addEventListener('timeupdate', () => {
  seekBar.value = audio.currentTime;
  $('#currentTime').textContent = formatTime(audio.currentTime);
  paintRange(seekBar, (audio.currentTime / audio.duration) * 100 || 0);
});
seekBar.addEventListener('input', () => {
  if (state.currentId !== 'special') return;
  audio.currentTime = Number(seekBar.value);
  paintRange(seekBar, (seekBar.value / seekBar.max) * 100);
});
volumeBar.addEventListener('input', () => {
  audio.muted = false;
  audio.volume = Number(volumeBar.value);
  paintRange(volumeBar, audio.volume * 100);
});
$('#muteButton').addEventListener('click', () => {
  audio.muted = !audio.muted;
  paintRange(volumeBar, audio.muted ? 0 : Number(volumeBar.value) * 100);
  showToast(audio.muted ? 'Audio dibisukan' : 'Audio diaktifkan');
});

document.addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    $('#searchInput').focus();
  }
  if (event.key === 'Escape') {
    closeMenu();
    closeQueue();
  }
  if (event.code === 'Space' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'BUTTON') {
    event.preventDefault();
    toggleCurrent();
  }
});

addEventListener('scroll', () => $('.topbar').classList.toggle('scrolled', scrollY > 8), { passive: true });

renderTracks();
renderQueue();
saveQueue();
updatePlayer(byId('special'));