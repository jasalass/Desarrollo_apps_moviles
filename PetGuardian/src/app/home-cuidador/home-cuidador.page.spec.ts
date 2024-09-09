import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeCuidadorPage } from './home-cuidador.page';

describe('HomeCuidadorPage', () => {
  let component: HomeCuidadorPage;
  let fixture: ComponentFixture<HomeCuidadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCuidadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
