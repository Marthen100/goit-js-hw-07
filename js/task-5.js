const button = document.querySelector(".change-color");
const text = document.querySelector(".color");

const handleClick = () => {
  const col = getRandomHexColor();
  document.body.style.backgroundColor = col;
  text.textContent = col;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", handleClick);
