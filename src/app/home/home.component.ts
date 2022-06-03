import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    input="for Market"
  constructor() {

    setInterval(() => {

      this.input="for Arts"

    }, 2000);

    setInterval(() => {

      this.input="for Sound"

    }, 4000);

    setInterval(() => {

      this.input="for collectibles"

    }, 6000);

    setInterval(() => {

      this.input="for Digital Assets"

    }, 8000);

    setInterval(() => {

      this.input="for Videos"

    }, 10000);



   }

  ngOnInit(): void {
  }


}
