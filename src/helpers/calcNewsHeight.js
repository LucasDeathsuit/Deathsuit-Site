export default function calcHeight(noticiasRef) {

    const quantidadeNoticias = noticiasRef.current.length;

    if(quantidadeNoticias === 0) {
        return 400
    }

    const heights = noticiasRef.current.map((noticia) => {
        return noticia.getBoundingClientRect().height
    })

    // const higher = Math.max.apply(null, heights);

    const totalHeight = heights.reduce((total, noticia) => {
        return total + noticia;
    }, 0)

    let quantidadeColunas = 0;
    if (window.innerWidth <= 550) {
        return totalHeight + 50;
    } else if (window.innerWidth <= 800) {
        quantidadeColunas = 2
        // return calculaTamanho(heights, quantidadeColunas)
        return calculaTamanho(totalHeight, quantidadeNoticias, quantidadeColunas)
    } else {
        if (quantidadeNoticias > 6 && quantidadeNoticias % 3 !== 0) {
            quantidadeColunas = 2
        } else {
            quantidadeColunas = 3
        }
        return calculaTamanho(totalHeight, quantidadeNoticias, quantidadeColunas)
    }

}

function calculaTamanho(tamanhoTotal, quantidadeDeItens, quantidadeDeColunas) {
    return tamanhoTotal / quantidadeDeColunas + tamanhoTotal / (quantidadeDeItens + 1)


    // function calculaTamanho(heights, quantidadeColunas) {



    // const firstColumn = heights.slice(0, Math.ceil(heights.length / quantidadeColunas));
    // let secondColumn = [0]
    // let thirdColumn = [0]
    // if (quantidadeColunas == 2) {
    //     secondColumn = heights.slice(Math.ceil(heights.length / quantidadeColunas), -1)
    // } else {
    //     secondColumn = heights.slice(Math.ceil(heights.length / quantidadeColunas), Math.ceil(2 * (heights.length / quantidadeColunas)))
    //     thirdColumn = heights.slice(Math.ceil(2 * (heights.length / quantidadeColunas), -1))
    // }

    // const firstColumnSize = firstColumn.reduce((total, altura) => {
    //     return total + altura;
    // }, 0)

    // const secondColumnSize = secondColumn.reduce((total, altura) => {
    //     return total + altura;
    // }, 0)

    // const thirdColumnSize = thirdColumn.reduce((total, altura) => {
    //     return total + altura;
    // }, 0)

    // let higher = firstColumnSize > secondColumnSize ? firstColumnSize : secondColumnSize
    // higher = higher > thirdColumnSize ? higher : thirdColumnSize

    // return higher + 150;
}