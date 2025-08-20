document.addEventListener('DOMContentLoaded', function() {
    // 高亮当前页面
    const currentPath = window.location.pathname;
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.getElementById('navbar');
    document.querySelectorAll('.nav-links a').forEach(link => {
        const itemPath = new URL(link.href, window.location.origin).pathname;
        link.classList.remove('active');
        if (currentPath === itemPath ||
            (currentPath.endsWith('/') && itemPath.endsWith('/index.html'))) {
            link.classList.add('active');
        }
    });
    // 移动端导航菜单切换
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
        // 点击导航链接关闭菜单
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
        // 点击页面其他区域关闭菜单
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }
    // 滚动时导航栏效果
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
