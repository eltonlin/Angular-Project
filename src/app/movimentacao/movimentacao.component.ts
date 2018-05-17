import { Component, OnInit } from '@angular/core';
import { Movimentacao } from 'app/movimentacao';
import { MOVIMENTACOES } from 'app/mock-movimentacoes';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.scss']
})
export class MovimentacaoComponent implements OnInit {

  movimentacoes:Movimentacao[] = MOVIMENTACOES;

  cadastrarBool : String ;

  constructor() { }

  ngOnInit() {
  }

  cadastrar(){
    this.cadastrarBool = 'v';
  }

}
