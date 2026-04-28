import { TestBed } from '@angular/core/testing';

import { Genshin } from '../genshin';

describe('Genshin', () => {
  let service: Genshin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Genshin);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
