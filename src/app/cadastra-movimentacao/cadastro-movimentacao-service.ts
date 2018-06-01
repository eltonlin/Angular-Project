import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Movimentacao } from '../movimentacao';

@Injectable()
export class CadastroMovimentacaoService {

  http: Http;
  headers: Headers;

  constructor(http: Http) {

    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');

  }

  listaCategorias(): Observable<any[]> {
    return this.http.get('http://localhost:3000/categorias').map(res => res.json());
  }

  listaTipoMovimentacao(): Observable<any[]> {
    return this.http.get('http://localhost:3000/tipos').map(res => res.json());
  }

  cadastroMovimentacao(movimentacao: Movimentacao ): Observable<Response>{
    return this.http.post('http://localhost:3000/movimentacao', JSON.stringify(movimentacao), 
                { headers: this.headers }); 
  } 

  listaMovimentacoes(): Observable<any[]> {
    return this.http.get('http://localhost:3000/movimentacao').map(res => res.json());
  }

}
