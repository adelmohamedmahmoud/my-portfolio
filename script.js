
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
    });
});

// ============================================

const revealElements = document.querySelectorAll('.scroll-reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -30px 0px'
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// ============================================

const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


// ============================================
//  ================TYPING EFFECT =============
// ============================================

const typingText = document.getElementById('typingText');
const words = [
    'Web Experiences.',
    'Front-End Developer.',
    'Software Engineer.',
    'UI/UX Enthusiast.',
    'Creative Coder.'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 100; 

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {

        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        speed = 70;
    } else {

        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        speed = 130;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 1500; 
        isDeleting = true;
    }
    
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; 
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();



// ============================================
/* ============================================CUSTOM CURSOR============================================ */

const cursor = document.createElement("div");

cursor.classList.add("custom-cursor");

document.body.appendChild(cursor);


/* ============================================MOUSE POSITION============================================ */

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;


/* ============================================MOUSE MOVE============================================ */

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});



function animateCursor() {

    cursorX += (mouseX - cursorX) * 0.6;
    cursorY += (mouseY - cursorY) * 0.6;


    cursor.style.transform = `
        translate3d(
            ${cursorX}px,
            ${cursorY}px,
            0
        )
        translate(-50%, -50%)
    `;


    requestAnimationFrame(animateCursor);
}

animateCursor();


/* ============================================INTERACTIVE ELEMENTS============================================ */

const interactiveElements = document.querySelectorAll(`
    a,
    button,
    input,
    textarea,
    select,
    .nav-btn,
    .hero-btn,
    .project-btn,
    .contact-btn,
    .logo,
    .skill-card,
    .project-card,
    .featured-project,
    .about-card,
    .about-btn,
    .stack-item
`);


/* ============================================HOVER EFFECT============================================ */

interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        cursor.classList.add("hover");

    });


    element.addEventListener("mouseleave", () => {

        cursor.classList.remove("hover");

    });

});


/* ============================================MOUSE DOWN============================================ */

document.addEventListener("mousedown", () => {

    cursor.classList.add("active");

});


/* ============================================MOUSE UP============================================ */

document.addEventListener("mouseup", () => {

    cursor.classList.remove("active");

});



/* ============================================BACK TO TOP============================================ */

const backToTop = document.getElementById("backToTop");



window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});



backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===================================

