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
            if (element.tipo != "Despesa" ) {
                teste = false;
            }
        });
        
        return teste;

    }

    verificarMovimentacoesSaoRecebimentos(){
        let teste = true;
        this.movimentacoes.forEach(element => {
            if (element.tipo != "Recebimentos" ) {
                teste = false;                
            }
        });
        
        return teste;
    }

    verificaDescricaoNula(){
        let teste = false;
        this.movimentacoes.forEach(element => {
            if(element.descricao == null){
                teste = true;
            }
        }
        );

        return teste;
    }

    verificaTipoNulo(){
        let teste = false;
        this.movimentacoes.forEach(element => {
            if(element.tipo == null){
                teste = true;
            }
        }
        );

        return teste;
    }

        verificaDataLançamentoNula(){
        let teste = false;
        this.movimentacoes.forEach(element => {
            if(element.dataLancamento == null){
                teste = true;
            }
        }
        );

        return teste;
    }

    verificaDataVencimentoNula(){
        let teste = false;
        this.movimentacoes.forEach(element => {
            if(element.dataVencimento == null){
                teste = true;
            }
        }
        );

        return teste;
    }

    verificaCategoriaNula(){
        let teste = false;
        this.movimentacoes.forEach(element => {
            if(element.categoria == null){
                teste = true;
            }
        }
        );

        return teste;
    }

    
    verificaValorNulo(){
        let teste = false;
        this.movimentacoes.forEach(element => {
            if(element.valor == null){
                teste = true;
            }
        }
        );

        return teste;
    }

}