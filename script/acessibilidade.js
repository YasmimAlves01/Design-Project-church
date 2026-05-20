let tamanhoFonteAtual = 100; //porcentagem padrão da fonte
const btnAbrir = document.getElementById('btnAbrir');
const menu = document.getElementById('opcoesAcessibilidade');

document.addEventListener('DOMContentLoaded', () => {
  const script = document.createElement('script');
  script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
  script.onload = () => {
    new window.VLibras.Widget('https://vlibras.gov.br/app');
  };
  document.head.appendChild(script);
});

btnAbrir.addEventListener('click', () => {
    menu.style.display = (menu.style.display === 'none') ? 'block' : 'none';
});

document.getElementById('aumentarFonte').addEventListener('click', () => {
    if (tamanhoFonteAtual < 200) { // limite máximo da fonte
        tamanhoFonteAtual += 10;

        document.documentElement.style.fontSize = `${tamanhoFonteAtual}%`;
    }
});

document.getElementById('diminuirFonte').addEventListener('click', () => {
    if (tamanhoFonteAtual > 50) {  // limite mínimo da fonte
        tamanhoFonteAtual -= 10;
        document.documentElement.style.fontSize = `${tamanhoFonteAtual}%`;
    }
});

document.getElementById('toggleEscuro').addEventListener('click', () => {
    const ativo = document.body.classList.toggle('modoEscuro');
    localStorage.setItem('modoEscuro', ativo);
});


document.getElementById('toggleInverter').addEventListener('click', () => {
    document.body.classList.toggle('inverterCores');
});

document.getElementById('toggleLinks').addEventListener('click', () => {
    document.body.classList.toggle('linksDestacados');
});

document.getElementById('toggleLinks').addEventListener('click', () => {
    document.body.classList.toggle('linksDestacados');
});
