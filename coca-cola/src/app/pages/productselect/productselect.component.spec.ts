import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductselectComponent } from './productselect.component';

describe('ProductselectComponent', () => {
  let component: ProductselectComponent;
  let fixture: ComponentFixture<ProductselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
