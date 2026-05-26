// ── NAVBAR scroll effect ─────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ── MENU TABS ────────────────────────────────────────
function showTab(id, btn) {
  // hide all grids
  document.querySelectorAll('.menu-grid').forEach(g => g.classList.remove('active'));
  // deactivate all tabs
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  // show selected
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

// ── BURGER MENU ──────────────────────────────────────
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  links.classList.toggle('open');
  // close on link click
  if (links.classList.contains('open')) {
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'), { once: true });
    });
  }
}

// ── FORM SUBMIT ──────────────────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  btn.textContent = 'Envoi en cours…';
  btn.disabled = true;
  // Simulate async submission
  setTimeout(() => {
    document.getElementById('form-success').style.display = 'block';
    e.target.reset();
    btn.textContent = 'Confirmer la réservation';
    btn.disabled = false;
    document.getElementById('form-success').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 1200);
}

// ── SCROLL REVEAL ────────────────────────────────────
const revealElements = document.querySelectorAll(
  '.intro-grid, .menu-card, .galerie-item, .info-block, .contact-form'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ── SET MIN DATE on date input ───────────────────────
const dateInput = document.getElementById('date');
if (dateInput) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  dateInput.min = tomorrow.toISOString().split('T')[0];
}
