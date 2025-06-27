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
  document.getElementById(id).style.display = 'block';
}

// Fechar modal
function fecharModal(id) {
  document.getElementById(id).style.display = 'none';
}

function sendMail(){
    let parms = {
        name: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        message: document.getElementById("mesnsagem").value,
    }
emailjs.send("service_jp4gq5l","template_mg97won",parms).then(alert("Email Sent!!"))
}

// mascara do telefone
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const telefoneInput = document.getElementById("telefone");

    telefoneInput.addEventListener("input", function () {
      let value = telefoneInput.value.replace(/\D/g, ''); // remove tudo que não for número

      if (value.length > 11) value = value.slice(0, 11); // limita a 11 dígitos

      if (value.length >= 2 && value.length <= 6) {
        telefoneInput.value = value.replace(/(\d{2})(\d+)/, "$1 $2");
      } else if (value.length > 6) {
        telefoneInput.value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, "$1 $2-$3");
      } else {
        telefoneInput.value = value;
      }
    });
  });
</script>