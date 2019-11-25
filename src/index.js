const menuHamburguer = document.getElementById("icon-menu");
const principalMenu = document.getElementById("nav");
// const containerItemsMenu = document.getElementById("items-menu")

const showMenu = () => {
  principalMenu.classList.toggle("nav-open");
};

menuHamburguer.addEventListener("click", showMenu);


// const hiddeMenu = (e) => {
//   e.target.style.visibility= "hidden"
// };

// principalMenu.addEventListener("click", hiddeMenu);
