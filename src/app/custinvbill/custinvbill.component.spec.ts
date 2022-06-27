import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustinvbillComponent } from './custinvbill.component';

describe('CustinvbillComponent', () => {
  let component: CustinvbillComponent;
  let fixture: ComponentFixture<CustinvbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustinvbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustinvbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
