// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({behavior:'smooth'});
  });
});

// Sticky nav shadow
window.addEventListener('scroll', ()=>{
  const nav = document.querySelector('.navbar');
  nav.style.boxShadow = (window.scrollY > 10) ? '0 4px 10px rgba(0,0,0,0.3)' : 'none';
});
