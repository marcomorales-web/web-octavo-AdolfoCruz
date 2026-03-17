import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildInfo } from './build-info';

describe('BuildInfo', () => {
  let component: BuildInfo;
  let fixture: ComponentFixture<BuildInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
