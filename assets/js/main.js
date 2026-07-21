"use strict";

document.documentElement.classList.add("js");

const sharedHeader = document.querySelector("[data-shared-header]");
if (sharedHeader) {
  const root = sharedHeader.dataset.root || "";
  sharedHeader.innerHTML = `<div class="container header-bar">
    <a class="brand" href="${root}index.html" aria-label="返回首页"><span class="brand-mark">AI</span><span class="brand-copy"><strong>AI职业技能培训</strong><small>智能体应用项目</small></span></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="打开或关闭导航"><span></span><span></span><span></span></button>
    <nav class="site-nav" id="site-nav" aria-label="主导航">
      <a class="nav-home" data-nav="home" href="${root}index.html">首页</a>
      <div class="nav-group" data-nav="project"><button class="nav-primary" type="button" aria-expanded="false">项目介绍<span class="nav-chevron"></span></button><div class="submenu"><a href="${root}project/">项目介绍概览</a><a href="${root}project/#background">项目背景</a><a href="${root}project/#demand">市场需求</a><a href="${root}project/#goals">培养目标</a><a href="${root}project/#advantages">项目优势</a><a href="${root}project/#plan">发展规划</a></div></div>
      <div class="nav-group" data-nav="learning"><button class="nav-primary" type="button" aria-expanded="false">学习中心<span class="nav-chevron"></span></button><div class="submenu"><a href="${root}learning/">学习中心概览</a><a href="${root}learning/#office">AI智能办公基础</a><a href="${root}learning/#agent">AI智能体应用</a><a href="${root}learning/#implementation">企业AI应用实施</a><a href="${root}learning/#projects">实训项目</a><a href="${root}learning/#assessment">考核方式</a></div></div>
      <div class="nav-group" data-nav="certificate"><button class="nav-primary" type="button" aria-expanded="false">证书与评价<span class="nav-chevron"></span></button><div class="submenu"><a href="${root}certificate/">证书与评价概览</a><a href="${root}certificate/#training">培训合格证明</a><a href="${root}certificate/#portfolio">实训能力证明</a><a href="${root}certificate/#national">国家职业衔接</a><a href="${root}certificate/#compliance">合规说明</a><a href="${root}certificate/#faq">常见问题</a></div></div>
      <div class="nav-group" data-nav="career"><button class="nav-primary" type="button" aria-expanded="false">就业与发展<span class="nav-chevron"></span></button><div class="submenu"><a href="${root}career/">就业与发展概览</a><a href="${root}career/#roles">就业岗位</a><a href="${root}career/#venture">创业与兼职</a><a href="${root}career/#portfolio">学员作品集</a><a href="${root}career/#service">就业服务流程</a><a href="${root}career/#talent">人才库规划</a></div></div>
      <div class="nav-group" data-nav="school"><button class="nav-primary" type="button" aria-expanded="false">学校合作<span class="nav-chevron"></span></button><div class="submenu"><a href="${root}school/">学校合作概览</a><a href="${root}school/#value">合作价值</a><a href="${root}school/#models">收益模式</a><a href="${root}school/#curriculum">课程共建</a><a href="${root}school/#base">实训基地</a><a href="${root}school/#teachers">师资培养</a><a href="${root}school/#process">合作流程</a></div></div>
      <div class="nav-group" data-nav="enterprise"><button class="nav-primary" type="button" aria-expanded="false">企业服务<span class="nav-chevron"></span></button><div class="submenu"><a href="${root}enterprise/">企业服务概览</a><a href="${root}enterprise/#training">企业AI培训</a><a href="${root}enterprise/#knowledge">知识库建设</a><a href="${root}enterprise/#agents">智能体建设</a><a href="${root}enterprise/#workflow">流程优化</a><a href="${root}enterprise/#delivery">交付与维护</a></div></div>
      <div class="nav-group" data-nav="hermes"><button class="nav-primary" type="button" aria-expanded="false">Hermes实训平台<span class="nav-chevron"></span></button><div class="submenu"><a href="${root}hermes/">平台概览</a><a href="${root}hermes/#teaching">教学流程</a><a href="${root}hermes/#practice">实训流程</a><a href="${root}hermes/#management">项目管理</a><a href="${root}hermes/#risk">风险与审计</a><a href="${root}hermes/#roadmap">发展规划</a></div></div>
      <div class="nav-group" data-nav="about"><button class="nav-primary" type="button" aria-expanded="false">关于我们<span class="nav-chevron"></span></button><div class="submenu"><a href="${root}about/">关于我们概览</a><a href="${root}about/#vision">项目愿景</a><a href="${root}about/#team">团队说明</a><a href="${root}about/#partners">伙伴规划</a><a href="${root}about/#contact">联系方式</a><a href="${root}about/#compliance">合规声明</a></div></div>
    </nav></div>`;
}

const sharedFooter = document.querySelector("[data-shared-footer]");
if (sharedFooter) {
  const root = sharedFooter.dataset.root || "";
  sharedFooter.innerHTML = `<div class="container"><div class="footer-main"><div><div class="brand footer-brand"><span class="brand-mark">AI</span><span class="brand-copy"><strong>AI职业技能培训</strong><small>与智能体应用项目组</small></span></div><p class="footer-intro">连接职业教育、人工智能应用、企业需求和人才成长。</p></div><div class="footer-col"><h3>快速入口</h3><a href="${root}learning/">学习中心</a><a href="${root}school/">学校合作</a><a href="${root}enterprise/">企业服务</a><a href="${root}hermes/">Hermes实训平台</a></div><div class="footer-col"><h3>项目说明</h3><a href="${root}project/">项目介绍</a><a href="${root}certificate/">证书与评价</a><a href="${root}career/">就业与发展</a><a href="${root}about/#contact">合作联系</a></div></div><div class="footer-compliance"><p><strong>项目规划展示版。</strong>当前网站不构成正式招生、收费、证书发放或就业承诺。</p><p>国家职业资格、职业技能等级认定及相关政策，以主管部门、备案评价机构和正式文件为准。</p></div><div class="footer-bottom"><span>© 2026 AI职业技能培训与智能体应用项目组</span><strong>V0.2.0 多页面内容版</strong></div></div>`;
}

const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navScrim = document.querySelector(".nav-scrim");
const submenuButtons = [...document.querySelectorAll(".nav-primary")];
const backTop = document.querySelector(".back-top");

function closeSubmenus(exceptGroup = null) {
  document.querySelectorAll(".nav-group.submenu-open").forEach((group) => {
    if (group === exceptGroup) return;
    group.classList.remove("submenu-open");
    group.querySelector(".nav-primary")?.setAttribute("aria-expanded", "false");
  });
}

function closeMenu() {
  body.classList.remove("nav-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  closeSubmenus();
}

menuToggle?.addEventListener("click", () => {
  const willOpen = !body.classList.contains("nav-open");
  body.classList.toggle("nav-open", willOpen);
  menuToggle.setAttribute("aria-expanded", String(willOpen));
});

navScrim?.addEventListener("click", closeMenu);

submenuButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const group = button.closest(".nav-group");
    const willOpen = !group.classList.contains("submenu-open");
    closeSubmenus(group);
    group.classList.toggle("submenu-open", willOpen);
    button.setAttribute("aria-expanded", String(willOpen));
  });
});

siteNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-group")) closeSubmenus();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    menuToggle?.focus();
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 1120) closeMenu();
});

const activePage = body.dataset.page;
if (activePage) {
  document.querySelectorAll(`[data-nav="${activePage}"]`).forEach((item) => item.classList.add("is-current"));
}

window.addEventListener("scroll", () => backTop?.classList.toggle("visible", window.scrollY > 560), { passive: true });
backTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const anchorLinks = [...document.querySelectorAll('.anchor-nav a[href^="#"]')];
const anchorSections = anchorLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
if ("IntersectionObserver" in window && anchorSections.length) {
  const observer = new IntersectionObserver((entries) => {
    const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!current) return;
    anchorLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${current.target.id}`));
  }, { rootMargin: "-28% 0px -62%", threshold: [0.01, 0.2, 0.5] });
  anchorSections.forEach((section) => observer.observe(section));
}

const contactForm = document.querySelector("#interest-form");
const formStatus = document.querySelector("#form-status");
if (contactForm && formStatus) {
  const requiredFields = [...contactForm.querySelectorAll("[required]")];
  requiredFields.forEach((field) => {
    const clearError = () => field.removeAttribute("aria-invalid");
    field.addEventListener("input", clearError);
    field.addEventListener("change", clearError);
  });
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const invalidField = requiredFields.find((field) => !field.value.trim());
    requiredFields.forEach((field) => field.setAttribute("aria-invalid", String(!field.value.trim())));
    formStatus.hidden = false;
    if (invalidField) {
      formStatus.className = "form-status error";
      formStatus.textContent = "请先填写姓名、联系方式和合作方向。页面不会上传已填写内容。";
      invalidField.focus();
      return;
    }
    formStatus.className = "form-status";
    formStatus.textContent = "当前为项目预览版，在线表单尚未接入后台。请通过正式项目联系人进行沟通。";
  });
}
