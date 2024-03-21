function toggleActive() {
	const menuIcon = document.getElementById("menu-icon");
	menuIcon.classList.toggle("active");
	const menu = document.getElementById("menu");
	menu.classList.toggle("active");
	const center = document.getElementById("center");
	center.classList.toggle("active");
}

function toggleSearchBar() {
	const searchbar = document.getElementById("searchbar");
	searchbar.classList.toggle("active");
}
