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

  movimentacoes:Movimentacao[] ; 

  constructor(cadastroService: CadastroMovimentacaoService) {

    cadastroService.listaDespesas()
      .subscribe(movimentacoesResultado => this.movimentacoes = movimentacoesResultado,
        erro => console.log(erro)
      );
   }


  
  ngOnInit() {
  }

}
