import { Component, OnInit } from '@angular/core';
import { RealTimeDbService } from 'src/app/core/services/firebase/database/real-time-db.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  title: string = 'Technologies';
  description: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium soluta eos excepturi, mollitia est fugit nihil! Sequi quisquam aliquam excepturi!';

  constructor(
    private dataBaseService: RealTimeDbService
  ) { }

  ngOnInit(): void {
    this.dataBaseService.getTechnologiesData()
      .subscribe((data: any) => {
        this.description = data[0];
        this.title = data[1];
      });
  }

}
