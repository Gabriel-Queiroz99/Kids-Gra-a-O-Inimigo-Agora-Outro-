import { useState } from 'react'
import Produto from './produto'
import satoro from './images/satoro.jpg'
import './paginaProdutos.css'

function PaginaProduto () {

return(
    <div id="all">



        
<Produto
nome="reutilizando componente"
imagem={satoro}
descricao="Boneco colecionável para fãs de anime."
preco="49,90"

/>

<Produto
nome="reutilizando componente"
imagem={satoro}
descricao="Boneco colecionável para fãs de anime."
preco="49,90"

/>

</div>
)

}


export default PaginaProduto;