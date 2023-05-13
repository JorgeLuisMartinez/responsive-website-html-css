let navMenuIcon = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');


navMenuIcon.addEventListener('click', ()=>{
    navMenuIcon.classList.toggle('bx-x');
    navlist.classList.toggle('open');
})
const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});
sr.reveal('.champion-text',{delay:200, origin:'top'});
sr.reveal('.champion-img',{delay:450, origin:'top'});
sr.reveal('.socialMedia',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});

