import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilDuenoPage } from './perfil-dueno.page';

describe('PerfilDuenoPage', () => {
  let component: PerfilDuenoPage;
  let fixture: ComponentFixture<PerfilDuenoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDuenoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
