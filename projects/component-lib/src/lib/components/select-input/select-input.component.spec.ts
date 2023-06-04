import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputComponent } from './select-input.component';

describe('TextInputComponent', () => {
  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextInputComponent]
    });
    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
