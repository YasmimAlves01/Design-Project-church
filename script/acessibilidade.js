const btnAbrir = document.getElementById('btnAbrir');
const menu = document.getElementById('opcoesAcessibilidade');

btnAbrir.addEventListener('click', () => {
    menu.style.display = (menu.style.display === 'none') ? 'block' : 'none';
});

document.getElementById('aumentarFonte').addEventListener('click', () => {
   
});

document.getElementById('diminuirFonte').addEventListener('click', () => {
    
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