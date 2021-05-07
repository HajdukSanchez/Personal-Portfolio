import { Component, Input, OnInit } from '@angular/core';
import { ProjectTech } from 'src/app/interfaces/project-tech';

@Component({
  selector: 'app-project-tech',
  templateUrl: './project-tech.component.html',
  styleUrls: ['./project-tech.component.scss']
})
export class ProjectTechComponent implements OnInit {

  @Input() technologie: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
