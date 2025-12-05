let imagens = [
    'Imagens/img_1.png',
    'Imagens/img_2.png',
    'Imagens/img_3.png'
]

let indiceAtualListaImagem = 0

function exibirImagem () {
    let imagemCarrossel = document
        .getElementById('img-carrossel')
    imagemCarrossel.src = imagens[indiceAtualListaImagem]
}

setInterval(function() {
    exibirImagem()
    indiceAtualListaImagem++

    if (indiceAtualListaImagem > 2) {
        indiceAtualListaImagem = 0
    }
}, 3000);

exibirImagem()
indiceAtualListaImagem++

