import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchersComponent } from './launchers.component';

describe('LaunchersComponent', () => {
  let component: LaunchersComponent;
  let fixture: ComponentFixture<LaunchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
