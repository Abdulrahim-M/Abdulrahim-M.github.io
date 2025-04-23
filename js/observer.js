const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('loaded');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.project').forEach(project => {
  observer.observe(project);
});
