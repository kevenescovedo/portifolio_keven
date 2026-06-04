// 1. Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('hamburger-icon');
  
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
  
  // Toggle Hamburger to Close icon
  if (menu.classList.contains('flex')) {
    icon.setAttribute('icon', 'solar:close-square-linear');
  } else {
    icon.setAttribute('icon', 'solar:hamburger-menu-linear');
  }
}

// 2 & 4. Centralized Scroll Listener with requestAnimationFrame for Performance
let isScrolling = false;
const navbar = document.getElementById('navbar');
const scrollProgress = document.getElementById('scroll-progress');
const videoWrapper = document.getElementById('video-parallax-wrapper');

if (videoWrapper) videoWrapper.style.willChange = 'transform';

window.addEventListener('scroll', () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollProgress) {
        const scrolledPercent = height > 0 ? (winScroll / height) * 100 : 0;
        scrollProgress.style.width = scrolledPercent + '%';
      }

      if (navbar) {
        if (winScroll > 30) {
          navbar.style.background = 'rgba(0, 0, 0, 0.75)';
          navbar.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        } else {
          navbar.style.background = 'rgba(0, 0, 0, 0)';
          navbar.style.borderBottom = 'none';
        }
      }
      
      if (videoWrapper && window.innerWidth >= 768) {
        videoWrapper.style.transform = `translateY(${winScroll * 0.25}px)`;
      } else if (videoWrapper) {
        videoWrapper.style.transform = 'none';
      }

      isScrolling = false;
    });
    isScrolling = true;
  }
});

// 3. Typewriter Effect
const phrases = [
  "Desenvolvedor Full Stack & Mobile",
  "Analista de Sistemas",
  "Vibe Coding",
  "Search Optimization"
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterEl = document.getElementById('typewriter-text');
let typingSpeed = 80;

function handleTypewriter() {
  const currentPhrase = phrases[phraseIndex];
  
  if (!isDeleting) {
    // Typing characters
    typewriterEl.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 85;

    // If the phrase is complete
    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pause at the end of the phrase
    }
  } else {
    // Deleting characters
    typewriterEl.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 40;

    // If fully deleted
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 300; // Pause before typing the next phrase
    }
  }
  
  setTimeout(handleTypewriter, typingSpeed);
}

// Start Typewriter loop on load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(handleTypewriter, 1000);
});

// 5. Floating code particles on canvas
(function() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const symbols = ['01','{}','</>','fn()','&&','||','=>','[]','const','null','0x','#!/','if()','//','/*','git','npm','API','SQL','AI'];
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function spawn() {
    const side = Math.random() > 0.5 ? 'left' : 'right';
    return {
      x: side === 'left' ? Math.random() * W * 0.45 : W * 0.55 + Math.random() * W * 0.45,
      y: H + 20,
      text: symbols[Math.floor(Math.random() * symbols.length)],
      speed: 0.4 + Math.random() * 0.6,
      opacity: 0,
      targetOpacity: 0.15 + Math.random() * 0.25,
      fontSize: 10 + Math.floor(Math.random() * 8),
      drift: (Math.random() - 0.5) * 0.3,
      hue: [195, 263, 160, 320][Math.floor(Math.random()*4)]
    };
  }

  for (let i = 0; i < 22; i++) {
    const p = spawn();
    p.y = Math.random() * H;
    p.opacity = p.targetOpacity * Math.random();
    particles.push(p);
  }

  function draw() {
    if (window.scrollY > window.innerHeight * 1.2) {
      // Pause rendering when hero is completely out of view
      requestAnimationFrame(draw);
      return;
    }
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p, i) => {
      p.y -= p.speed;
      p.x += p.drift;
      if (p.y < 0 - p.fontSize * 2) {
        particles[i] = spawn();
        return;
      }
      const fade = Math.min(1, (H - p.y) / (H * 0.15));
      ctx.save();
      ctx.globalAlpha = p.opacity * fade;
      ctx.font = `${p.fontSize}px 'Geist Mono', monospace`;
      ctx.fillStyle = `hsl(${p.hue}, 80%, 70%)`;
      ctx.fillText(p.text, p.x, p.y);
      ctx.restore();
    });
    if (particles.length < 22 && Math.random() < 0.02) particles.push(spawn());
    requestAnimationFrame(draw);
  }
  draw();
})();

// 6. Intersection Observer for AOS Animations and Counter Up
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Apply delay if exists
        const delay = entry.target.getAttribute('data-delay');
        if (delay) {
          entry.target.style.animationDelay = delay + 'ms';
        }
        
        // Handle fade/scale animations
        const animType = entry.target.getAttribute('data-aos');
        if (animType === 'scale-up') {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'scale(1)';
          entry.target.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        } else if (animType) {
          entry.target.classList.add('fade-in-up'); // Reusing existing class for simplicity
        }

        // Handle Counter Up
        const counters = entry.target.querySelectorAll('.counter');
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 1500; // ms
          const step = target / (duration / 16); // 60fps
          
          let current = 0;
          const updateCounter = () => {
            current += step;
            if (current < target) {
              counter.innerText = Math.ceil(current);
              requestAnimationFrame(updateCounter);
            } else {
              counter.innerText = target;
            }
          };
          updateCounter();
          counter.classList.remove('counter'); // Prevent re-triggering
        });

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Initial setup for aos elements
  document.querySelectorAll('[data-aos]').forEach(el => {
    if (el.getAttribute('data-aos') === 'scale-up') {
      el.style.opacity = '0';
      el.style.transform = 'scale(0.9)';
    } else {
      el.style.opacity = '0';
    }
    observer.observe(el);
  });

  // 7. 3D Tilt Effect para a Seção 2
  document.querySelectorAll('#sobre .glass-panel').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      // Efeito mais suave
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      card.style.transition = 'transform 0.1s ease-out';
      card.style.zIndex = '20';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.zIndex = '1';
    });
  });
});

// Accordion Toggle (legacy, kept for compatibility)
function toggleAccordion(element) {
  const isCurrentlyActive = element.classList.contains('active');
  document.querySelectorAll('.accordion-item').forEach(item => {
    item.classList.remove('active');
  });
  if (!isCurrentlyActive) {
    element.classList.add('active');
  }
}

// Card Details Toggle (new unified section)
function toggleCardDetails(event, detailsId, btn) {
  if (event) {
    event.stopPropagation();
  }
  const details = document.getElementById(detailsId);
  if (!details) return;
  
  const isOpen = details.classList.contains('open');
  
  // Close all other open details
  document.querySelectorAll('.card-details.open').forEach(d => {
    if (d.id !== detailsId) {
      d.classList.remove('open');
      // Reset the button of that card
      const parentCard = d.closest('.showcase-card');
      if (parentCard) {
        const otherBtn = parentCard.querySelector('.card-expand-btn');
        if (otherBtn) otherBtn.classList.remove('expanded');
      }
    }
  });
  
  if (isOpen) {
    details.classList.remove('open');
    btn.classList.remove('expanded');
  } else {
    details.classList.add('open');
    btn.classList.add('expanded');
  }
}

// Contact Form Fake Submit
function submitForm(event) {
  event.preventDefault();
  const btn = document.getElementById('submit-btn');
  const msg = document.getElementById('success-msg');
  btn.innerHTML = '<iconify-icon icon="lucide:loader-2" class="animate-spin"></iconify-icon> Enviando...';
  btn.disabled = true;
  
  setTimeout(() => {
    btn.innerHTML = 'Enviado!';
    btn.classList.add('bg-emerald-500', 'text-white');
    btn.classList.remove('bg-white', 'text-black');
    msg.classList.remove('hidden');
    msg.classList.remove('opacity-0');
    msg.classList.add('opacity-100');
    document.getElementById('contact-form').reset();
  }, 1500);
}

// Animate Soft Skills Progress Bars
document.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress-bar-fill');
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.style.getPropertyValue('--target-width');
      }
    });
  }, { threshold: 0.5 });
  
  progressBars.forEach(bar => {
    bar.style.width = '0%';
    bar.style.transition = 'width 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.5s';
    progressObserver.observe(bar);
  });
});
