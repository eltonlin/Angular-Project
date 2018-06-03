import { Component, OnInit } from '@angular/core';
import { Chart2Service } from './chart2.service';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss']
})
export class Chart2Component implements OnInit {


  constructor(chartService : Chart2Service) { 
    chartService.meses()
      .subscribe(meses => 
        {
          let arrayResultado = [];
          meses.forEach((object) =>{
            arrayResultado.push(object.mes)
          })   
          this.barChartLabels = [];
          this.barChartLabels = arrayResultado;       
        }, 
        erro => console.log(erro)
      );

  }

  ngOnInit() {
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Despesas'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Recebimentos'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }


}
