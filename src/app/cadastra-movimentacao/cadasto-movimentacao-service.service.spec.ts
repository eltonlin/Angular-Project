import { TestBed, inject } from '@angular/core/testing';

import { CadastroMovimentacaoService } from './cadastro-movimentacao-service';

describe('CadastoMovimentacaoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastroMovimentacaoService]
    });
  });

  it('should be created', inject([CadastroMovimentacaoService], (service: CadastroMovimentacaoService) => {
    expect(service).toBeTruthy();
  }));
});
