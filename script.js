document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Mensagem enviada com sucesso!");
      form.reset();
    });

  }

  const assistantBtn = document.createElement("button");
  assistantBtn.id = "assistant-btn";
  assistantBtn.innerText = "🤖 Posso ajudar?";
  document.body.appendChild(assistantBtn);


  const chatBox = document.createElement("div");
  chatBox.id = "chat-box";
  chatBox.innerHTML = `
    <div class="chat-header">Assistente Virtual</div>
    <div class="chat-body" id="chat-body">
      <div class="bot-msg">${greeting()}, em que posso ajudar?</div>
      <div class="bot-msg">Descreva sua dúvida ou consulte o FAQ.</div>
    </div>
    <input type="text" id="chat-input" placeholder="Digite aqui..." />
  `;
  document.body.appendChild(chatBox);

  assistantBtn.addEventListener("click", () => {
    chatBox.classList.toggle("visible");
  });


  document.getElementById("chat-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const val = this.value;
      if (val.trim()) {
        const msg = document.createElement("div");
        msg.className = "user-msg";
        msg.innerText = val;
        document.getElementById("chat-body").appendChild(msg);
        this.value = "";
        setTimeout(() => {
          const reply = document.createElement("div");
          reply.className = "bot-msg";
          reply.innerText = "Recebido! Em breve um atendente irá ajudar ou acesse a página de Contato.";
          document.getElementById("chat-body").appendChild(reply);
        }, 1000);
      }
    }
  });
  

  function greeting() {
    const h = new Date().getHours();
    if (h < 12) return "Bom dia";
    if (h < 18) return "Boa tarde";
    return "Boa noite";
  }
});
