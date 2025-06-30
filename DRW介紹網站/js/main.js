document.addEventListener('DOMContentLoaded', () => {
  const filter = document.getElementById('companyFilter');
  const cards = document.querySelectorAll('.product-card');

  filter.addEventListener('change', () => {
    const selected = filter.value;  // e.g. "IMFK" or "all"
    cards.forEach(card => {
      const company = card.getAttribute('data-company');
      if (selected === 'all' || company === selected) {
        card.style.display = 'block';
        // 恢复透明度
        card.style.opacity = '1';
      } else {
        // 隐藏并淡出
        card.style.opacity = '0';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});
