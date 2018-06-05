import { Component, OnInit } from '@angular/core';
import { MOVIMENTACOES } from './../mock-movimentacoes';
import { Movimentacao } from 'app/movimentacao';
import { CadastroMovimentacaoService } from './../cadastra-movimentacao/cadastro-movimentacao-service';

@Component({
  selector: 'app-recebimentos',
  templateUrl: './recebimentos.component.html',
  styleUrls: ['./recebimentos.component.scss']
})
export class RecebimentosComponent implements OnInit {

  mensagem = false;
  mensagemSucesso = "Recebimento Removido com Sucesso";
  cadastroService;
  movimentacoes:Movimentacao[] = MOVIMENTACOES;

  constructor(cadastroService: CadastroMovimentacaoService) {

    this.cadastroService = cadastroService;

    cadastroService.listaRecebimentos()
      .subscribe(movimentacoesResultado => this.movimentacoes = movimentacoesResultado,
        erro => console.log(erro)
      );
   }


  ngOnInit() {
  }

  apagar(movimentacao) {
    this.cadastroService.apagarMovimentacao(movimentacao)
      .subscribe((res) => {

        let novaMovimentacao = this.movimentacoes.slice(0)
        let indiceMovimentacaoApagada = this.movimentacoes.indexOf(movimentacao);
        novaMovimentacao.splice(indiceMovimentacaoApagada, 1);
        this.movimentacoes = novaMovimentacao;
        this.mensagem = true;

        setTimeout(() => {
          this.mensagem = false;
        }, 3000);
      }
        , erro => console.log(erro));
  }

}
