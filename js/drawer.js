/* drawer */
const toggleBtn = document.getElementById('drawerToggle');
const drawer = document.getElementById('Drawer');

toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
    toggleBtn.classList.toggle('open');

    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !expanded);

});
/* first-view peek */
window.addEventListener('DOMContentLoaded', () => {
    const PEEK_TIME = 1500;

    drawer.classList.add('peek');
    toggleBtn.classList.add('peek');

    setTimeout(() => {
        drawer.classList.remove('peek');
        toggleBtn.classList.remove('peek');
    }, PEEK_TIME);
});