import { Component, OnInit } from '@angular/core';
import { Movimentacao } from 'app/movimentacao';
import { MOVIMENTACOES } from 'app/mock-movimentacoes';
import { MovimentacaoService } from '../movimentacao-service.service';
import { CadastroMovimentacaoService } from '../cadastra-movimentacao/cadastro-movimentacao-service';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.scss']
})
export class MovimentacaoComponent implements OnInit {

  movimentacoes: Movimentacao[];

  cadastrarBool: String;

  constructor(private moviServices: MovimentacaoService, cadastroService: CadastroMovimentacaoService) {

    cadastroService.listaMovimentacoes()
      .subscribe(movimentacoesResultado => this.movimentacoes = movimentacoesResultado,
        erro => console.log(erro)
      );

  }

  ngOnInit() {
  }

  cadastrar() {
    this.moviServices.chamaCadastro();
  }

}
