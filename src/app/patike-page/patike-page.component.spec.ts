import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatikePageComponent } from './patike-page.component';

describe('PatikePageComponent', () => {
  let component: PatikePageComponent;
  let fixture: ComponentFixture<PatikePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatikePageComponent]
    });
    fixture = TestBed.createComponent(PatikePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
