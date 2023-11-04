let grafico;
const ctx = document.getElementById('myChart')

export const crearGrafico = (datos,etiquetas) => {
    // si se le da algun valor a 'grafico', se borra el grafico
    if (grafico){
        grafico.destroy()
    }
// valor dado a grafico 
    grafico = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: etiquetas,
            datasets: [{
              label: 'My First Dataset',
              data: datos,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              hoverOffset: 4
            }]
          },
      });
}

