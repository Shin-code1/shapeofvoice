/* 設定 */
const FADE_DELAY = 300; // ← 遅延(ms) はここで調整

/*  アニメ再生  */
function runFadeIn(delay = 0) {
    const targets = document.querySelectorAll(
        'nav, .navimg, h2, .logoimg, p, h3, h4, .characters, .voicecast'
    );
    targets.forEach(el => {
        el.style.animationDelay = `${delay}ms`;
        el.classList.remove('animate');
        void el.offsetWidth;   // 再描画でリセット
        el.classList.add('animate');
    });
}

/*  初回ロード  */
document.addEventListener('DOMContentLoaded', () => runFadeIn(0));

/*  下矢印クリック  */
document.querySelectorAll('.scroll-down').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.page')?.nextElementSibling?.scrollIntoView({ behavior: 'smooth' });
        runFadeIn(FADE_DELAY);
    });
});

/*  ホイール操作  */
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
