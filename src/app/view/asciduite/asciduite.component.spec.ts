import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciduiteComponent } from './asciduite.component';

describe('AsciduiteComponent', () => {
  let component: AsciduiteComponent;
  let fixture: ComponentFixture<AsciduiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsciduiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsciduiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
