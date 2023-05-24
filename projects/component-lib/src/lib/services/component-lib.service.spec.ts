import { TestBed } from '@angular/core/testing';

import { ComponentLibService } from './component-lib.service';

describe('ComponentLibService', () => {
  let service: ComponentLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
