import { TestBed } from '@angular/core/testing';

import { EmbalajeService } from './embalaje.service';

describe('EmbalajeService', () => {
  let service: EmbalajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmbalajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
