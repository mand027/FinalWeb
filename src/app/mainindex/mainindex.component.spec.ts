import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainindexComponent } from './mainindex.component';

describe('MainindexComponent', () => {
  let component: MainindexComponent;
  let fixture: ComponentFixture<MainindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
