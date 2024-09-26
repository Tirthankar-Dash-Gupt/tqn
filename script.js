// Add any interactive JavaScript features if necessary

document.addEventListener('DOMContentLoaded', function () {
  // Example of a simple scroll behavior for smooth navigation
  const links = document.querySelectorAll('nav ul li a');
  
  links.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = e.target.getAttribute('href').slice(1);
          const targetSection = document.getElementById(targetId);
          window.scrollTo({
              top: targetSection.offsetTop,
              behavior: 'smooth'
          });
      });
  });
});
