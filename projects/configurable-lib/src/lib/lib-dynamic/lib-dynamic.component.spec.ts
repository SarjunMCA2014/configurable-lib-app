import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibDynamicComponent } from './lib-dynamic.component';

describe('LibDynamicComponent', () => {
  let component: LibDynamicComponent;
  let fixture: ComponentFixture<LibDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
