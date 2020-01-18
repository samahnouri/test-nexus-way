import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyusersComponent } from './manyusers.component';

describe('ManyusersComponent', () => {
  let component: ManyusersComponent;
  let fixture: ComponentFixture<ManyusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManyusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManyusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
