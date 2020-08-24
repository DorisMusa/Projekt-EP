import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantiComponent } from './participanti.component';

describe('ParticipantiComponent', () => {
  let component: ParticipantiComponent;
  let fixture: ComponentFixture<ParticipantiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
