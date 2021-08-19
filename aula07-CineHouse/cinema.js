let catalogo = require('./dataBase/catalogo.json')


function adicionarFilme2(filme){
    catalogo.push(filme)
    return catalogo
};

function buscarFilme(codigo) {
    for (let i=0; i < catalogo.length; i++){
        const filme = catalogo[i];
        if(codigo == filme.codigo){
            return filme
        }
    }
};

function alterarStatusEmCartaz(lista, codigo) {
    for (let i=0; i < lista.length; i++){
        const filme = lista[i];
        if(codigo == filme.codigo){
            if(filme.emCartaz){
            filme.emCartaz = filme.emCartaz ? false : true

            return filme
            }
        }
    }
};

function listarTodosFilmes(lista){
    let informacoes = 'Confira abaixo nosso catálogo de filmes'
    for(i = 0; i < lista.length; i++){
        const item = lista[i];
        informacoes += `
        ------------------
        Título: ${$item.titulo}
        Está em cartaz: ${item.emCartaz ? 'sim' : 'não'}
        Atores: ${item.atores.join(", ")}
        ------------------
        `
        }
    return informacoes
};

function listarFilmesEmCartaz(lista){
    let informacoes = 'Confira abaixo nossos filmes que estão em cartaz esse mes'
    for(i = 0; i < lista.length; i++){
        const item = lista[i];
        if(item.emCartaz){
            informacoes += `
                ---------------
                Título: ${$item.titulo}
                Atores: ${item.atores.join(", ")}
                ---------------
            `
        }
    }
    return informacoes
};

function listarFilmesDeLongaDuracao(lista){
    let informacoes = 'Confira abaixo nosso catálogo de filmes'
    lista.forEach(item => {
        if(item.duracao >= 2){
            informacoes += `
            -----------------------
            Título: ${$item.titulo}
            Está em cartaz: ${item.emCartaz ? 'sim' : 'não'}
            Atores: ${item.atores.join(", ")}
            -----------------------
            `
        }
    })
    return informacoes
};
