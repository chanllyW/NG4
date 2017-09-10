import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child333Component } from './child333.component';

describe('Child333Component', () => {
  let component: Child333Component;
  let fixture: ComponentFixture<Child333Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child333Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
