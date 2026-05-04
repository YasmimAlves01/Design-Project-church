document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("hamburgerBtn");
  const menu = document.querySelector("nav ul");
  const body = document.body;

  function openMenu() {
    btn.classList.add("active");
    menu.classList.add("active");
    body.classList.add("no-scroll");
    btn.setAttribute("aria-expanded", "true");

    setTimeout(() => {
      const firstLink = menu.querySelector("a");
      if (firstLink) firstLink.focus({ preventScroll: true });
    }, 300);
  }

  function closeMenu() {
    btn.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("no-scroll");
    btn.setAttribute("aria-expanded", "false");
    btn.focus({ preventScroll: true });
  }

  function isMenuOpen() {
    return menu.classList.contains("active");
  }

  btn.addEventListener("click", () => {
    isMenuOpen() ? closeMenu() : openMenu();
  });

  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      isMenuOpen() ? closeMenu() : openMenu();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen()) {
      closeMenu();
    }
  });

  menu.addEventListener("keydown", (e) => {
    if (!isMenuOpen()) return;
    const focusableItems = Array.from(menu.querySelectorAll("a"));
    const first = focusableItems[0];
    const last = focusableItems[focusableItems.length - 1];
    const active = document.activeElement;

    if (e.key === "Tab") {
      if (e.shiftKey && active === first) {
        e.preventDefault();
        btn.focus({ preventScroll: true });
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        btn.focus({ preventScroll: true });
      }
    }
  });

  btn.addEventListener("keydown", (e) => {
    if (e.key === "Tab" && e.shiftKey && isMenuOpen()) {
      e.preventDefault();
      const focusableItems = Array.from(menu.querySelectorAll("a"));
      focusableItems[focusableItems.length - 1].focus({ preventScroll: true });
    }
  });

  document.addEventListener("click", (e) => {
    if (isMenuOpen() && !menu.contains(e.target) && e.target !== btn) {
      closeMenu();
    }
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (isMenuOpen()) closeMenu();
    });
  });
});