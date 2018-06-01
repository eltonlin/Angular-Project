import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Movimentacao } from 'app/movimentacao';
import { MovimentacaoService } from './../movimentacao-service.service';
import { CadastroMovimentacaoService } from './cadastro-movimentacao-service';


@Component({
  selector: 'app-cadastra-movimentacao',
  templateUrl: './cadastra-movimentacao.component.html',
  styleUrls: ['./cadastra-movimentacao.component.scss']
})
export class CadastraMovimentacaoComponent implements OnInit {

  categoriasLista: any[];
  tiposLista: any[];
  movimentacao: Movimentacao = new Movimentacao();
  cadastroService: CadastroMovimentacaoService;
  categoriaSelecionada: any;

  constructor(private moviServices: MovimentacaoService, cadastroService: CadastroMovimentacaoService) {

    this.cadastroService = cadastroService;

    cadastroService.listaCategorias()
      .subscribe(listaConsultada => this.categoriasLista = listaConsultada,
        erro => console.log(erro)
      );

    cadastroService.listaTipoMovimentacao()
      .subscribe(listaTipoConsultada => this.tiposLista = listaTipoConsultada,
        erro => console.log(erro)
      );

  }


  ngOnInit() {

  }

  cadastra() {

      event.preventDefault();
      this.cadastroService.cadastroMovimentacao(this.movimentacao)
          .subscribe(() => {
              console.log("Movimentação incluida com sucesso");
              this.movimentacao = new Movimentacao();
          }
          , erro => console.log(erro))


    //  this.moviServices.cadastra(this.movimentacao);
  }


  voltar(){
    this.moviServices.voltar();
  }
  
}
