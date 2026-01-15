// Smooth scrolling
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

// Typewriter effect for tagline
const tagline = document.getElementById('tagline');
let i = 0, txt = "Local Flavor. Desert Roots.", speed = 100;
function typeWriter() {
  if(i < txt.length){
    tagline.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.addEventListener('load', typeWriter);
