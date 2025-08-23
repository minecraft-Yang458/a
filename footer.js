document.addEventListener("DOMContentLoaded", () => {
    const cfg = window.SITE_CONFIG || {
        TEAM_NAME: "七三大全管理团队",
        VERSION: "dev",
        EMAIL: "未配置",
        QQ_GROUP: "未配置"
    };

    const year = new Date().getFullYear();

    // 确保 footer 存在
    let footer = document.querySelector("footer");
    if (!footer) {
        footer = document.createElement("footer");
        document.body.appendChild(footer);
    }

    footer.innerHTML = `
        <p>© ${year} ${cfg.TEAM_NAME} | 当前版本: ${cfg.VERSION}</p>
        <p>邮箱: ${cfg.EMAIL} | QQ分群: ${cfg.QQ_GROUP}</p>
    `;
});
