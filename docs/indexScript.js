function addHighlight(event) {
	event.currentTarget.classList.add("highlighted");
}

function removeHighlight(event) {
	event.currentTarget.classList.remove("highlighted");
}

function toggleHighlight(event) {
	event.currentTarget.classList.toggle("highlighted");
}

function setupSpanToggle() {
	const span = document.getElementById("magicSpan");
	if (!span) return;

	span.addEventListener("mouseenter", addHighlight);
	span.addEventListener("mouseleave", removeHighlight);

	span.addEventListener("click", toggleHighlight);
}

let clickTotal = 0;

function handleCounterClick() {
	clickTotal++;
	document.getElementById("clickCount").textContent = clickTotal;

	if (clickTotal % 10 === 0) {
		alert("You've clicked " + clickTotal + " times! 🎉");
	}
}

function setupCounter() {
	const button = document.getElementById("clickButton");
	if (button) button.addEventListener("click", handleCounterClick);
}

function randomColor() {
	const h = Math.floor(Math.random() * 360);
	return "hsl(" + h + ", 70%, 85%)";
}

function changeBackground() {
	document.body.style.backgroundColor = randomColor();
}

function setupColorButton() {
	const button = document.getElementById("colorButton");
	if (button) button.addEventListener("click", changeBackground);
}

function showMouseCoords(event) {
	const out = document.getElementById("mouseCoords");
	if (out) out.textContent = "Mouse at x: " + event.clientX + ", y: " + event.clientY;
}

function createAmogus(event) {
	const amogus = document.createElement("span");
	amogus.className = "amogus";
	amogus.textContent = "ඞ";
	amogus.style.left = event.clientX + "px";
	amogus.style.top = event.clientY + "px";
	document.body.appendChild(amogus);
	setTimeout(() => amogus.remove(), 800);
}

function handleKeyPress(event) {
	if (event.key.toLowerCase() === "c") handleCounterClick();
}

function wiggleImage(event) {
	const img = event.currentTarget;
	img.style.transition = "transform 0.4s";
	img.style.transform = "rotate(360deg)";
	setTimeout(() => {
		img.style.transition = "none";
		img.style.transform = "";
	}, 400);
}

function setupCatImages() {
	document.querySelectorAll("img").forEach(img => {
		img.addEventListener("dblclick", wiggleImage);
	});
}

document.addEventListener("DOMContentLoaded", function () {
	setupSpanToggle();
	setupCounter();
	setupColorButton();
	setupThemeButton();
	setupCatImages();

	document.addEventListener("mousemove", showMouseCoords);
	document.addEventListener("click", createSparkle);
	document.addEventListener("keydown", handleKeyPress);
});