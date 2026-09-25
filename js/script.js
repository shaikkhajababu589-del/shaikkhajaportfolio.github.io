document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Navbar Background on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'shadow-cyber-neon/5');
        } else {
            navbar.classList.remove('shadow-lg', 'shadow-cyber-neon/5');
        }
    });

    // Typewriter Effect for Hero Section
    const textArray = ["Cyber Security Undergrad", "CSE Diploma Holder", "Security Enthusiast"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;
    const typewriterElement = document.getElementById('typewriter');

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typewriterElement.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typewriterElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 500);
        }
    }

    if (textArray.length) setTimeout(type, newTextDelay + 250);

    // Form Submission Handling (Basic Client-Side Simulation)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            
            btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Sending...';
            btn.disabled = true;

            // Simulate sending process delay
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                btn.classList.add('bg-cyber-neon', 'text-black');
                btn.classList.remove('text-cyber-neon', 'border-cyber-neon');
                contactForm.reset();

                // Reset button after success
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    btn.classList.remove('bg-cyber-neon', 'text-black');
                    btn.classList.add('text-cyber-neon', 'border-cyber-neon');
                }, 3000);
            }, 1500);
        });
    }
});
