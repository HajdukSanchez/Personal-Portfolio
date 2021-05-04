import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  title: string = 'About me';
  description: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis temporibus dignissimos. Necessitatibus, eligendi dignissimos fugit pariatur deleniti blanditiis sed?';
  profileImage: string = 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg';
  colombiaFlag: string = './../../../../assets/images/colombia.svg';
  polandFlag: string = './../../../../assets/images/poland.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
