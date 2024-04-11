import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorukaComponent } from './poruka.component';

describe('PorukaComponent', () => {
  let component: PorukaComponent;
  let fixture: ComponentFixture<PorukaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorukaComponent]
    });
    fixture = TestBed.createComponent(PorukaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
