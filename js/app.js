const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Solicitud enviada correctamente.");

    form.reset();

});