import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionBuild } from './creacion-build';

describe('CreacionBuild', () => {
  let component: CreacionBuild;
  let fixture: ComponentFixture<CreacionBuild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionBuild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionBuild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
