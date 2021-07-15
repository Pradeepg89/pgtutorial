import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelfieldComponent } from './excelfield.component';

describe('ExcelfieldComponent', () => {
  let component: ExcelfieldComponent;
  let fixture: ComponentFixture<ExcelfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
