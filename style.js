
    <script>
        // Mobile menu toggle
        document.getElementById('menu-btn').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                document.getElementById('mobile-menu').classList.add('hidden');
            });
        });
        
        // Highlight active navigation link
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
        
        // Animate skill bars on scroll
        const skillBars = document.querySelectorAll('.skill-bar');
        
        const animateSkillBars = () => {
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('#skills').forEach(section => {
            observer.observe(section);
        });
        document.addEventListener('DOMContentLoaded', function() {
          const sendMessageButton = document.getElementById('sendMessageButton');
      
          sendMessageButton.addEventListener('click', function() {
            const recipient = 'mostafaraadkamal9@gmail.com';
            const subject = encodeURIComponent('Inquiry for Interview');
            const body = encodeURIComponent('Hello, I am contacting you...');
            const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
      
            // Create a temporary <a> element
            const tempLink = document.createElement('a');
            tempLink.href = mailtoLink;
            tempLink.style.display = 'none'; // Hide it from the user
            document.body.appendChild(tempLink);
      
            // Programmatically click the link
            tempLink.click();
      
            // Remove the temporary link
            document.body.removeChild(tempLink);
    });
  });
    </script>
