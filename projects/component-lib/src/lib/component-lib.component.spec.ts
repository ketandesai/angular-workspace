import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLibComponent } from './component-lib.component';

describe('ComponentLibComponent', () => {
  let component: ComponentLibComponent;
  let fixture: ComponentFixture<ComponentLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
