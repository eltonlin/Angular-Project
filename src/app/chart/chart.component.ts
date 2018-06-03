import { Component, OnInit } from '@angular/core';
import { ChartService } from './chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  public doughnutChartLabels: any[] = [];
  public doughnutChartData: any [] = [];
  public doughnutChartType:string = 'doughnut';

  constructor(public chartService : ChartService) { 
      chartService.countCategorias()
        .subscribe(countResultados => 
            {
              let arrayResultados = [];
              countResultados.forEach((object) => {
                arrayResultados.push(parseInt(object.qtd));
              })
              this.doughnutChartData = [];
              this.doughnutChartData = arrayResultados;
         
          console.log(this.doughnutChartData);
        },
          erro => console.log(erro)        
        );

      
      chartService.categoriasVinculadas()
        .subscribe(categoriasVinculadas => 
          {
            let arrayResultados = [];
            categoriasVinculadas.forEach((object) => {
              arrayResultados.push(object.descricao);
            })
            this.doughnutChartLabels = [];
            this.doughnutChartLabels = arrayResultados;
          },
          erro => console.log(erro)
        );  

      // console.log(this.doughnutChartLabels);
      // console.log(this.doughnutChartData);
     
  }


  ngOnInit() { 
   
  }

    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
   
    public chartHovered(e:any):void {
      console.log(e);
    }

    


}
