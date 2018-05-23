import { HomeComponent } from './home/home.component';
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

;
import { MovimentacaoComponent } from 'app/movimentacao/movimentacao.component';
import { GraficoComponent } from './grafico/grafico.component';
import { CadastraMovimentacaoComponent } from './cadastra-movimentacao/cadastra-movimentacao.component';
import { Chart2Component } from './chart2/chart2.component';
import { ChartComponent } from './chart/chart.component';
import { RecebimentosComponent } from './recebimentos/recebimentos.component';
import { DespesasComponent } from './despesas/despesas.component';


export const ROUTES: Routes = [
        
    {path: 'movimentacao', component : MovimentacaoComponent},
    {path: 'grafico', component : GraficoComponent},
    {path : 'cadastraMovimentacoes', component : CadastraMovimentacaoComponent},
    {path : 'recebebimentosDespesasGrafico', component : Chart2Component}, 
    {path : 'categoriasGrafico', component : ChartComponent},
    {path : 'recebimentos', component : RecebimentosComponent},
    {path : 'despesas', component : DespesasComponent}, 
    {path: '', redirectTo: 'movimentacao', pathMatch: 'full'}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
