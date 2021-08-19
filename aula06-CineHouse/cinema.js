let catalogo = [
    {
        codigo: 1,
        titulo: "Lágrimas do sol",
        duracao: 1.20,
        atores: ["Bruno", "João", "Joana"],
        anoDeLancamento: 2005,
        emCartaz: true
    },
    {
        codigo: 2,
        titulo: "Homens de preto",
        duracao: 1.40,
        atores: ["Will", "Smith", "Victor"],
        anoDeLancamento: 2008,
        emCartaz: false
    }
]



function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz) {
    catalogo.push(
        {
            codigo,
            titulo,
            duracao,
            atores,
            anoDeLancamento,
            emCartaz
        }
    )

};

function adicionarFilme2(filme){
    catalogo.push(filme)
    return catalogo
};

//adicionarFilme(3, 'Vingadores', 1.50, ["Will", "Smith", "Victor"], 2001, false);
//console.log(catalogo);

function buscarFilme(codigo) {
    for (let i=0; i < catalogo.length; i++){
        const filme = catalogo[i];
        if(codigo == filme.codigo){
            return filme
        }
    }
};
//buscarFilme(2);

function alterarStatusEmCartaz(codigo) {
    for (let i=0; i < catalogo.length; i++){
        const filme = catalogo[i];
        if(codigo == filme.codigo){
            if(filme.emCartaz == true){
                filme.emCartaz = false
            }else{
                filme.emCartaz = true
            }
            return filme
        }
    }
};