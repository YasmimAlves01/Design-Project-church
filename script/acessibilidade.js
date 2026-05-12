let tamanhoFonteAtual = 100; //porcentagem padrão da fonte
const btnAbrir = document.getElementById('btnAbrir');
const menu = document.getElementById('opcoesAcessibilidade');

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

document.getElementById('toggleCinza').addEventListener('click', () => {
    document.body.classList.toggle('coresCinza');
});

document.getElementById('toggleInverter').addEventListener('click', () => {
    document.body.classList.toggle('inverterCores');
});

document.getElementById('toggleLinks').addEventListener('click', () => {
    document.body.classList.toggle('linksDestacados');
});