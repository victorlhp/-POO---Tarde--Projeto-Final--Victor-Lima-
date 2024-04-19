function desenharImagens(idContainer, arrayDeDestinos){
    let containerDeDestinos = document.getElementById(idContainer);

    containerDeDestinos.innerHTML = '';

    for (const destinos of arrayDeDestinos) {
        containerDeDestinos.innerHTML += `
            <div class="card">
                <img class="avatar" src="img/${destinos.foto}">
                <div class="conteudo">
                    <h3 class="titulo"><a href='detalhes.html?id=${destinos.id}'>${destinos.nome}</a></h3>
                    <p class="descricao">${destinos.biografia}</p>
                </div>
                <div class="barra-botoes">
                    <button class="btn-icone">
                        <i class="fa fa-crosshairs"></i>
                    </button>
                    <button class="btn-icone">
                        <i class="fa fa-car"></i>
                    </button>
                </div>
            </div>
        `;
    }
}


function desenharCardDetalhe(idCard, arrayDeDestinos, iddestinos){
    const destinos = arrayDeDestinos.find((destinos)=> destinos.id==iddestinos );
    let cardDetalhe = document.getElementById(idCard);
    cardDetalhe.innerHTML = `
        <img class="avatar" src="img/${destinos.foto}">
        <div class="conteudo">
            <h3 class="titulo">${destinos.nome}</h3>
            <p class="descricao">${destinos.biografia}</p>
        </div>
        <div class="barra-botoes">
            <button class="btn-icone">
                <i class="fa fa-crosshairs"></i>
            </button>
            <button class="btn-icone">
                <i class="fa fa-car"></i>
            </button>
        </div>
    `;


}