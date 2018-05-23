import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraMovimentacaoComponent } from './cadastra-movimentacao.component';

describe('CadastraMovimentacaoComponent', () => {
  let component: CadastraMovimentacaoComponent;
  let fixture: ComponentFixture<CadastraMovimentacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraMovimentacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraMovimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
