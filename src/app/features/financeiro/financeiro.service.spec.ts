import { TestBed, inject } from '@angular/core/testing';

import { FinanceiroService } from './financeiro.service';

describe('ServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinanceiroService]
    });
  });

  it('should be created', inject([FinanceiroService], (service: FinanceiroService) => {
    expect(service).toBeTruthy();
  }));
});
