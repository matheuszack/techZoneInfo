// Seleciona os botões pela ID
const freeButton = document.getElementById('free-button');
const paidButton = document.getElementById('paid-button');

// Define o evento de clique do botão de rifa grátis
freeButton.addEventListener('click', () => {
  // Abre uma janela pop-up com a mensagem para enviar via WhatsApp
  window.open('https://wa.me/5521969483478/?text=Oi%2C%20gostaria%20de%20uma%20rifa%20gr%C3%A1tis%20quais%20n%C3%BAmeros%20est%C3%A3o%20dispon%C3%ADveis%3F');
});

// Define o evento de clique do botão de rifa paga
paidButton.addEventListener('click', () => {
  // Abre uma janela pop-up com a mensagem para enviar via WhatsApp
  window.open('https://wa.me/5521969483478/?text=Oi%2C%20gostaria%20de%20uma%20rifa%20paga%20para%20concorrer%20a%2050%20reais%2C%20quais%20rifas%20est%C3%A3o%20dispon%C3%ADveis%3F!');
});
