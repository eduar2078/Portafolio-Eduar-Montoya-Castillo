// Año en footer
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Tema dark/light con Bootstrap 5 data-bs-theme
const themeBtn  = document.getElementById('themeToggle');
const iconMoon  = document.getElementById('iconMoon');
const iconSun   = document.getElementById('iconSun');
const htmlEl    = document.documentElement;

function getTheme()   { return localStorage.getItem('em-theme') || 'dark'; }
function applyTheme(t) {
  htmlEl.setAttribute('data-bs-theme', t);
  localStorage.setItem('em-theme', t);
  if (t === 'dark') {
    iconMoon.classList.remove('d-none');
    iconSun.classList.add('d-none');
  } else {
    iconMoon.classList.add('d-none');
    iconSun.classList.remove('d-none');
  }
}

// Arrancar con el tema guardado
applyTheme(getTheme());

// Toggle
themeBtn?.addEventListener('click', () => {
  applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
});

// Smooth scroll para nav links (Bootstrap ya lo tiene, pero por si acaso)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Cerrar el navbar collapse en mobile
      const collapse = document.getElementById('mainNav');
      if (collapse && collapse.classList.contains('show')) {
        bootstrap.Collapse.getInstance(collapse)?.hide();
      }
    }
  });
});


// Función para abrir el modal
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'flex'; // O la lógica que uses para mostrarlo
    document.body.style.overflow = 'hidden'; // Evita scroll de fondo
  }
}

// Función para cerrar el modal
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Función para cerrar al hacer clic fuera (Overlay)
function overlayClick2(event, id) {
  if (event.target.id === id) {
    closeModal(id);
  }
}
