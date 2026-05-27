let tamanhoFonteAtual = 100;

const btnAbrir = document.getElementById('btnAbrir');
const menu = document.getElementById('opcoesAcessibilidade');

document.addEventListener('DOMContentLoaded', () => {
const script = document.createElement('script');

script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';

script.onload = () => {
    new window.VLibras.Widget('https://vlibras.gov.br/app');
};

document.head.appendChild(script);

const modoEscuro = localStorage.getItem('modoEscuro');

if (modoEscuro === 'true') {
    document.body.classList.add('modoEscuro');
}

const linksDestacados = localStorage.getItem('linksDestacados');
if (linksDestacados === 'true') {
    document.body.classList.add('linksDestacados');
}
});

btnAbrir.addEventListener('click', () => {
    const aberto = menu.classList.toggle('aberto');
    btnAbrir.setAttribute('aria-expanded', aberto);
});

document.getElementById('aumentarFonte').addEventListener('click', () => {
    if (tamanhoFonteAtual < 200) {
    tamanhoFonteAtual += 10;
    document.documentElement.style.fontSize = `${tamanhoFonteAtual}%`;
}
});

document.getElementById('diminuirFonte').addEventListener('click', () => {
    if (tamanhoFonteAtual > 50) {
    tamanhoFonteAtual -= 10;
    document.documentElement.style.fontSize = `${tamanhoFonteAtual}%`;
}
});

document.getElementById('toggleEscuro').addEventListener('click', () => {
    const ativo =
    document.body.classList.toggle('modoEscuro');
    localStorage.setItem('modoEscuro', ativo);
});

document.getElementById('toggleInverter').addEventListener('click', () => {
    const inverterCores = document.body.classList.toggle('inverter')
    document.body.classList.toggle('inverter', inverterCores);
});

document.getElementById('toggleLinks').addEventListener('click', () => {
    const ativo =
    document.body.classList.toggle('linksDestacados');
    localStorage.setItem('linksDestacados', ativo);
});

document.getElementById('resetarAcessibilidade').addEventListener('click', () => {
    tamanhoFonteAtual = 100;
    document.documentElement.style.fontSize = '';
    document.body.classList.remove(
    'modoEscuro',
    'inverterCores',
    'linksDestacados'
);

localStorage.removeItem('modoEscuro');
localStorage.removeItem('linksDestacados');
});
