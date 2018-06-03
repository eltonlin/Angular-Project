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
  
  movimentacoes:Movimentacao[] = MOVIMENTACOES;

  constructor(cadastroService: CadastroMovimentacaoService) {

    cadastroService.listaRecebimentos()
      .subscribe(movimentacoesResultado => this.movimentacoes = movimentacoesResultado,
        erro => console.log(erro)
      );
   }


  ngOnInit() {
  }

}
