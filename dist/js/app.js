// Taking hamburger button, container of nav links, and DomTokenList of all nav links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

// Adding event listener to the hamburger so that when clicked
// css animations with transitions will be carried out
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach(link => {
    link.classList.toggle('fade');
  });
});
