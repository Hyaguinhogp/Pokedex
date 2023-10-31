import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgProviderComponent } from './svg-provider.component';

describe('SvgProviderComponent', () => {
  let component: SvgProviderComponent;
  let fixture: ComponentFixture<SvgProviderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgProviderComponent]
    });
    fixture = TestBed.createComponent(SvgProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
