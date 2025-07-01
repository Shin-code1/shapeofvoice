/* fadein */
const FADE_DELAY = 300;
function runFadeIn(delay = 0) {
  document
    .querySelectorAll('nav, .navimg, h2, .logoimg, p, h3, h4, .characters, .voicecast')
    .forEach(el => {
      el.style.animationDelay = `${delay}ms`;
      el.classList.remove('animate');
      void el.offsetWidth;
      el.classList.add('animate');
    });
}
/* scroll animition */
document.addEventListener('DOMContentLoaded', () => runFadeIn(0));
document.querySelectorAll('.scroll-down').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.page')?.nextElementSibling?.scrollIntoView({ behavior: 'smooth' });
    runFadeIn(FADE_DELAY);
  });
});
let wheelLock = false;
document.body.addEventListener(
  'wheel',
  () => {
    if (wheelLock) return;
    wheelLock = true;
    runFadeIn(FADE_DELAY);
    setTimeout(() => (wheelLock = false), FADE_DELAY + 600);
  },
  { passive: true }
);