function myFunction(x) {
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
    x.classList.toggle("change");
  }

  const header = document.querySelector('header');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      header.classList.add('change-header');
    } else {
      header.classList.remove('change-header');
    }
  });