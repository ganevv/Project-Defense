import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcDetailsComponent } from './pc-details.component';

describe('PcDetailsComponent', () => {
  let component: PcDetailsComponent;
  let fixture: ComponentFixture<PcDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
