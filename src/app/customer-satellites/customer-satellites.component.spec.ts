import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSatellitesComponent } from './customer-satellites.component';

describe('CustomerSatellitesComponent', () => {
  let component: CustomerSatellitesComponent;
  let fixture: ComponentFixture<CustomerSatellitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSatellitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSatellitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
