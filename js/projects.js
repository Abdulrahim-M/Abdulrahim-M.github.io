const projects = [
];

const projectList = document.getElementById('project-list');
const placeholder = document.querySelector('.coming-soon');

if (projects.length && placeholder) {
  placeholder.style.display = 'none';
}

projects.forEach(project => {
  const div = document.createElement('div');
  div.className = 'project';

  div.innerHTML = `
    <img src="${project.thumbnail}" alt="${project.name} Thumbnail" class="project-thumb" />
    <h3><a href="${project.link}" target="_blank">${project.name}</a></h3>
    <p>${project.description}</p>
    <p><strong>Tech:</strong> ${project.tech.join(', ')}</p>
  `;

  projectList.appendChild(div);
  // Add loaded class for animation
  setTimeout(() => div.classList.add('loaded'), 100);
});
