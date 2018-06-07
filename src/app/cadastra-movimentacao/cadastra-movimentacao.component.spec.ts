import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockMovimentacao } from './MockMovimentacao';
import { MockMovimentacaoDao } from './MockMovimentacaoDao';




describe("Exemplo de testes funcionais", function () {

  it('Movimentação vazia', () => {
    let dao = new MockMovimentacaoDao();
    let resultado = dao.listarMovimentacacoes();
    expect(resultado).toBe(0);
  });

  it('Adicionar uma Movimentação', () => {
    let dao = new MockMovimentacaoDao();
    let mock1 = new MockMovimentacao();
   
    mock1.descricao = "Luz"
    mock1.tipo = "Despesa";
    mock1.dataLancamento = "20/10/2016";
    mock1.dataVencimento = "20/10/2018";
    mock1.categoria = "Contas";
    mock1.valor = "500";

    dao.adicionarMovimentacao(mock1);
    let result = dao.listarMovimentacacoes();
    
    expect(result).toBe(1);
 });

 it('Remover movimentação com uma Despesa', () => {
  let dao = new MockMovimentacaoDao();
  let mock1 = new MockMovimentacao();
  let mock2 = new MockMovimentacao();

  mock1.descricao = "Luz"
  mock1.tipo = "Despesa";
  mock1.dataLancamento = "20/10/2016";
  mock1.dataVencimento = "20/10/2018";
  mock1.categoria = "Contas";
  mock1.valor = "500";

  mock2.descricao = "Água"
  mock2.tipo = "Gaz";
  mock2.dataLancamento = "20/10/2016";
  mock2.dataVencimento = "20/10/2018";
  mock2.categoria = "Contas";
  mock2.valor = "700";
 
  dao.movimentacoes = [mock1, mock2];

  dao.removerMovimentacao(mock1);
  let result = dao.listarMovimentacacoes();
  
  expect(result).toBe(1);
});


it('Movimentações SÃO despesas', () => {
  let dao = new MockMovimentacaoDao();
  let mock1 = new MockMovimentacao();
  let mock2 = new MockMovimentacao();
 
  mock1.descricao = "Luz"
  mock1.tipo = "Despesa";
  mock1.dataLancamento = "20/10/2016";
  mock1.dataVencimento = "20/10/2018";
  mock1.categoria = "Contas";
  mock1.valor = "500";

  mock2.descricao = "Água"
  mock2.tipo = "Despesa";
  mock2.dataLancamento = "20/10/2016";
  mock2.dataVencimento = "20/10/2018";
  mock2.categoria = "Contas";
  mock2.valor = "700";

  dao.movimentacoes = [mock1, mock2];

  let result = dao.verificarMovimentacoesSaoDespesas();
  
  expect(result).toBe(true);
});

it('Movimentações NÃO são despesas', () => {
  let dao = new MockMovimentacaoDao();
  let mock1 = new MockMovimentacao();
  let mock2 = new MockMovimentacao();
 
  mock1.descricao = "Luz"
  mock1.tipo = "Despesa";
  mock1.dataLancamento = "20/10/2016";
  mock1.dataVencimento = "20/10/2018";
  mock1.categoria = "Contas";
  mock1.valor = "500";

  mock2.descricao = "Água"
  mock2.tipo = "Recebimentos";
  mock2.dataLancamento = "20/10/2016";
  mock2.dataVencimento = "20/10/2018";
  mock2.categoria = "Contas";
  mock2.valor = "700";

  dao.movimentacoes = [mock1, mock2];

  let result = dao.verificarMovimentacoesSaoDespesas();
  
  expect(result).toBe(false);
});

it('Movimentações NÃO são recebimentos', () => {
  let dao = new MockMovimentacaoDao();
  let mock1 = new MockMovimentacao();
  let mock2 = new MockMovimentacao();
 
  mock1.descricao = "Luz"
  mock1.tipo = "Despesa";
  mock1.dataLancamento = "20/10/2016";
  mock1.dataVencimento = "20/10/2018";
  mock1.categoria = "Contas";
  mock1.valor = "500";

  mock2.descricao = "Água"
  mock2.tipo = "Recebimentos";
  mock2.dataLancamento = "20/10/2016";
  mock2.dataVencimento = "20/10/2018";
  mock2.categoria = "Contas";
  mock2.valor = "700";

  dao.movimentacoes = [mock1, mock2];

  let result = dao.verificarMovimentacoesSaoRecebimentos();
  
  expect(result).toBe(false);
});




it('Movimentações são recebimentos', () => {
  let dao = new MockMovimentacaoDao();
  let mock1 = new MockMovimentacao();
  let mock2 = new MockMovimentacao();
 
  mock1.descricao = "Luz"
  mock1.tipo = "Recebimentos";
  mock1.dataLancamento = "20/10/2016";
  mock1.dataVencimento = "20/10/2018";
  mock1.categoria = "Contas";
  mock1.valor = "500";

  mock2.descricao = "Água"
  mock2.tipo = "Recebimentos";
  mock2.dataLancamento = "20/10/2016";
  mock2.dataVencimento = "20/10/2018";
  mock2.categoria = "Contas";
  mock2.valor = "700";

  dao.movimentacoes = [mock1, mock2];

  let result = dao.verificarMovimentacoesSaoRecebimentos();
  
  expect(result).toBe(true);
});

it('Verifica a descrição nula', () => {
  let dao = new MockMovimentacaoDao();
  let mock1 = new MockMovimentacao();
  
  mock1.descricao = null;

  dao.movimentacoes = [mock1];

  let result = dao.verificaDescricaoNula();

  expect(result).toBe(true);

});

it('Verifica o tipo nulo', () => {
  let dao = new MockMovimentacaoDao();
  let mock1 = new MockMovimentacao();
  
  mock1.tipo = null;

  dao.movimentacoes = [mock1];

  let result = dao.verificaTipoNulo();

  expect(result).toBe(true);

});


it('Verifica a dataLançamento nula', () => {
  let dao = new MockMovimentacaoDao();
  let mock1 = new MockMovimentacao();
  
  mock1.dataLancamento = null;

  dao.movimentacoes = [mock1];

  let result = dao.verificaDataLançamentoNula();

  expect(result).toBe(true);

});

it('Verifica a dataVencimento nula', () => {
  let dao = new MockMovimentacaoDao();
  let mock1 = new MockMovimentacao();
  
  mock1.dataVencimento = null;

  dao.movimentacoes = [mock1];

  let result = dao.verificaDataVencimentoNula();

  expect(result).toBe(true);

});

it('Verifica a categoria nula', () => {
  let dao = new MockMovimentacaoDao();
  let mock1 = new MockMovimentacao();
  
  mock1.categoria = null;

  dao.movimentacoes = [mock1];

  let result = dao.verificaCategoriaNula();

  expect(result).toBe(true);

})

it('Verifica o valor nulo', () => {
  let dao = new MockMovimentacaoDao();
  let mock1 = new MockMovimentacao();
  
  mock1.valor = null;

  dao.movimentacoes = [mock1];

  let result = dao.verificaValorNulo();

  expect(result).toBe(true);

})

});



