import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoDueComponent } from './punto-due.component';

describe('PuntoDueComponent', () => {
  let component: PuntoDueComponent;
  let fixture: ComponentFixture<PuntoDueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoDueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
