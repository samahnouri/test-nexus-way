import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Manyusers2Component } from './manyusers2.component';

describe('Manyusers2Component', () => {
  let component: Manyusers2Component;
  let fixture: ComponentFixture<Manyusers2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Manyusers2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Manyusers2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
