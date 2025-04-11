/// Wait for full page to load
document.addEventListener('DOMContentLoaded', function () {
    // ===============================
    // 1. NEWSLETTER FORM VALIDATION
    // ===============================
    const form = document.querySelector('.news-form');
    const emailInput = form.querySelector('.news-send');
  
    form.addEventListener('submit', function (e) {
      const email = emailInput.value.trim();
      if (!email || !email.includes('@')) {
        alert('Please enter a valid email address.');
        e.preventDefault(); // Form submit will stop
      } else {
        alert('Thank you for subscribing!');
      }
    });
  
    // ===============================
    // 2. SMOOTH SCROLL FOR NAV LINKS
    // ===============================
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // ===============================
    // 3. TESTIMONIAL AUTO-SLIDER
    // ===============================
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;
  
    function showTestimonial(index) {
      testimonials.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
      });
    }
  
    function startTestimonialSlider() {
      showTestimonial(currentIndex);
      setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
      }, 3000);
    }
  
    if (testimonials.length > 0) {
      startTestimonialSlider();
    }
  
    // ===============================
    // 4. STICKY NAVBAR ON SCROLL
    // ===============================
    const header = document.querySelector('.header-contant');
    window.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
        header.classList.add('sticky-nav');
      } else {
        header.classList.remove('sticky-nav');
      }
    });
  });
  