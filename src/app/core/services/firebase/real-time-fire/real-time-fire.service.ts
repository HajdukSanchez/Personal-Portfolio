import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RealTimeFireService {

  private URL: string = environment.firebase.databaseURL;

  constructor(
    private database: AngularFireDatabase
  ) { }

  getAllData() {
    return this.database.list(`${this.URL}/home`);
  }
}
