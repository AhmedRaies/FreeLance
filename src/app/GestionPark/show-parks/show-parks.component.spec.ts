import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowParksComponent } from './show-parks.component';

describe('ShowParksComponent', () => {
  let component: ShowParksComponent;
  let fixture: ComponentFixture<ShowParksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowParksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowParksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
