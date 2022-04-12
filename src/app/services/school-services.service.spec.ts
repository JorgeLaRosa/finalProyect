import { TestBed } from '@angular/core/testing';

import { SchoolServicesService } from './school-services.service';

describe('SchoolServicesService', () => {
  let service: SchoolServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
