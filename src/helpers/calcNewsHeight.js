export default function calcHeight(noticiasRef) {

    const quantidadeNoticias = noticiasRef.current.length;

    const heights = noticiasRef.current.map((noticia) => {
        return noticia.getBoundingClientRect().height
    })

    const higher = Math.max.apply(null, heights);


    const height = heights.reduce((total, noticia) => {
        return total + noticia;
    }, 0)


    if (window.innerWidth <= 550) return height + 100;
    if (window.innerWidth <= 800) {
        if (quantidadeNoticias <= 3) {
            return height + 100;
        } else {
            return height / 1.75;
        }
    }
    if (quantidadeNoticias <= 3) return higher + 100;
    return higher * 2 + 100;

    // if (window.innerWidth <= 550) return quantidadeNoticias * tamanho + 300
    // if (window.innerWidth <= 800 && quantidadeNoticias !== 4) {
    //     if (quantidadeNoticias <= 3) {
    //         return quantidadeNoticias * tamanho;
    //     }
    //     return 6 * tamanho / 1.5 - 150

    // }
    // if (quantidadeNoticias <= 3) {
    //     return quantidadeNoticias * tamanho;
    // }

    // return 6 * tamanho / 2 - 200;
}