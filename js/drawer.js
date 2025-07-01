const toggleBtn = document.getElementById('drawerToggle');
const drawer = document.getElementById('Drawer');
// ① 这一行不再需要
// const body   = document.body;

toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
    toggleBtn.classList.toggle('open');

    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !expanded);

    // ② 删除或注释掉下面这一行，让滚动条保持可见
    // body.style.overflow = expanded ? '' : 'hidden';
});
/* ---------- new: first-view peek ---------- */
window.addEventListener('DOMContentLoaded', () => {
    const PEEK_TIME = 800;                 // 探头持续时间(ms)

    // 让抽屉 & 按钮同步加上 .peek
    drawer.classList.add('peek');
    toggleBtn.classList.add('peek');

    // 过一段时间自动收回
    setTimeout(() => {
        drawer.classList.remove('peek');
        toggleBtn.classList.remove('peek');
    }, PEEK_TIME);
});