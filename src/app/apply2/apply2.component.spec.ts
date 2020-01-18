import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apply2Component } from './apply2.component';

describe('Apply2Component', () => {
  let component: Apply2Component;
  let fixture: ComponentFixture<Apply2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apply2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apply2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
