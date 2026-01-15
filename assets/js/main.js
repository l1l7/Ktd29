// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Sticky nav shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if(window.scrollY > 10) {
    nav.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
