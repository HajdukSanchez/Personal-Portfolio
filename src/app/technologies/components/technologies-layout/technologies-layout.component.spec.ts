import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesLayoutComponent } from './technologies-layout.component';

describe('TechnologiesLayoutComponent', () => {
  let component: TechnologiesLayoutComponent;
  let fixture: ComponentFixture<TechnologiesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
