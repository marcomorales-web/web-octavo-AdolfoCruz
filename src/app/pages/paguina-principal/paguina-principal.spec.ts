import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaguinaPrincipal } from './paguina-principal';

describe('PaguinaPrincipal', () => {
  let component: PaguinaPrincipal;
  let fixture: ComponentFixture<PaguinaPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaguinaPrincipal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaguinaPrincipal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
