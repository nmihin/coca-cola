import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionWebshopComponent } from './completion.component';

describe('CompletionWebshopComponent', () => {
  let component: CompletionWebshopComponent;
  let fixture: ComponentFixture<CompletionWebshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletionWebshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletionWebshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
