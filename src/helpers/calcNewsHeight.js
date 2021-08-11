export default function calcHeight(quantidadeNoticias, tamanho) {
    
    if(window.innerWidth<=550) return quantidadeNoticias * tamanho + 300
    if(window.innerWidth<=800) return quantidadeNoticias * tamanho/1.5 - 150
    return quantidadeNoticias * tamanho/2 -200;    
}