import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoUnoComponent } from './punto-uno.component';

describe('PuntoUnoComponent', () => {
  let component: PuntoUnoComponent;
  let fixture: ComponentFixture<PuntoUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
