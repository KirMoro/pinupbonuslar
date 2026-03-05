const path = window.location.pathname.endsWith('/')
  ? window.location.pathname
  : `${window.location.pathname}/`;

document.querySelectorAll('[data-nav]').forEach((link) => {
  const href = link.getAttribute('href');
  if (!href) return;
  if (href === '/' && path === '/') {
    link.classList.add('active');
    return;
  }
  if (href !== '/' && path.startsWith(href)) {
    link.classList.add('active');
  }
});

document.querySelectorAll('details').forEach((detail) => {
  const summary = detail.querySelector('summary');
  if (!summary) return;
  const setState = () => {
    summary.setAttribute('aria-expanded', detail.open ? 'true' : 'false');
  };
  setState();
  detail.addEventListener('toggle', setState);
});

const revealItems = document.querySelectorAll('.reveal');
if (revealItems.length > 0 && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
