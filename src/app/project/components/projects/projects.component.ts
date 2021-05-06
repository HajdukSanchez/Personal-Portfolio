import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  // Font awesome
  faLock = faLock;

  title: string = 'Projects';
  description: string = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptatibus itaque laboriosam sint voluptatem minima reprehenderit, facere aperiam praesentium ipsum?'

  constructor() { }

  ngOnInit(): void {
  }

}
