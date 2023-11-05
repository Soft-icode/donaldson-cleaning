
const changeNavbarColor = () => {
    if (window.scrollY >= 580) {
document.getElementById('nav').classList.add('scrolled');
document.getElementById('logo').classList.add('scrolled')
    } else {
        document.getElementById('nav').classList.remove('scrolled')
        document.getElementById('logo').classList.remove('scrolled')
    }
  };

  window.addEventListener("scroll", changeNavbarColor);
