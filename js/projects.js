const projects = [
    /*{
  thumbnail: 'https://via.placeholder.com/150',
    name: 'Project One',
    link: 'https://example.com/project-one',
    description: 'A web application that allows users to track their tasks and productivity.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js']
  },
  {
    thumbnail: '2.png',
    name: 'Project Two',
    link: 'https://example.com/project-two',
    description: 'An e-commerce platform with a focus on user experience and product customization.',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB']
  },
  {
    thumbnail: 'https://via.placeholder.com/150',
    name: 'Project Three',
    link: 'https://example.com/project-three',
    description: 'A portfolio website built to showcase personal projects and achievements.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    thumbnail: 'https://via.placeholder.com/150',
    name: 'Project Four',
    link: 'https://example.com/project-four',
    description: 'A social media platform for connecting like-minded people around shared hobbies.',
    tech: ['Vue.js', 'Firebase', 'CSS', 'Node.js']
  } */
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
