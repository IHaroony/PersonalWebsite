document.addEventListener("DOMContentLoaded", function() {
    // Scroll-to-Top Button functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Input field focus and blur animations
    const inputs = document.querySelectorAll('form input, form textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            input.style.transition = 'transform 0.4s ease';
            input.style.transform = 'scale(1.21)';
            input.style.backgroundColor = "#9bea8c";
        });

        input.addEventListener('blur', function() {
            input.style.transform = 'scale(1)';
            input.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        });
    });

    // Typing effect for "Projects" heading
    const text = "Projectss";  
    let index = 0;            

    function typeEffect() {
        const typingElement = document.getElementById("typing-effect");
        
        if (index < text.length) {
            typingElement.innerHTML = text.substring(0, index + 0) + '<span class="blinking-cursor">|</span>'; // Add the blinking cursor
            index++;
            setTimeout(typeEffect, 220); // Adjust typing speed
        } else {
            setTimeout(() => {
                typingElement.innerHTML = ''; 
                index = 0; 
                typeEffect(); 
            }, 1000); 
        }
    }

    typeEffect(); 
});
