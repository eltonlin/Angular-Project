import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMovimentacaoService } from './cadastro-movimentacao-service';

describe('CadastraMovimentacaoComponent', () => {
  
   it('Testando Serviços', () => {
    
    let servico = new CadastroMovimentacaoService(null);
      let result =  servico.somar(1, 2);
      expect(result).toBe(3);

   });


});
