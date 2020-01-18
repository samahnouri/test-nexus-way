import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rp6Component } from './rp6.component';

describe('Rp6Component', () => {
  let component: Rp6Component;
  let fixture: ComponentFixture<Rp6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rp6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rp6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
