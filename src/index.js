const menuHamburguer = document.getElementById("icon-menu");
const principalMenu = document.getElementById("nav");

const showMenu = () => {
  principalMenu.classList.toggle("nav-open");
};

menuHamburguer.addEventListener("click", showMenu);
