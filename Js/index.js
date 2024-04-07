const numero = document.querySelector('.pokemon-number')
const nome = document.querySelector('.pokemon-name')
const input =document.querySelector('.input-search')
const btnPrev = document.querySelector('.prev')
const btnNext = document.querySelector('.next')
const gif = document.querySelector('.pokemon_image')
const formulario = document.querySelector('.formulario')
const frente = document.querySelector('.frente')
const container = document.querySelector('#container')
const pokedexAberta = document.querySelector('.pokedex');
const close = document.querySelector('#close');
const titulo = document.querySelector('.titulo');

let Procurar = 1



    frente.addEventListener("click", () => {
    container.classList.toggle('esconder')
    })

 
    close.classList.add('esconder')
   

    frente.addEventListener("click", () => {
        close.classList.remove('esconder')
        frente.classList.add('esconder')
        titulo.classList.add('esconder')
        
        })

    close.addEventListener( "click" ,()=>{
        close.classList.add('esconder')
        container.classList.add('esconder')
        frente.classList.remove('esconder')
        titulo.classList.remove('esconder')
    })
 

// RESPOSTA DA API
const fetchPokemon = async (pokemon)=>{

    const RespostaApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if(RespostaApi.status===200){
         const data = await RespostaApi.json()
         return data}

}




// RENDERIZAÇÃO
const renderizarPokemon = async (pokemon)=>{

    nome.innerHTML = 'Carregando'
numero.innerHTML = ''
    const data = await fetchPokemon(pokemon)

    if(data){
    gif.style.display = 'block'
    nome.innerHTML = data.name
    numero.innerHTML = data.id
    gif.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    input.value=''
    Procurar = data.id
}
 else{
    gif.style.display = 'none'
    nome.innerHTML = 'Não encontrado'} 
   
    
}




// PESQUISA
formulario.addEventListener('submit', (event)=>{

    event.preventDefault()

    renderizarPokemon(input.value.toLowerCase())

  
})
// PESQUISA


// BOTÕES
btnPrev.addEventListener('click', ()=>{

    if(Procurar>1){
    Procurar -=1
    renderizarPokemon(Procurar)}
    
})


btnNext.addEventListener('click', ()=>{
 Procurar +=1
 renderizarPokemon(Procurar)
})

renderizarPokemon(Procurar)
// BOTÕES
