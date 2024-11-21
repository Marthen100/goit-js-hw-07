const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
const input = document.querySelector('#controls input');

createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  createBoxes(amount);
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes(); // To replace old boxes with new ones
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }
  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
