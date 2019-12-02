import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoTreComponent } from './punto-tre.component';

describe('PuntoTreComponent', () => {
  let component: PuntoTreComponent;
  let fixture: ComponentFixture<PuntoTreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoTreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoTreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
