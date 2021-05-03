import { Component, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { ProjectTech } from 'src/app/interfaces/project-tech';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  // Fontawesome icons
  faEye = faExternalLinkAlt;

  title: string = 'Project 1';
  description: string = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo a est possimus accusamus aperiam suscipit obcaecati ipsa nihil autem mollitia.';
  image: string = 'https://miro.medium.com/max/1920/1*ee9Ji2ToUxeYfj3YUQ1xsA.jpeg';
  techs: ProjectTech[] = [
    {name: 'html', class: 'html'},
    {name: 'css', class: 'css'},
    {name: 'sass', class: 'sass'},
    {name: 'js', class: 'js'},
    {name: 'java', class: 'java'},
    {name: 'bootstrap', class: 'bootstrap'},
    {name: 'stylus', class: 'stylus'},
    {name: 'less', class: 'less'},
    {name: 'python', class: 'python'},
    {name: 'pug', class: 'pug'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
