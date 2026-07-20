"use strict";

document.documentElement.classList.add("js");

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");
const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];

function closeMenu() {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("open");
  document.body.classList.remove("menu-open");
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navLinks.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuButton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
  });
}

const observedSections = [...document.querySelectorAll("main section[id]")];
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  }, { rootMargin: "-20% 0px -65%", threshold: [0.01, 0.2, 0.5] });

  observedSections.forEach((section) => sectionObserver.observe(section));
}

const interestForm = document.querySelector("#interest-form");
const formStatus = document.querySelector("#form-status");

if (interestForm && formStatus) {
  const requiredFields = [...interestForm.querySelectorAll("[required]")];

  requiredFields.forEach((field) => {
    field.addEventListener("input", () => field.removeAttribute("aria-invalid"));
    field.addEventListener("change", () => field.removeAttribute("aria-invalid"));
  });

  interestForm.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const invalidField = requiredFields.find((field) => !field.value.trim());
    requiredFields.forEach((field) => {
      field.setAttribute("aria-invalid", String(!field.value.trim()));
    });

    formStatus.hidden = false;

    if (invalidField) {
      formStatus.className = "form-status error";
      formStatus.textContent = "请先填写姓名、联系方式和合作方向。页面不会上传已填写内容。";
      invalidField.focus();
      return;
    }

    formStatus.className = "form-status";
    formStatus.textContent = "预览版暂未接入后台，请通过正式项目联系人沟通。";
  });
}
