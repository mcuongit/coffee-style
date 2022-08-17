const topMenu = document.getElementById("mc-top-menu");
const toggleMenuIcon = document.getElementById("mc-toggle-menu-icon");

document.addEventListener("click", (e) => {
  if (toggleMenuIcon.contains(e.target)) {
    topMenu.classList.toggle("mc-menu-expanded");
    topMenu.classList.toggle("hidden");
  } else {
    if (topMenu.classList.contains("mc-menu-expanded")) {
      topMenu.classList.remove("mc-menu-expanded");
      topMenu.classList.add("hidden");
    }
  }
});
