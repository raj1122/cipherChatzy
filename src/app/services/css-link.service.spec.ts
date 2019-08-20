import { TestBed } from '@angular/core/testing';

import { CssLinkService } from './css-link.service';

describe('CssLinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CssLinkService = TestBed.get(CssLinkService);
    expect(service).toBeTruthy();
  });
});
