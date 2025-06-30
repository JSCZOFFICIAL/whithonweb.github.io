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

// 原有篩選功能後面追加
document.addEventListener('DOMContentLoaded', () => {
  // 聯絡表單處理
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;
    successMsg.textContent = '';

    // 清空先前錯誤訊息
    ['name', 'email', 'message'].forEach(id => {
      document.getElementById(`error-${id}`).textContent = '';
    });

    // 欄位驗證
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name) {
      document.getElementById('error-name').textContent = '請輸入姓名';
      valid = false;
    }
    if (!email) {
      document.getElementById('error-email').textContent = '請輸入電子郵件';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('error-email').textContent = '電子郵件格式錯誤';
      valid = false;
    }
    if (!message) {
      document.getElementById('error-message').textContent = '請輸入訊息內容';
      valid = false;
    }

    if (valid) {
      // 模擬送出回饋
      successMsg.textContent = '感謝您的聯絡，我們將儘快回覆您！';
      form.reset();
    }
  });
});
