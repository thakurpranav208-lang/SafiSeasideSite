// main.js - Smooth scroll, fade-in, mobile nav toggle
console.log('Safi Seaside Tours scripts loaded');

// Smooth scroll for same-page anchors
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});
  });
});

// Fade-in animation
const faders=document.querySelectorAll('.fade-in');
if('IntersectionObserver' in window){
  const obs=new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.2});
  faders.forEach(f=>obs.observe(f));
}else{faders.forEach(f=>f.classList.add('visible'));}

// Mobile menu toggle
const menuBtn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(menuBtn&&nav){
  menuBtn.addEventListener('click',()=>{
    const showing=nav.style.display==='flex';
    nav.style.display=showing?'none':'flex';
    nav.style.flexDirection='column';
    nav.style.alignItems='flex-start';
    nav.style.gap='10px';
  });
}


