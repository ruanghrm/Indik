function atualizarBarraProgresso(nivelAtual) {
    const bolinhas = document.querySelectorAll('.bolinha');
    const niveisTexto = document.querySelector('.niveis');
    const barraProgresso = document.querySelector('.barra-progresso');
    
    bolinhas.forEach((bolinha, index) => {
        if (index < nivelAtual) {
            bolinha.classList.add('alcancado');
        } else {
            bolinha.classList.remove('alcancado');
        }
    });

    const larguraBarra = (nivelAtual - 1) * 10.9;
    barraProgresso.style.width = `${larguraBarra}%`;

    niveisTexto.textContent = `Nível ${nivelAtual}/10`;
}

atualizarBarraProgresso(5);
