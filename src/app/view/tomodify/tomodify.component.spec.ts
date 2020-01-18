import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomodifyComponent } from './tomodify.component';

describe('TomodifyComponent', () => {
  let component: TomodifyComponent;
  let fixture: ComponentFixture<TomodifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomodifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
