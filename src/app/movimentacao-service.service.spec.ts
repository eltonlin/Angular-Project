import { TestBed, inject } from '@angular/core/testing';

import { MovimentacaoService } from './movimentacao-service.service';

describe('MovimentacaoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovimentacaoService]
    });
  });

  it('should be created', inject([MovimentacaoService], (service: MovimentacaoService) => {
    expect(service).toBeTruthy();
  }));
});
