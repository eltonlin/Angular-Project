import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Movimentacao } from './movimentacao';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

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
    this.routes.navigate(['/categoriasGrafico']);
  }

  // listaRecebimentos(): Observable<any[]> {
  //   return this.Http.get('http://localhost:3000/recebimentos').map(res => res.json());
  // }

}
