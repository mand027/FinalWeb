import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersignupComponent } from './partnersignup.component';

describe('PartnersignupComponent', () => {
  let component: PartnersignupComponent;
  let fixture: ComponentFixture<PartnersignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
