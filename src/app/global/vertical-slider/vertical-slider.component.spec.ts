import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalSliderComponent } from './vertical-slider.component';

describe('VerticalSliderComponent', () => {
  let component: VerticalSliderComponent;
  let fixture: ComponentFixture<VerticalSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
