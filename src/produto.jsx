

import { useState } from 'react'

import './produto.css'
import satoro from './images/satoro.jpg'

function Produto () {

const [cor , setCor] = useState ('#498497');

return (

<div id="todo">

<img src={satoro} alt="imagem legal"></img>

<div id="textos">

<h1>titulo experimental</h1>

<label>Escolha a cor do produto</label>
<input id="cor" type="color" value={cor} onChange = { (e)=> setCor(e.target.value)   }   ></input>

<h3>O que você precisa saber desse produto</h3>
<h4>descrição dfcjhnjswdhgwkjahgfhgrhhgajrhgkjdfgksjdgfkjsdfgsjdgfksdjfskjdfgskdgkfgskdfgskdfgksdjfgkjsdfgksdfgkdsfgkdsfgkdfgkdfgkdsjfdskjfdskjfjksdfkjsdfdk <br/> mais deschfdjhfdf</h4>


</div>

<div id="div3">
<h2>FRETE GRÁTIS ACIMA DE R$ 19</h2> <br/>
<h3>Chegará grátis entre 10/ago e 15/ago</h3> <br/>
<h3>Retire grátis entre 5 e 7/ago em uma loja presencial da Kids Graça</h3> <br/>
<label>Estoque disponível</label>
<input id="estoque" type="number" min="1" max="50" placeholder="50"></input>

</div>




</div>


)



}

export default Produto;