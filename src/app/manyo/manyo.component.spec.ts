import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyoComponent } from './manyo.component';

describe('ManyoComponent', () => {
  let component: ManyoComponent;
  let fixture: ComponentFixture<ManyoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManyoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
