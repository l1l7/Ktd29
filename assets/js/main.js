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

// Menu PDF Modal - fully fixed
const modal = document.getElementById('menuModal');
const pdfFrame = document.getElementById('pdfFrame');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.menu-card').forEach(card => {
  card.addEventListener('click', () => {
    const pdfUrl = card.getAttribute('data-pdf');
    pdfFrame.src = pdfUrl;
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  pdfFrame.src = '';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    pdfFrame.src = '';
  }
});

// Typewriter tagline
const tagline = document.querySelector('.tagline');
let i=0, txt="Local Flavor. Desert Roots.", speed=100;
function typeWriter(){ if(i<txt.length){ tagline.innerHTML += txt.charAt(i); i++; setTimeout(typeWriter,speed); } }
window.addEventListener('load', typeWriter);
