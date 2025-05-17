<script>
  ScrollReveal({
    reset: true, // Optionally reset elements to their initial state on scroll up
    distance: '60px', // Default distance elements travel
    duration: 800, // Default animation duration in milliseconds
    delay: 200, // Default delay before revealing elements
    easing: 'ease-in-out' // Default easing function
  });

  // Target specific elements with custom configurations
  ScrollReveal().reveal('.headline', { delay: 500, origin: 'top' });
  ScrollReveal().reveal('.paragraph', { delay: 700, origin: 'left' });
  ScrollReveal().reveal('.image', { duration: 1200, scale: 0.8 });
  ScrollReveal().reveal('.fade-in', { opacity: 0 });

  // You can also target multiple elements at once
  ScrollReveal().reveal('.feature', { interval: 200 }); // Reveals each '.feature' element with a 200ms delay
</script>
