document.getElementById('portfolio-form').addEventListener('submit', function(e){
  e.preventDefault();
  const nickname = document.getElementById('nickname').value.trim();
  const role = document.getElementById('role').value.trim();
  const bio = document.getElementById('bio').value.trim();
  const title = document.getElementById('project-title').value.trim();
  const link = document.getElementById('project-link').value.trim();
  const screenshots = document.getElementById('project-screenshots').value.split(',').map(s=>s.trim());

  const newPortfolio = {
    nickname,
    role,
    bio,
    projects: [{ title, description: '', link, screenshots }]
  }

  console.log('Новый объект портфолио:', newPortfolio);
  alert('Готово! Добавление работает через GitHub PR или локальное редактирование portfolios.json.');
});
