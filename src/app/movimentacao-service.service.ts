import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Movimentacao } from './movimentacao';

@Injectable()
export class MovimentacaoService {

  constructor(private routes : Router) { }

  chamaCadastro(){
    this.routes.navigate(['/cadastraMovimentacoes']);    
  }

  cadastra(movimentacao : Movimentacao){
    this.routes.navigate(['/movimentacao']);
  }
  
  voltar(){
    this.routes.navigate(['/movimentacao']);
  }

}
