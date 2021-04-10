import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TashAgentComponent } from './tash-agent.component';

describe('TashAgentComponent', () => {
  let component: TashAgentComponent;
  let fixture: ComponentFixture<TashAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TashAgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TashAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
