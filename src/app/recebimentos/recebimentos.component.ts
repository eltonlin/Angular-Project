import { Component, OnInit } from '@angular/core';
import { MOVIMENTACOES } from './../mock-movimentacoes';
import { Movimentacao } from 'app/movimentacao';

@Component({
  selector: 'app-recebimentos',
  templateUrl: './recebimentos.component.html',
  styleUrls: ['./recebimentos.component.scss']
})
export class RecebimentosComponent implements OnInit {
  
  movimentacoes:Movimentacao[] = MOVIMENTACOES;

  constructor() { }

  ngOnInit() {
  }

}
