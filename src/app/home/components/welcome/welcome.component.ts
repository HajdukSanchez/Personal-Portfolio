import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  hello: string = 'Hello I´m Jozek';
  description: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex deleniti voluptates laudantium tempora facere ut facilis quae et officia molestias?';

  constructor() { }

  ngOnInit(): void {
  }

}
