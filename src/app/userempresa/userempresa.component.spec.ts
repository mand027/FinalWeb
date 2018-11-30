import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserempresaComponent } from './userempresa.component';

describe('UserempresaComponent', () => {
  let component: UserempresaComponent;
  let fixture: ComponentFixture<UserempresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserempresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
