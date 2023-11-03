document.addEventListener('DOMContentLoaded', function () {
    const imagenturno = document.querySelector('.imagenturno');
    let isScrolling = false;
    let lastScrollY = 0;
    
    // Función para controlar el desplazamiento
    function onScroll() {
        // Obtiene el valor del desplazamiento vertical
        const scrollY = window.scrollY;
        
        // Obtén el ancho de la ventana actual
        const windowWidth = window.innerWidth;
        
        // Define el ancho a partir del cual deseas desactivar la animación (puedes ajustarlo según tus necesidades)
        const mobileWidth = 768; // Por ejemplo, si deseas desactivarla en pantallas más pequeñas que 768px
        
        if (windowWidth >= mobileWidth) {
            // Verifica si el ancho de la ventana es suficientemente grande
            if (scrollY > lastScrollY) {
                // Desplazamiento hacia abajo
                imagenturno.style.transform = 'translateX(0)';
            } else {
                // Desplazamiento hacia arriba
                imagenturno.style.transform = 'translateX(-50%)';
            }
        } else {
            // Desactiva la animación si la ventana es demasiado estrecha (en un dispositivo móvil)
            imagenturno.style.transform = 'translateX(0)';
        }
    
        // Actualiza el valor del último desplazamiento
        lastScrollY = scrollY;
        isScrolling = true;
    }
    
    // Agrega un evento de desplazamiento
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                onScroll();
                isScrolling = false;
            });
        }
    });
    
});
