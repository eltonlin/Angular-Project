import { MockMovimentacao } from "./MockMovimentacao";

export class MockMovimentacaoDao {

    movimentacoes: MockMovimentacao[] = [];

    adicionarMovimentacao(movimentacao: MockMovimentacao) {
        this.movimentacoes.push(movimentacao);
    }

    listarMovimentacacoes() {
        let quantMovimentacoes = this.movimentacoes.length;
        return quantMovimentacoes;
    }

    removerMovimentacao(movimentacao: MockMovimentacao) {

        let novaMovimentacao = this.movimentacoes.slice(0)
        let indiceMovimentacaoApagada = this.movimentacoes.indexOf(movimentacao);
        novaMovimentacao.splice(indiceMovimentacaoApagada, 1);
        this.movimentacoes = novaMovimentacao;

        return this.movimentacoes;

    }

    verificarMovimentacoesSaoDespesas() {
        let teste = true;
        this.movimentacoes.forEach(element => {
            if (element.descricao = "Despesa") {
                teste = false;
            }
        });
        
        return teste;

    }

}