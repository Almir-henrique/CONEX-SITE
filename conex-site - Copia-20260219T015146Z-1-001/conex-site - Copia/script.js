// Mostrar botão de voltar ao topo
window.onscroll = function() {
  const btn = document.getElementById("btnTopo");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
};

// Voltar ao topo
function voltarAoTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Abrir modal
function abrirModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "block";
  }
}

// Fechar modal
function fecharModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
  }
}

// Fecha o modal ao clicar fora da área .modal-content
window.addEventListener("click", function(event) {
  const modais = document.querySelectorAll(".modal");
  modais.forEach(function(modal) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Todo o código dentro de um único 'DOMContentLoaded' para evitar duplicação
document.addEventListener("DOMContentLoaded", function () {
  // Função para enviar o e-mail usando o EmailJS
  function sendMail() {
    let params = {
      name: document.getElementById("name").value,  // Captura o nome do formulário
      email: document.getElementById("email").value,  // Captura o e-mail do formulário
      telefone: document.getElementById("telefone").value,
      mensagem: document.getElementById("mensagem").value,  // Captura a mensagem do formulário
    };

    // Envia o e-mail através do EmailJS
    emailjs.send("service_lns0fp6", "template_rv0h20a", params)
      .then(function(response) {
        alert("Email enviado com sucesso!");
      }, function(error) {
        alert("Erro ao enviar e-mail: " + error.text);
      });
  }

  // Impede o envio tradicional do formulário e chama a função sendMail
  document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();  // Impede o envio tradicional do formulário
    sendMail();  // Chama a função para enviar o e-mail
  });

  // Máscara de telefone
  const telefoneInput = document.getElementById("telefone");
  telefoneInput.addEventListener("input", function () {
    let value = telefoneInput.value.replace(/\D/g, ''); // Remove tudo que não for número

    if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos

    if (value.length >= 2 && value.length <= 6) {
      telefoneInput.value = value.replace(/(\d{2})(\d+)/, "$1 $2");
    } else if (value.length > 6) {
      telefoneInput.value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, "$1 $2-$3");
    } else {
      telefoneInput.value = value;
    }
  });
});