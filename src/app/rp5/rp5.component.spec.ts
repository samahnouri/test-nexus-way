import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rp5Component } from './rp5.component';

describe('Rp5Component', () => {
  let component: Rp5Component;
  let fixture: ComponentFixture<Rp5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rp5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
