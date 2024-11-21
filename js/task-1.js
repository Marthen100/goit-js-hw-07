const categoriesEl = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryItemsCount = category.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryTitle}\nElements: ${categoryItemsCount}`);
});
