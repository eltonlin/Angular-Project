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
  
  expect(result).toBeTruthy;
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
  mock2.tipo = "Despesa";
  mock2.dataLancamento = "20/10/2016";
  mock2.dataVencimento = "20/10/2018";
  mock2.categoria = "Contas";
  mock2.valor = "700";

  dao.movimentacoes = [mock1, mock2];

  let result = dao.verificarMovimentacoesSaoDespesas();
  
  expect(result).toBeFalsy;
});



});


