const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";

  const serviceID = "default_service";
  const templateID = "template_w9y46ln";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";

      // Notificación de éxito
      Toastify({
        text: "¡Mensaje enviado con éxito! 🎉",
        duration: 4000,
        close: true,
        gravity: "top", // 'top' or 'bottom'
        position: "right", // 'left', 'center', or 'right'
        backgroundColor: "#b2b211",
        stopOnFocus: true,
      }).showToast();

      // Mensaje de agradecimiento (opcional)
      Toastify({
        text: "¡Gracias por contactarnos! 😊",
        duration: 5000,
        close: true,
        gravity: "top", // 'top' or 'bottom'
        position: "right", // 'left', 'center', or 'right'
        backgroundColor: "#000000",
        stopOnFocus: true,
      }).showToast();

      // Resetea el formulario
      document.getElementById("form").reset();
    },
    (err) => {
      btn.value = "Send Email";

      // Notificación de error
      Toastify({
        text: "Error al enviar el mensaje. Intenta nuevamente.",
        duration: 5000,
        close: true,
        gravity: "top", // 'top' or 'bottom'
        position: "right", // 'left', 'center', or 'right'
        backgroundColor: "#FF5733",
        stopOnFocus: true,
      }).showToast();
    }
  );
});
