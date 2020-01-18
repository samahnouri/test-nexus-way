import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ca11Component } from './ca11.component';

describe('Ca11Component', () => {
  let component: Ca11Component;
  let fixture: ComponentFixture<Ca11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ca11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ca11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
