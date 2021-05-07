import { Component, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { ProjectsService } from 'src/app/core/services/firebase/projects/projects.service';
import { Project } from 'src/app/interfaces/project';
import { ProjectTech } from 'src/app/interfaces/project-tech';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  // Fontawesome icons
  faEye = faExternalLinkAlt;

  projects: Project[] = [];

  constructor(
    private projectService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.projectService.getTopProjects()
      .subscribe((data) => {
        this.projects = data;
      });
  }

}
