function show(pageId) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".nav-btn")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
  document.getElementById("btn-" + pageId).classList.add("active");
}
