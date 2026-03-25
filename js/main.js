fetch('data/portfolios.json')
.then(res => res.json())
.then(data => {
  const list = document.getElementById('portfolio-list');
  data.forEach(user => {
    const card = document.createElement('div');
    card.className = 'portfolio-card';
    card.innerHTML = `
      <h2>${user.nickname}</h2>
      <p><strong>${user.role}</strong></p>
      <p>${user.bio}</p>
      ${user.projects.map(p => `
        <div class="project">
          <h3><a href="${p.link}" target="_blank">${p.title}</a></h3>
          <p>${p.description}</p>
          ${p.screenshots.map(s => `<img src="${s}" class="project-screenshot">`).join('')}
        </div>
      `).join('')}
    `;
    list.appendChild(card);
  });
});
