import { Component, OnInit } from '@angular/core';
import { RealTimeDbService } from 'src/app/core/services/firebase/database/real-time-db.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  title: string = '';
  description: string = '';
  profileImage: string = '';

  // Flags
  colombiaFlag: string = './../../../../assets/images/colombia.svg';
  polandFlag: string = './../../../../assets/images/poland.svg';

  constructor(
    private dataBaseService: RealTimeDbService
  ) { }

  ngOnInit(): void {
    this.dataBaseService.getAboutData()
      .subscribe((data: any) => {
        this.description = data[0];
        this.profileImage = data[1];
        this.title = data[2];
      });
  }

}
