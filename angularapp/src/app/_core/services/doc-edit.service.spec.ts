import { TestBed } from '@angular/core/testing';

import { DocEditService } from './doc-edit.service';

describe('DocEditService', () => {
  let service: DocEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
