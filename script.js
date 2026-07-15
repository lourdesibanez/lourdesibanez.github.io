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
