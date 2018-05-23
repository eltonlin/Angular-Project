import { Component, OnInit } from '@angular/core';
import { Movimentacao } from 'app/movimentacao';
import { MOVIMENTACOES } from 'app/mock-movimentacoes';
import { MovimentacaoService } from '../movimentacao-service.service';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.scss']
})
export class MovimentacaoComponent implements OnInit {

  movimentacoes:Movimentacao[] = MOVIMENTACOES;

  cadastrarBool : String ;

  constructor(private moviServices : MovimentacaoService) { }

  ngOnInit() {
  }

  cadastrar(){
    this.moviServices.chamaCadastro();  
 }

}
