import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { RealTimeDbService } from 'src/app/core/services/firebase/database/real-time-db.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  // Font awesome
  faLock = faLock;

  title: string = '';
  description: string = '';

  constructor(
    private dataBaseService: RealTimeDbService
  ) { }

  ngOnInit(): void {
    this.dataBaseService.getProjectsData()
      .subscribe((data: any) => {
        this.description = data[0];
        this.title = data[1];
      });
  }

}
