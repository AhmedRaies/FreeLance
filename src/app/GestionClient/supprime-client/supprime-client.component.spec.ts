import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimeClientComponent } from './supprime-client.component';

describe('SupprimeClientComponent', () => {
  let component: SupprimeClientComponent;
  let fixture: ComponentFixture<SupprimeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimeClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
