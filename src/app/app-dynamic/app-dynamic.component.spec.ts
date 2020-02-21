import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDynamicComponent } from './app-dynamic.component';

describe('AppDynamicComponent', () => {
  let component: AppDynamicComponent;
  let fixture: ComponentFixture<AppDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
