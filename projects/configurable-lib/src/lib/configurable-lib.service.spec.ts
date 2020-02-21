import { TestBed } from '@angular/core/testing';

import { ConfigurableLibService } from './configurable-lib.service';

describe('ConfigurableLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigurableLibService = TestBed.get(ConfigurableLibService);
    expect(service).toBeTruthy();
  });
});
