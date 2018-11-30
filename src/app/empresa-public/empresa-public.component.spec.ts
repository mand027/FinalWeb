import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaPublicComponent } from './empresa-public.component';

describe('EmpresaPublicComponent', () => {
  let component: EmpresaPublicComponent;
  let fixture: ComponentFixture<EmpresaPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
