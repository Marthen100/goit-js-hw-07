const list = document.querySelectorAll("#categories .item");

console.log(`Number of Categories: ${list.length}`);

list.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
