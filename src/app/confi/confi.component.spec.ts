import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiComponent } from './confi.component';

describe('ConfiComponent', () => {
  let component: ConfiComponent;
  let fixture: ComponentFixture<ConfiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
