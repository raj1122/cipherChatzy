import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  today: number = Date.now();

  constructor() {
    console.log('Footer constructor called');
  }

  ngOnInit() {
  }

}
