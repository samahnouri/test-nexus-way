import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rp4Component } from './rp4.component';

describe('Rp4Component', () => {
  let component: Rp4Component;
  let fixture: ComponentFixture<Rp4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rp4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
