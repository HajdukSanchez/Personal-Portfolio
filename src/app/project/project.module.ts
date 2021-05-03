import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectTechComponent } from './components/project-tech/project-tech.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    ProjectTechComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    ProjectsComponent,
    ProjectComponent,
    ProjectTechComponent
  ]
})
export class ProjectModule { }
