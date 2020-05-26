import { TestBed } from '@angular/core/testing';

import { RestauarntesService } from './restauarntes.service';

describe('RestauarntesService', () => {
  let service: RestauarntesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestauarntesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
