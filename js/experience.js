document.querySelectorAll('.experience-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.experience-item').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.experience-details').forEach(detail => detail.classList.remove('active'));

      item.classList.add('active');
      document.getElementById(item.getAttribute('data-target')).classList.add('active');
    });
  });