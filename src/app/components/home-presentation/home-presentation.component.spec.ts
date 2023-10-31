import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePresentationComponent } from './home-presentation.component';

describe('HomePresentationComponent', () => {
  let component: HomePresentationComponent;
  let fixture: ComponentFixture<HomePresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePresentationComponent]
    });
    fixture = TestBed.createComponent(HomePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
