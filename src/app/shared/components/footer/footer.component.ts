import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapPin, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faLinkedIn = faLinkedinIn;
  faTwitter = faTwitter;
  faGitHub = faGithub;
  faMail = faPaperPlane;
  faLocation = faMapPin;

  constructor() { }

  ngOnInit(): void {
  }

}
