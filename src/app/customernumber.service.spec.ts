import { TestBed } from '@angular/core/testing';

import { CustomernumberService } from './customernumber.service';

describe('CustomernumberService', () => {
  let service: CustomernumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomernumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
