import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapPin, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FooterService } from 'src/app/core/services/firebase/footer/footer.service';
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

  mail: string = '';
  location: string = '';
  message: string = '';
  socials: string[] = [];

  constructor(
    private footerService: FooterService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.footerService.getData()
      .subscribe((params: any) => {
        this.location = params[0];
        this.mail = params[1];
        this.message = params[2];
        this.socials = params[3];
      })
  }

}
