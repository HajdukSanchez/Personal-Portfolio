import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTechComponent } from './project-tech.component';

describe('ProjectTechComponent', () => {
  let component: ProjectTechComponent;
  let fixture: ComponentFixture<ProjectTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
