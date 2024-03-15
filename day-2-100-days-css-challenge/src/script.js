// Plain JavaScript Equivalent
var link = document.querySelector(".center");

link.addEventListener("click", function () {
	this.classList.toggle("active");
	var divElements = this.querySelectorAll("div");
	divElements.forEach(function (div) {
		div.classList.remove("no-animation");
	});
});
