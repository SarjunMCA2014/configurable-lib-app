import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurableLibComponent } from './configurable-lib.component';

describe('ConfigurableLibComponent', () => {
  let component: ConfigurableLibComponent;
  let fixture: ComponentFixture<ConfigurableLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurableLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurableLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
