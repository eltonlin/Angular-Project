import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Movimentacao } from '../movimentacao';

@Injectable()
export class ChartService {

  http: Http;
  headers: Headers;

  constructor(http: Http) {

    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');

  }

  countCategorias(): Observable<any[]> {
    return this.http.get('http://localhost:3000/countCategorias').map(res => res.json());
  }

  categoriasVinculadas(): Observable<any[]> {
    return this.http.get('http://localhost:3000/categoriasVinculadas').map(res => res.json());
  }
}
