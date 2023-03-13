import { TestBed } from '@angular/core/testing';

import { DbcontactService } from './dbcontact.service';

describe('DbcontactService', () => {
  let service: DbcontactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbcontactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
