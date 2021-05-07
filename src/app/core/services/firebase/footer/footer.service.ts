import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(
    private database: AngularFireDatabase
  ) { }

  getData() {
    return this.database.list('footer').valueChanges();
  }
}
