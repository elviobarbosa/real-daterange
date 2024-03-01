import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealDaterangeComponent } from './real-daterange.component';

describe('RealDaterangeComponent', () => {
  let component: RealDaterangeComponent;
  let fixture: ComponentFixture<RealDaterangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealDaterangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealDaterangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
