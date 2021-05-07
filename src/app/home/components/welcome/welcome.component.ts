import { Component, OnInit } from '@angular/core';
import { RealTimeDbService } from 'src/app/core/services/firebase/database/real-time-db.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  hello: string = '';
  description: string = '';

  constructor(
    private dataBaseService: RealTimeDbService
  ) { }

  ngOnInit(): void {
    this.dataBaseService.getWelcomeData()
      .subscribe((data: any) => {
        this.hello = data[0];
        this.description = data[1];
      });
  }

}
