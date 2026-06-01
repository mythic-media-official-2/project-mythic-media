function route(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => page.classList.remove("active"));

  const buttons = document.querySelectorAll(".nav-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));

  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.classList.add("active");
  }

  // تفعيل إضاءة الزرار المختار بالذهبي
  if (pageId === "home")
    document.getElementById("btn-home").classList.add("active");
  if (pageId === "academy")
    document.getElementById("btn-academy").classList.add("active");
  if (pageId === "creator")
    document.getElementById("btn-creator").classList.add("active");
  if (pageId === "admin")
    document.getElementById("btn-admin").classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("btn-home")
    .addEventListener("click", () => route("home"));
  document
    .getElementById("btn-academy")
    .addEventListener("click", () => route("academy"));
  document
    .getElementById("btn-creator")
    .addEventListener("click", () => route("creator"));
  document
    .getElementById("btn-admin")
    .addEventListener("click", () => route("admin"));
  document
    .getElementById("brand-logo-btn")
    .addEventListener("click", () => route("home"));
});
