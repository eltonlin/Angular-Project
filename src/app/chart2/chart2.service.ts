import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Movimentacao } from '../movimentacao';

@Injectable()
export class Chart2Service {

  http: Http;
  headers: Headers;

  constructor(http: Http) {

    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');

  }

  qtdDespesas(): Observable<any[]> {
    return this.http.get('http://localhost:3000/qtdDespesas').map(res => res.json());
  }

  qtdRecebimentos(): Observable<any[]> {
    return this.http.get('http://localhost:3000/qtdRecebimentos').map(res => res.json());
  }

  meses(): Observable<any[]> {
    return this.http.get('http://localhost:3000/meses').map(res => res.json());
  }


}
