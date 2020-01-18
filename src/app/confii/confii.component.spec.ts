import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiiComponent } from './confii.component';

describe('ConfiiComponent', () => {
  let component: ConfiiComponent;
  let fixture: ComponentFixture<ConfiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
