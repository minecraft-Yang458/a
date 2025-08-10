// load-navbar.js
document.addEventListener('DOMContentLoaded', function() {
    // 加载导航栏
    fetch('/navbar.html')
        .then(response => response.text())
        .then(data => {
            const navbarContainer = document.createElement('div');
            navbarContainer.innerHTML = data;
            document.body.insertBefore(navbarContainer.firstChild, document.body.firstChild);
            
            // 初始化导航栏功能
            initNavbar();
        })
        .catch(error => {
            console.error('导航栏加载失败:', error);
            // 创建备用导航栏
            createFallbackNavbar();
        });
});

function initNavbar() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.getElementById('navbar');
    
    if (!navbar) return;
    
    // 设置当前活动状态
    setActiveNavItem();
    
    if (menuToggle && navLinks) {
        // 移动端导航切换
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
        
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
    }
}

function setActiveNavItem() {
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        const itemPath = new URL(item.href, window.location.origin).pathname;
        // 移除所有活动状态
        item.classList.remove('active');
        
        // 检查路径是否匹配
        if (currentPath === itemPath) {
            item.classList.add('active');
        }
        
        // 特殊处理 index.html
        if (currentPath.endsWith('/') && itemPath.endsWith('/index.html')) {
            item.classList.add('active');
        }
    });
}

function createFallbackNavbar() {
    const fallbackNav = `
        <nav class="navbar" id="navbar">
            <div class="nav-container">
                <div class="logo-container">
                    <span class="logo-text">七三大全</span>
                </div>
                <ul class="nav-links">
                    <li><a href="/index.html">首页</a></li>
                    <li><a href="/about.html">关于</a></li>
                </ul>
            </div>
        </nav>
    `;
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = fallbackNav;
    document.body.insertBefore(tempDiv.firstChild, document.body.firstChild);
    
    initNavbar();
}