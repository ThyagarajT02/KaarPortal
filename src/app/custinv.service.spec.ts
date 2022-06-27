import { TestBed } from '@angular/core/testing';

import { CustinvService } from './custinv.service';

describe('CustinvService', () => {
  let service: CustinvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustinvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
