let menuButton = document.querySelector(".menu-toggle");
let menu = document.querySelector(".site-menu");

menuButton.addEventListener("click", () => {
	menu.classList.toggle("menu-active");
});
 
