import {getcss } from "./common.js"
     async function QuantidadeusuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeusuarios = Object.values(dados) 

    const data = [
   {
    x: nomeDasRedes,
    y: quantidadeDeusuarios,
    type: 'bar',
     marker:{
    color: getCSS('--primary-color')
   }
}
]
    const layout = {
    plot_bgcolor: getcss('--bg-color'), 
    paper_bgcolor: getcss('--bg-color')
    }
    
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendchild(grafico)
    Plotly.newPlot(grafico, data, layout)
    }
    QuantidadeusuariosPorRede ()