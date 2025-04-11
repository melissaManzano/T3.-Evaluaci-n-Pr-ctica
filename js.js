const buttons = document.querySelectorAll('#category-index button');
const cards = document.querySelectorAll('.image-card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;

    cards.forEach(card => {
      if (category === 'all' || card.classList.contains(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Mostrar todo al cargar
document.querySelector('[data-category="all"]').click();
