import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlicerComponent } from './slicer.component';

describe('SlicerComponent', () => {
  let component: SlicerComponent;
  let fixture: ComponentFixture<SlicerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlicerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlicerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
