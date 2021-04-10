import { TestBed } from '@angular/core/testing';

import { AfficheListeService } from './affiche-liste.service';

describe('AfficheListeService', () => {
  let service: AfficheListeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfficheListeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
