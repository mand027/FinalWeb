import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserCompComponent } from './form-user-comp.component';

describe('FormUserCompComponent', () => {
  let component: FormUserCompComponent;
  let fixture: ComponentFixture<FormUserCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUserCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
