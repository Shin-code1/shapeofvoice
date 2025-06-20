document.querySelectorAll('.scroll-down').forEach(btn => {
    btn.addEventListener('click', () => {
        const current = btn.closest('.page');             // 所在整页
        const next = current.nextElementSibling;          // 下一整页
        if (next) {
            next.scrollIntoView({ behavior: 'smooth' });    // 平滑滚动
        }
    });
});