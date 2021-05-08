import { Component, OnInit } from '@angular/core';
import { RealTimeDbService } from 'src/app/core/services/firebase/database/real-time-db.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  openMenu: boolean = false;

  cvPath: string = '';

  constructor(
    private dataBaseService: RealTimeDbService
  ) { }

  ngOnInit(): void {
    this.getCV();
  }

  private getCV() {
    this.dataBaseService.getCV()
      .subscribe((data: any) => {
        this.cvPath = data[0];
      });
  }

  toogleMenu(): void {
    this.openMenu = this.openMenu ? false : true;
  }

}
