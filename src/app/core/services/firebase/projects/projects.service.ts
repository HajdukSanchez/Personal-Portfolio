import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Project } from 'src/app/interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private dataBase: AngularFireDatabase
  ) { }

  getTopProjects() {
    return this.dataBase.list<Project>('top-projects').valueChanges();
  }
}
