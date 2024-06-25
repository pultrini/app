document.addEventListener('DOMContentLoaded', function() {
    const buttonNao = document.getElementById('button-nao');
    const buttonSim = document.getElementById('button-sim');
    const output = document.getElementById('output');
    const imagem = document.getElementById('imagem');

    buttonNao.addEventListener('mouseover', function() {
        const newTop = Math.floor(Math.random() * 200) + 'px';
        const newLeft = Math.floor(Math.random() * 200) + 'px';
        buttonNao.style.top = newTop;
        buttonNao.style.left = newLeft;
        buttonNao.style.position = 'absolute';
    });

    buttonSim.addEventListener('click', function() {
        window.location.href = 'outra_pagina.html';
    });
});
