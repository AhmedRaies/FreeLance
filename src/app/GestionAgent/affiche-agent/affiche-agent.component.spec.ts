import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheAgentComponent } from './affiche-agent.component';

describe('AfficheAgentComponent', () => {
  let component: AfficheAgentComponent;
  let fixture: ComponentFixture<AfficheAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheAgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
