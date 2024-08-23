document.addEventListener('DOMContentLoaded', function() {
    const carrusel = document.getElementById('carrusel-intereses');
    const intereses = carrusel.querySelectorAll('.interes');
    let currentIndex = 0;

    function updateCarousel() {
        intereses.forEach((interes, index) => {
            interes.classList.remove('active', 'prev', 'next');
            let offset = (index - currentIndex + intereses.length) % intereses.length;
            if (offset === 0) {
                interes.classList.add('active');
            } else if (offset === intereses.length - 1) {
                interes.classList.add('prev');
            } else if (offset === 1) {
                interes.classList.add('next');
            }
        });
    }

    function moveNext() {
        currentIndex = (currentIndex + 1) % intereses.length;
        updateCarousel();
    }

    updateCarousel();

    setInterval(moveNext, 2000);
});