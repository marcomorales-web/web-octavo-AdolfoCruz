import { TestBed } from '@angular/core/testing';

import { Hsr } from './hsr';

describe('Hsr', () => {
  let service: Hsr;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hsr);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
