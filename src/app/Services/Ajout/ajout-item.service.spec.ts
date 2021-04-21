import { TestBed } from '@angular/core/testing';

import { AjoutItemService } from './ajout-item.service';

describe('AjoutItemService', () => {
  let service: AjoutItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
