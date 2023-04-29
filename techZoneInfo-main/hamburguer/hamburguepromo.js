// Seleciona o ícone de hambúrguer e o menu
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

// Adiciona um evento de clique ao ícone de hambúrguer
menuIcon.addEventListener('click', function() {
  // Adiciona ou remove a classe 'open' do menu para mostrar ou ocultá-lo
  menu.classList.toggle('open');
});
