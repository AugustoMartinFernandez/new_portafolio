setTimeout(function () {
  Swal.fire({
    title:
      ' ¿Quieres aprender desarrollo web totalmente gratis?',
    html: '¡Haz clic en "Sí" si estás interesado en recibir un curso gratuito!',
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Sí",
    cancelButtonText: "No",
    customClass: {
      confirmButton: "btn-yes",
      cancelButton: "btn-no",
    },
    allowOutsideClick: false,
    allowEscapeKey: false,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: '<span style="font-size: 2em;">📬</span> ¡Genial!',
        html: "Por favor, ve a mi formulario en la página, llena los detalles y deja tu correo electrónico para que pueda enviarte el curso.",
        icon: "success",
        confirmButtonText: "Entendido",
        customClass: {
          confirmButton: "btn-continue",
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
      });
    }
  });
}, 15000); // 40,000 milisegundos = 40 segundos


