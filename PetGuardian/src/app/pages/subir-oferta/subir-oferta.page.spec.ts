import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubirOfertaPage } from './subir-oferta.page';

describe('SubirOfertaPage', () => {
  let component: SubirOfertaPage;
  let fixture: ComponentFixture<SubirOfertaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirOfertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
