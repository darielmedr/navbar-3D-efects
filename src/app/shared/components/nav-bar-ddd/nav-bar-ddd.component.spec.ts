import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarDDDComponent } from './nav-bar-ddd.component';

describe('NavBarDDDComponent', () => {
  let component: NavBarDDDComponent;
  let fixture: ComponentFixture<NavBarDDDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarDDDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarDDDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
