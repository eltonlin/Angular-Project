import { Component, OnInit } from '@angular/core';
import { Movimentacao } from './../movimentacao';
import { MOVIMENTACOES } from './../mock-movimentacoes';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss']
})
export class DespesasComponent implements OnInit {

  movimentacoes:Movimentacao[] = MOVIMENTACOES;

  constructor() { }

  ngOnInit() {
  }

}
