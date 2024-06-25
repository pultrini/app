document.addEventListener('DOMContentLoaded', function() {
    const buttonSim = document.getElementById('button-sim');
    const buttonNao = document.getElementById('button-nao');
    const output = document.getElementById('output');

    buttonSim.addEventListener('click', function() {
        output.textContent = 'Te enganei rsrs, única coisa que te confirmo é um rodizio ou franguinho frito :)';
    });

    buttonNao.addEventListener('click', function() {
        output.textContent = 'Beleza! Vai ser surpresa então!';
    });
});
