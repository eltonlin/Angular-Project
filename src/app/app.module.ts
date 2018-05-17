import { LoginService } from './login.service';
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
import { LoginComponent } from './login/login.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { Chart2Component } from './chart2/chart2.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ROUTING } from "./app.routing";


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        MovimentacaoComponent,
        LoginComponent,
        ChartComponent,
        Chart2Component,
        CadastroComponent
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
    providers: [LoginService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
