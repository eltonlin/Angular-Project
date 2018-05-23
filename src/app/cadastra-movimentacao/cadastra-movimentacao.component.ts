import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Movimentacao } from 'app/movimentacao';
import { MovimentacaoService } from './../movimentacao-service.service';


@Component({
  selector: 'app-cadastra-movimentacao',
  templateUrl: './cadastra-movimentacao.component.html',
  styleUrls: ['./cadastra-movimentacao.component.scss']
})
export class CadastraMovimentacaoComponent implements OnInit {

  constructor(private moviServices: MovimentacaoService) { }

  movimentacao : Movimentacao = new Movimentacao() ;

  ngOnInit() {
     
  }

  cadastra(){
    this.moviServices.cadastra(this.movimentacao);
  }

  voltar(){
    this.moviServices.voltar();
  }
  
}
