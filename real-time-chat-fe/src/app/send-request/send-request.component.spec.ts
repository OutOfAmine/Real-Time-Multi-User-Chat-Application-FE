import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendRequestComponent } from './send-request.component';

describe('SendRequestComponent', () => {
  let component: SendRequestComponent;
  let fixture: ComponentFixture<SendRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
