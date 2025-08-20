// 导航栏自动插入及高亮脚本
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏HTML
    const navbarHTML = `
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <div class="logo-container">
                <img src="/01MainQG/pictures/xh_tm.png" alt="七三大全 Logo" class="logo-image">
                <span class="logo-text">七三大全官方网站</span>
            </div>
            <ul class="nav-links">
                <li><a href="/index.html">首页</a></li>
                <li><a href="/01MainQG/about.html">关于我们</a></li>
                <li><a href="/01MainQG/red-black-list.html">红黑榜</a></li>
                <li><a href="/01MainQG/page/zw.html">群规</a></li>
            </ul>
            <button class="menu-toggle">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </nav>
    `;

    // 插入导航栏
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // 导航栏功能初始化
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.getElementById('navbar');

    // 移动端导航切换
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // 点击导航链接关闭移动菜单
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // 滚动时导航栏效果
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 点击页面其他区域关闭移动菜单
    document.addEventListener('click', function(e) {
        if (navLinks && menuToggle) {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        }
    });

    // 自动高亮当前页导航项（路径忽略大小写和结尾斜杠）
    const currentPath = window.location.pathname.replace(/\/+$/, '').toLowerCase();
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/+$/, '').toLowerCase();
        if (currentPath === linkPath) {
            link.classList.add('active');
        }
        // 特殊处理首页（根目录和index.html都高亮首页按钮）
        if ((currentPath === '/' || currentPath === '/index.html') && linkPath.endsWith('/index.html')) {
            link.classList.add('active');
        }
    });
});
