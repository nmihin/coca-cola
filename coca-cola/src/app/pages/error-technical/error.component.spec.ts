import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorTechnicalComponent } from './error.component';

describe('ErrorTechnicalComponent', () => {
  let component: ErrorTechnicalComponent;
  let fixture: ComponentFixture<ErrorTechnicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorTechnicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
