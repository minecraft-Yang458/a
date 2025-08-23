<!-- /footer.js -->
<script>
(function () {
  // 小工具：若页面未引入 Font Awesome，自动补上（可删）
  function ensureFontAwesome() {
    if ([...document.styleSheets].some(s => (s.href || "").includes("font-awesome"))) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(link);
  }

  function buildYearText(since) {
    const now = new Date().getFullYear();
    if (!since || since >= now) return String(now);
    return `${since}–${now}`;
  }

  function renderFooter() {
    const cfg = window.SITE_CONFIG || {};
    const yearText = buildYearText(cfg.COPYRIGHT_SINCE);
    const team = cfg.TEAM_NAME || "";
    const version = cfg.VERSION ? ` | 当前版本: ${cfg.VERSION}` : "";
    const email = cfg.CONTACT?.email || "";
    const qq = cfg.CONTACT?.qqGroup || "";
    const licenseName = cfg.LICENSE?.name || "";
    const licenseUrl = cfg.LICENSE?.url || "#";

    // 复用已有 footer（若页面有 <footer id="site-footer">）否则自动创建
    let footer = document.getElementById("site-footer");
    if (!footer) {
      footer = document.createElement("footer");
      footer.id = "site-footer";
      document.body.appendChild(footer);
    }

    footer.innerHTML = `
      <div class="footer-container">
        <div class="footer-top">
          ${email ? `
            <div class="footer-item">
              <i class="fas fa-envelope"></i>
              <span>${email}</span>
            </div>` : ""}
          ${qq ? `
            <div class="footer-item">
              <i class="fab fa-qq"></i>
              <span>QQ分群: ${qq}</span>
            </div>` : ""}
        </div>
        <div class="footer-bottom">
          <p>© ${yearText}${team ? " " + team : ""}${version}</p>
          ${licenseName ? `<p>遵循 <a href="${licenseUrl}" target="_blank" rel="noopener">${licenseName} 协议</a></p>` : ""}
        </div>
      </div>
    `;
  }

  // 最终初始化
  document.addEventListener("DOMContentLoaded", function () {
    ensureFontAwesome();
    renderFooter();
  });
})();
</script>
