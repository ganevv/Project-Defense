import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcUpdateComponent } from './pc-update.component';

describe('PcUpdateComponent', () => {
  let component: PcUpdateComponent;
  let fixture: ComponentFixture<PcUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
