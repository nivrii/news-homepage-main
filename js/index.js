const toggleButton = document.querySelector(".menu_icon");
const dropDownMenu = document.querySelector(".dropdown_menu");
const links = document.getElementsByClassName("links");
const arrLinks = Array.from(links);

toggleButton.addEventListener("click", () => {
  dropDownMenu.classList.toggle("open");
  dropDownMenu.classList.contains("open")
    ? (toggleButton.innerHTML = `<img src="/assets/images/icon-menu-close.svg" class="close_menu" alt="Menu Icon">`)
    : (toggleButton.innerHTML = `<img src="/assets/images/icon-menu.svg" class="open_menu" alt="Close Menu">`);
});

arrLinks.forEach((link) => {
  link.addEventListener("click", () => {
    dropDownMenu.classList.toggle("open");
    toggleButton.innerHTML = `<img src="/assets/images/icon-menu.svg" class="open_menu" alt="Menu Icon">`;
  });
});