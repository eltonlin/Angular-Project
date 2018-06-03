import { TestBed, inject } from '@angular/core/testing';

import { Chart2Service } from './chart2.service';

describe('Chart2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Chart2Service]
    });
  });

  it('should be created', inject([Chart2Service], (service: Chart2Service) => {
    expect(service).toBeTruthy();
  }));
});
