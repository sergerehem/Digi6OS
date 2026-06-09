/* =============================================
   DIGI6 BRANDBOOK — INTERACTIONS
   ============================================= */

// ─── PROGRESS BAR ────────────────────────────
const progressBar = document.getElementById('progress-bar');

function updateProgress() {
  const scrolled = window.scrollY;
  const total = document.body.scrollHeight - window.innerHeight;
  const pct = total > 0 ? (scrolled / total) * 100 : 0;
  progressBar.style.width = pct + '%';
}

// ─── ACTIVE NAV ──────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, {
  rootMargin: '-30% 0px -60% 0px'
});

sections.forEach(sec => navObserver.observe(sec));

// ─── FADE-IN ON SCROLL ───────────────────────
const fadeEls = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // stagger siblings slightly
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      fadeObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -40px 0px'
});

// Add stagger delays to grid children
document.querySelectorAll('.stats-row, .values-grid, .logo-grid, .color-swatches, .weight-grid, .tone-cards, .icp-grid, .persona-cards, .produtos-grid').forEach(grid => {
  [...grid.children].forEach((child, i) => {
    child.dataset.delay = i * 80;
    child.classList.add('fade-in');
  });
});

fadeEls.forEach(el => fadeObserver.observe(el));
// Re-observe after stagger setup
document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// ─── SCROLL LISTENER ─────────────────────────
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

// ─── SMOOTH SCROLL FOR NAV LINKS ─────────────
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      const offset = 72; // nav height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ─── COPY HEX ON CLICK ───────────────────────
document.querySelectorAll('.swatch-row').forEach(row => {
  const val = row.querySelector('.val');
  if (!val) return;
  row.style.cursor = 'pointer';
  row.title = 'Clique para copiar';
  row.addEventListener('click', () => {
    navigator.clipboard.writeText(val.textContent.trim()).then(() => {
      const orig = val.textContent;
      val.textContent = 'Copiado!';
      val.style.color = '#02F28C';
      setTimeout(() => {
        val.textContent = orig;
        val.style.color = '';
      }, 1200);
    }).catch(() => {});
  });
});
