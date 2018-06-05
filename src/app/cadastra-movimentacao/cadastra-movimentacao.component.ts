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

  mensagem = false;
  mensagemSucesso: String = "A movimentação foi cadastrada com Sucesso";
  categoriasLista: any[];
  tiposLista: any[];
  movimentacao: Movimentacao = new Movimentacao("", "","", "", "");
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
          .subscribe((res) => {
              let teste = JSON.stringify(res);
              this.movimentacao = new Movimentacao("", "","", "", "");

              this.mensagem = true;

              setInterval(() => {
                this.mensagem = false;
              }, 3000);


          }, erro => console.log(erro))
  }


  voltar(){
    this.moviServices.voltar();
  }
  
}
