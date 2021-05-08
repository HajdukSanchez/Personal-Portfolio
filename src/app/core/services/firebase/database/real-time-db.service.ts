import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class RealTimeDbService {

  constructor(
    private database: AngularFireDatabase
  ) { }

  getCV() {
    return this.database.list('cv').valueChanges();
  }

  getBannerData() {
    return this.database.list('banner').valueChanges();
  }

  getWelcomeData() {
    return this.database.list('welcome').valueChanges();
  }

  getProjectsData() {
    return this.database.list('projects').valueChanges();
  }

  getTechnologiesData() {
    return this.database.list('technologies').valueChanges();
  }

  getAboutData() {
    return this.database.list('about').valueChanges();
  }

  getFooterData() {
    return this.database.list('footer').valueChanges();
  }
}
