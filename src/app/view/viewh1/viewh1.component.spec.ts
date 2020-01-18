import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewh1Component } from './viewh1.component';

describe('Viewh1Component', () => {
  let component: Viewh1Component;
  let fixture: ComponentFixture<Viewh1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewh1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewh1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
