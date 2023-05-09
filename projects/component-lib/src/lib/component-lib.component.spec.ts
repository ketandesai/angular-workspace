import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLibComponent } from './component-lib.component';

describe('ComponentLibComponent', () => {
  let component: ComponentLibComponent;
  let fixture: ComponentFixture<ComponentLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentLibComponent]
    });
    fixture = TestBed.createComponent(ComponentLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
