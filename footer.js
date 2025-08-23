document.addEventListener("DOMContentLoaded", () => {
    // 如果 config.js 没成功加载，就用默认值
    const cfg = window.SITE_CONFIG || {
        TEAM_NAME: "七三大全管理团队",
        VERSION: "dev",
        LICENSE: {
            name: "CC BY 4.0",
            url: "https://creativecommons.org/licenses/by/4.0/deed.zh"
        }
    };

    const year = new Date().getFullYear();

    // 确保有 footer 元素
    let footer = document.querySelector("footer");
    if (!footer) {
        footer = document.createElement("footer");
        footer.id = "site-footer";
        document.body.appendChild(footer);
    }

    // 渲染内容
    footer.innerHTML = `
        <p>© ${year} ${cfg.TEAM_NAME} | 当前版本: ${cfg.VERSION}</p>
        <p>遵循 <a href="${cfg.LICENSE.url}" target="_blank">${cfg.LICENSE.name} 协议</a></p>
    `;
});
