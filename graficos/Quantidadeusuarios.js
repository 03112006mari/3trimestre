import {getcss, tickConfig } from "./common.js"
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
    plot_bgcolor: getCSS('--bg-color'), 
    paper_bgcolor: getCSS('--bg-color'),
    title:{
        text: 'Redes sociais com mais usuarios',
        x: 0,
        font: {
        color: getCSS('--primary-color'),
         size: 30,
          font: getCSS('--font')
        }
        },
        xaxis: {
        tickfont: tickConfig,
         title: {
        text: 'Nome das redes',
        font: {
        color: getCSS('--secondary-color')
        }
        }
        },
        yaxis: {
        tickfont: tickConfig,
        title: {
        text: 'Bilhões de usuários ativos',
        font: {
        color: getCSS('--secondary-color')
        }
    }
}
    }
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendchild(grafico)
    Plotly.newPlot(grafico, data, layout)
    }
    QuantidadeusuariosPorRede ()
