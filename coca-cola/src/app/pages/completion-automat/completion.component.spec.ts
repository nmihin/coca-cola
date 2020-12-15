import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionAutomatComponent } from './completion.component';

describe('CompletionAutomatComponent', () => {
  let component: CompletionAutomatComponent;
  let fixture: ComponentFixture<CompletionAutomatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletionAutomatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletionAutomatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
