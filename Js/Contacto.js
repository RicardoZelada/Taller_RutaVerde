var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  /*document.getElementById('moar').onclick = function() {
    var section = document.createElement('section');
    section.className = 'section--purple wow fadeInDown';
    this.parentNode.insertBefore(section, this);
  };*/

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

  


  window.mostrarErrores = (listaErrores)=>{
    let errores = document.querySelector("#navErrores");
    let ol = document.createElement("ol");
    ol.classList.add("alert");
    listaErrores.forEach((elementos)=>{
      let li = document.createElement("li");
      li.classList.add("text-danger");
      li.innerText = elementos;
      ol.appendChild(li)
    });
    errores.appendChild(ol);
  }

  window.listaRegistros = []//lista donde guardo el objeto resgistro

  const btnAux = document.querySelector("#btnAgregar");

  btnAux.addEventListener('click',()=>{
    let errorDiv = document.querySelector("#navErrores");
    errorDiv.innerHTML = "";

    let name = document.querySelector("#inputNombre").value.trim();
    let phone = document.querySelector("#inputTelefono").value.trim();
    //let box_1 = document.querySelector("#inputCheck_1");
    //let box_2 = document.querySelector("#inputCheck_2");
    let option = document.querySelector(".selectExperiencias").value;
    let mail = document.querySelector("#inputEmail").value.trim();
    //let description = document.querySelector("#inputArea").value;

    listaErrores = [];//lista donde guardo los errores
    if(name === ""){
      listaErrores.push("Ingrese su nombre");
    }if(phone === ""){
      listaErrores.push("Ingrese su numero telefonico");  
    }if(option === "#"){
      listaErrores.push("Escoja una opcion");
    }if(mail === ""){
      listaErrores.push("Ingrese su correo");
    }if(listaErrores.length === 0){
      let registro = {}
      registro.nombre = name;
      registro.telefono = phone;
      registro.seleccion = option;
      registro.correo = mail;
      //registro.description = mensaje;

      window.listaRegistros.push(registro);//ingreso 
      Swal.fire(
        'Gracias!',
        'Registro ingresado correctamente!',
        'success'
      )
    }else{
      window.mostrarErrores(listaErrores);//muestro la lista de errores
    }
  })