import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnerComponent } from './listner.component';

describe('ListnerComponent', () => {
  let component: ListnerComponent;
  let fixture: ComponentFixture<ListnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
