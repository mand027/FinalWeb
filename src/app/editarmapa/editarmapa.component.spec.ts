import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarmapaComponent } from './editarmapa.component';

describe('EditarmapaComponent', () => {
  let component: EditarmapaComponent;
  let fixture: ComponentFixture<EditarmapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarmapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarmapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
