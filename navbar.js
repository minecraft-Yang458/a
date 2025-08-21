// 导航栏自动插入及穷举高亮脚本
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
                <li><a id="nav-home" href="/index.html">首页</a></li>
                <li><a id="nav-about" href="/01MainQG/about.html">关于我们</a></li>
                <li><a id="nav-redblack" href="/01MainQG/red-black-list.html">红黑榜</a></li>
                <li><a id="nav-rule" href="/01MainQG/page/zw.html">群规</a></li>
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

    // 穷举法自动高亮当前页导航项
    const path = window.location.pathname;
    // 首页（包括 / 或 /index.html）
    if (path === '/' || path === '/index.html') {
        document.getElementById('nav-home').classList.add('active');
    }
    // 关于我们
    else if (path === '/01MainQG/about.html') {
        document.getElementById('nav-about').classList.add('active');
    }
    // 红黑榜
    else if (path === '/01MainQG/red-black-list.html') {
        document.getElementById('nav-redblack').classList.add('active');
    }
    // 群规
    else if (path === '/01MainQG/page/zw.html') {
        document.getElementById('nav-rule').classList.add('active');
    }
    // 你可以继续添加其他页面的穷举分支
});
