import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePokemonsComponent } from './home-pokemons.component';

describe('HomePokemonsComponent', () => {
  let component: HomePokemonsComponent;
  let fixture: ComponentFixture<HomePokemonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePokemonsComponent]
    });
    fixture = TestBed.createComponent(HomePokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
