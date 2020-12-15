import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanComponent } from './tan.component';

describe('TanComponent', () => {
  let component: TanComponent;
  let fixture: ComponentFixture<TanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
