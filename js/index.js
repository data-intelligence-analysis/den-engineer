const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

/*Everytime we click on the button it should add the class*/
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

/*Links to different sections within the page*/
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        /*The navigation menu closes when you click on different sections within the page*/
        document.body.classList.remove('nav-open');
    })
})
