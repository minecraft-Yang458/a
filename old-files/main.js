// 导航菜单模块
(function() {
    // 初始化函数
    function init() {
        // 获取调试状态（新增空值检查）
        const debugToggle = document.getElementById('debug-toggle');
        const isDebug = debugToggle?.checked || false;
        
        if (isDebug) {
            console.log('--- 导航菜单初始化开始 ---');
        }
        
        // 获取DOM元素（新增空值检查）
        const navToggleBtn = document.getElementById('nav-toggle-btn');
        const sideNav = document.getElementById('side-nav');
        const overlayEl = document.getElementById('nav-overlay');
        const mainMenu = document.getElementById('main-nav-menu');

        if (isDebug) {
            console.log('DOM元素状态检查:');
            console.log('navToggleBtn:', navToggleBtn ? '存在' : '不存在');
            console.log('sideNav:', sideNav ? '存在' : '不存在');
            console.log('overlayEl:', overlayEl ? '存在' : '不存在');
            console.log('mainMenu:', mainMenu ? '存在' : '不存在');
        }
        
        // 检查元素是否存在
        if (!navToggleBtn || !sideNav || !overlayEl) {
            if (isDebug) {
                console.error('>> 致命错误：必要元素缺失！<<');
            }
            return;
        }

        // 菜单状态跟踪
        let isNavOpen = false;
        
        // 切换菜单
        function toggleMenu() {
            if (isDebug) {
                console.log('汉堡按钮点击事件触发:', isNavOpen ? '关闭' : '打开');
            }
            isNavOpen = !isNavOpen;
            
            // 更新ARIA属性
            navToggleBtn.setAttribute('aria-expanded', isNavOpen);
            
            // 应用变换
            const transformValue = isNavOpen ? 'translateX(0)' : 'translateX(-100%)';
            sideNav.style.transform = transformValue;
            overlayEl.style.display = isNavOpen ? 'block' : 'none';
            
            // 强制重绘以确保动画生效
            void sideNav.offsetWidth;
        }

        // 关闭菜单
        function closeMenu() {
            if (isDebug) {
                console.log('关闭菜单事件触发');
            }
            if (!isNavOpen) return;
            
            isNavOpen = false;
            sideNav.style.transform = 'translateX(-100%)';
            overlayEl.style.display = 'none';
            navToggleBtn.setAttribute('aria-expanded', false);
        }

        // 事件监听器（增强健壮性）
        if (navToggleBtn) {
            navToggleBtn.addEventListener('click', toggleMenu);
        }
        
        if (overlayEl) {
            overlayEl.addEventListener('click', closeMenu);
        }
        
        // 键盘事件
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && isNavOpen) {
                closeMenu();
            }
        });
        
        if (isDebug) {
            console.log('✓ 事件监听器已绑定');
        }
    }

    // DOM加载完成后初始化
    document.addEventListener('DOMContentLoaded', function() {
        const debugToggle = document.getElementById('debug-toggle');
        const isDebug = debugToggle?.checked || false;
        
        if (isDebug) {
            console.log('DOM内容加载完成，开始初始化');
        }
        init();
    });
})();