import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasedLayoutComponent } from './based-layout.component';

describe('BasedLayoutComponent', () => {
  let component: BasedLayoutComponent;
  let fixture: ComponentFixture<BasedLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasedLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
