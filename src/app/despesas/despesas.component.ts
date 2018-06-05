import { Component, OnInit } from '@angular/core';
import { Movimentacao } from './../movimentacao';
import { MOVIMENTACOES } from './../mock-movimentacoes';
import { CadastroMovimentacaoService } from '../cadastra-movimentacao/cadastro-movimentacao-service';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss']
})
export class DespesasComponent implements OnInit {

  mensagem = false;
  mensagemSucesso = "Despesa removida com sucesso";
  movimentacoes: Movimentacao[];
  cadastroService;

  constructor(cadastroService: CadastroMovimentacaoService) {

    this.cadastroService = cadastroService;

    cadastroService.listaDespesas()
      .subscribe(movimentacoesResultado => this.movimentacoes = movimentacoesResultado,
        erro => console.log(erro)
      );
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

  ngOnInit() {
  }

}
