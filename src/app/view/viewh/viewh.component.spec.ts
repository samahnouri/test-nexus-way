import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhComponent } from './viewh.component';

describe('ViewhComponent', () => {
  let component: ViewhComponent;
  let fixture: ComponentFixture<ViewhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
