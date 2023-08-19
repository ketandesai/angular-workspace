import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationComponent } from './classification.component';

describe('ClassificationComponent', () => {
  let component: ClassificationComponent;
  let fixture: ComponentFixture<ClassificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClassificationComponent]
    });
    fixture = TestBed.createComponent(ClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
