import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarServicioPage } from './buscar-servicio.page';

describe('BuscarServicioPage', () => {
  let component: BuscarServicioPage;
  let fixture: ComponentFixture<BuscarServicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
