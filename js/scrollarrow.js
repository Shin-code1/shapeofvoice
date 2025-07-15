/* ---------------------- fadein helper ---------------------- */
const FADE_DELAY = 300;
function runFadeIn(delay = 0) {
  document
    .querySelectorAll(
      'nav, .navimg, h2, .logoimg, p, h3, h4, .characters, .voicecast, .review'
    )
    .forEach((el) => {
      el.style.animationDelay = `${delay}ms`;
      el.classList.remove('animate');
      void el.offsetWidth; // restart CSS animation
      el.classList.add('animate');
    });
}

/* ---------------------- page utilities ---------------------- */
const pages = Array.from(document.querySelectorAll('.page'));
const isFooter = (el) => el && el.tagName.toLowerCase() === 'footer';

function getCurrentPage() {
  const mid = window.innerHeight / 2;
  return (
    pages.find((p) => {
      const r = p.getBoundingClientRect();
      return r.top <= mid && r.bottom >= mid;
    }) || pages[0]
  );
}

function getSiblingPage(current, delta) {
  const i = pages.indexOf(current);
  if (i === -1) return null;
  return pages[i + delta] || null;
}

/* ---------------------- initial load ---------------------- */
document.addEventListener('DOMContentLoaded', () => runFadeIn(0));

/* ---------------------- scroll‑down buttons ---------------------- */
document.querySelectorAll('.scroll-down').forEach((btn) => {
  btn.addEventListener('click', () => {
    const cur = getCurrentPage();
    const next = getSiblingPage(cur, +1);
    if (!isFooter(next)) runFadeIn(FADE_DELAY);
    next?.scrollIntoView({ behavior: 'smooth' });
  });
});

/* ---------------------- wheel scrolling ---------------------- */
let wheelLock = false;

document.body.addEventListener(
  'wheel',
  (e) => {
    const atTop = window.scrollY === 0;
    const atBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight;

    // ignore overscroll or when scroll position doesn't change
    if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) return;

    if (wheelLock) return;
    wheelLock = true;

    const cur = getCurrentPage();
    const next = getSiblingPage(cur, e.deltaY > 0 ? +1 : -1);

    // Trigger the fade‑in only if we are *not* moving into the footer
    if (!isFooter(next)) runFadeIn(FADE_DELAY);

    setTimeout(() => (wheelLock = false), FADE_DELAY + 600);
  },
  { passive: true }
);
