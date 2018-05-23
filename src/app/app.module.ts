
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';

import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { Chart2Component } from './chart2/chart2.component';

import { ROUTING } from "./app.routing";
import { GraficoComponent } from './grafico/grafico.component';
import { CadastraMovimentacaoComponent } from './cadastra-movimentacao/cadastra-movimentacao.component';
import { MovimentacaoService } from "./movimentacao-service.service";
import { DespesasComponent } from './despesas/despesas.component';
import { RecebimentosComponent } from './recebimentos/recebimentos.component';


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        MovimentacaoComponent,        
        ChartComponent,
        Chart2Component,
        GraficoComponent,
        CadastraMovimentacaoComponent,
        DespesasComponent,
        RecebimentosComponent,
        
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ChartsModule,
        ROUTING,
        
    ],
    providers: [MovimentacaoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
