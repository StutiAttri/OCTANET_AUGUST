const sections = document.querySelectorAll('.about, .products, .testimonials, .cta, .box2');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});
sections.forEach(section => {
    observer.observe(section);
});