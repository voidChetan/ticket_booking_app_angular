import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTicketComponent } from './new-ticket.component';

describe('NewTicketComponent', () => {
  let component: NewTicketComponent;
  let fixture: ComponentFixture<NewTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTicketComponent]
    });
    fixture = TestBed.createComponent(NewTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
