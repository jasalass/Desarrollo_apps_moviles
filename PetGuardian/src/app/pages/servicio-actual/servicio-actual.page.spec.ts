import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicioActualPage } from './servicio-actual.page';

describe('ServicioActualPage', () => {
  let component: ServicioActualPage;
  let fixture: ComponentFixture<ServicioActualPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioActualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
