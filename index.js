// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "100px";
//dodger.style.left = "100px";


document.addEventListener("keydown", handlekeydown)

function handlekeydown(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
}

function moveDodgerLeft() {
    const left = parseInt(dodger.style.left.replace("px", ""), 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    const left = parseInt(dodger.style.left.replace("px", ""), 10);
    if (left >= 0 && left < 360) { // Adjusted the condition to handle the right edge
        dodger.style.left = `${left + 1}px`;
    }
}