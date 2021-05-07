import { Component, OnInit } from '@angular/core';
import { RealTimeDbService } from 'src/app/core/services/firebase/database/real-time-db.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    // 'https://wallpapercave.com/wp/wp4584981.jpg',
    // 'https://wallpapercave.com/wp/wp4584986.png',
    // 'https://wallpapercave.com/wp/wp4584990.jpg'
  ]

  constructor(
    private dataBaseService: RealTimeDbService
  ) { }

  ngOnInit(): void {
    this.dataBaseService.getBannerData()
      .subscribe((data: any) => {
        this.images = data;
      })
  }
}
