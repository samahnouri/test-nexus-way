import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rp3Component } from './rp3.component';

describe('Rp3Component', () => {
  let component: Rp3Component;
  let fixture: ComponentFixture<Rp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
