document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("hamburgerBtn");
  const menu = document.querySelector("nav ul");
  const body = document.body;

  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("no-scroll");
  });
});
  const btn = document.getElementById('hamburgerBtn');
  if (btn) {
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
      }
    });
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
    });
  }