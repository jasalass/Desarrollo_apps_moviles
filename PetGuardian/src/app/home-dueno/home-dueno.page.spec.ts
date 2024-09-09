import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeDuenoPage } from './home-dueno.page';

describe('HomeDuenoPage', () => {
  let component: HomeDuenoPage;
  let fixture: ComponentFixture<HomeDuenoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDuenoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
