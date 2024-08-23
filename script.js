//Carrousel
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

//Mostrar ocultar menu responsivo
let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

window.onscroll = function(){
    efectoHabilidades();
}

//Barras de porcentajes de skills
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javacore");
        habilidades[1].classList.add("comunicacion");
        habilidades[2].classList.add("maven");
        habilidades[3].classList.add("trabajoequipo");
        habilidades[4].classList.add("hibernate");
        habilidades[5].classList.add("resoluciondeproblemas");
        habilidades[6].classList.add("springframework");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("mysql");
        habilidades[9].classList.add("dedicacion");
    }
}


//listener para ingresar solo numeros en form / telefono
document.getElementById('telefono').addEventListener('input', function(event) {
    this.value = this.value.replace(/\D/g, '');
});


//Validacion de casillas en form de contacto
document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); 

    const fields = [
        document.getElementById('nombre'),
        document.getElementById('telefono'),
        document.getElementById('email'),
        document.getElementById('tema'),
        document.getElementById('mensaje')
    ];

    
    for (let field of fields) {
        if (field.value.trim() === '') {
            alert(`Por favor, completa el campo ${field.placeholder}`);
            field.focus();
            return; 
        }
    }
    fields.forEach(field => field.value = '');
    alert("Formulario enviado exitosamente!");
    
});



