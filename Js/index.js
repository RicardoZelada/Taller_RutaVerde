const btnEnvio = document.querySelector("#btnEnviar");

btnEnvio.addEventListener('click',()=>{
    let mail = document.querySelector("#inputMail").value.trim();
    if(mail != ""){
        Swal.fire(
            'Gracias!',
            'Tu mail se envio correctamente!',
            'success'
          )}else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes ingresar un correo',
              });
              }
})


wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100,
      callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }
  );
  wow.init();


  document.addEventListener("DOMContentLoaded", function(event) {
    Swal.fire({
        
        title: 'Bienvenido',
        text: 'Aprovecha nuestras experiencias e informate de nuestras medidas sanitarias',
        imageUrl: './Img/Logo_Ruta_Verde_2.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        
      })
  });