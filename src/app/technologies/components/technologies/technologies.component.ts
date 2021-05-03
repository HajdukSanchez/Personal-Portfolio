import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  title: string = 'Technologies';
  description: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium soluta eos excepturi, mollitia est fugit nihil! Sequi quisquam aliquam excepturi!';

  constructor() { }

  ngOnInit(): void {
  }

}
