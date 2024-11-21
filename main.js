document.addEventListener("DOMContentLoaded", function () {
    // Loader Section
    const loader = document.querySelector('.loading');
    const profileSection = document.querySelector('.profile'); // Assuming the profile section has class 'profile'
  
    setTimeout(() => {
      loader.style.display = 'none'; // Hide the loader after 3 seconds
      profileSection.style.display = 'block'; // Show the profile section after the loader disappears
    }, 3000);
  
    // Smooth Scrolling for Sidebar Links
    const sidebarLinks = document.querySelectorAll('#sidebar a');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  
    // Section Visibility on Scroll
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    // Typing Animation for Name
    const nameElement = document.querySelector('h1.typing-effect');
    const nameText = nameElement.innerText;
    nameElement.innerText = '';
    let i = 0;
  
    function typeWriter() {
      if (i < nameText.length) {
        nameElement.innerText += nameText.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
      }
    }
  
    typeWriter();
  });
  
  // Skill Card Hover Effect
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.classList.add('hovered');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('hovered');
    });
  });
  
  // Project Image Hover Effect
  const projectImages = document.querySelectorAll('.project img');
  projectImages.forEach(img => {
    img.addEventListener('mouseover', () => {
      img.style.transform = 'scale(1.05)';
    });
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });
  
  // Animated Scroll to Next Section
  const nextSectionLinks = document.querySelectorAll('.next-section-link');
  nextSectionLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Toggle Navigation Menu (for smaller screens)
  const navToggleButton = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  navToggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
  
  // Parallax Effect for Scrolling
  window.addEventListener('scroll', function () {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
      const speed = element.getAttribute('data-speed');
      const offset = window.pageYOffset * speed;
      element.style.transform = translateY(${offset}px);
    });
  });
  
  // Animated Pop-Up on Scroll (Projects, Skills, etc.)
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  const animateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeIn');
      }
    });
  }, { threshold: 0.2 });
  
  animatedElements.forEach(element => {
    animateObserver.observe(element);
  });
  
  // Smooth Scroll to Top Button
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });