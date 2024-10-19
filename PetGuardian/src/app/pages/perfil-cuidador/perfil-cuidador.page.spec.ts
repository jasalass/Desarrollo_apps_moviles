import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilCuidadorPage } from './perfil-cuidador.page';

describe('PerfilCuidadorPage', () => {
  let component: PerfilCuidadorPage;
  let fixture: ComponentFixture<PerfilCuidadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilCuidadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
