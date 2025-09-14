const themeBtn = document.getElementById('themeToggle');
const root = document.documentElement;
const year = document.getElementById('year');

// Año actual en footer
if (year) year.textContent = new Date().getFullYear();

// Obtener tema actual
function getTheme() {
  return localStorage.getItem('theme') || 'dark'; // 🚀 siempre dark por defecto
}

// Aplicar tema
function setTheme(v) {
  localStorage.setItem('theme', v);
  root.classList.remove('dark', 'light');
  root.classList.add(v);
}

// Toggle con botón
themeBtn?.addEventListener('click', () => {
  const current = getTheme();
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// Iniciar con el tema guardado o dark
setTheme(getTheme());
