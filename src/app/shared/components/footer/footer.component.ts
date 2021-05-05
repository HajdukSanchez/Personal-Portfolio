import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapPin, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { RealTimeFireService } from 'src/app/core/services/firebase/real-time-fire/real-time-fire.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // Fontawesome icons
  faLinkedIn = faLinkedinIn;
  faTwitter = faTwitter;
  faGitHub = faGithub;
  faMail = faPaperPlane;
  faLocation = faMapPin;

  mail: string = 'hajduksanchez.dev@gmail.com';
  city: string = 'Bogota D.C, Colombia';
  creatorInfo: string = '© Hajduk Sánchez 🚀 2021 💻';

  constructor(
    private fireService: RealTimeFireService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.fireService.getAllData().snapshotChanges()
      .subscribe((data) => {
        console.log(data);

      });
  }

}
