import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  openMenu: boolean = false;

  cvPath: string = 'https://firebasestorage.googleapis.com/v0/b/jhs-portfolio.appspot.com/o/cv%2FCV-Jozek-Hajduk.pdf?alt=media&token=0026d87b-bbeb-4867-87a5-24560958b32f';

  constructor() { }

  ngOnInit(): void {
  }

  toogleMenu(): void {
    this.openMenu = this.openMenu ? false : true;
  }

}
