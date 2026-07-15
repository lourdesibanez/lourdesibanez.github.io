document.getElementById('year').textContent = new Date().getFullYear();

const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const filterEmpty = document.querySelector('.filter-empty');

if (filterBtns.length && projectCards.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      let visibleCount = 0;

      projectCards.forEach(card => {
        const categories = card.dataset.categories ? card.dataset.categories.split(' ') : [];
        const show = filter === 'todos' || categories.includes(filter);
        card.classList.toggle('is-hidden', !show);
        if (show) visibleCount++;
      });

      if (filterEmpty) filterEmpty.hidden = visibleCount > 0;
    });
  });
}

const galleryImages = document.querySelectorAll('.gallery img');

if (galleryImages.length) {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.innerHTML = '<button class="lightbox-close" aria-label="Cerrar">&times;</button><img alt="">';
  document.body.appendChild(overlay);

  const overlayImg = overlay.querySelector('img');
  const closeBtn = overlay.querySelector('.lightbox-close');
  let lastFocused = null;

  function openLightbox(img) {
    lastFocused = document.activeElement;
    overlayImg.src = img.src;
    overlayImg.alt = img.alt || '';
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeLightbox() {
    overlay.classList.remove('is-open');
    overlayImg.src = '';
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  galleryImages.forEach(img => {
    img.addEventListener('click', () => openLightbox(img));
  });

  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeLightbox();
  });
  closeBtn.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeLightbox();
  });
}
