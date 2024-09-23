import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whoweare',
  templateUrl: './whoweare.page.html',
  styleUrls: ['./whoweare.page.scss'],
})
export class WhowearePage implements OnInit {

  like:number = 0;

  constructor() { }

  likes(){
    this.like++;
  }

  ngOnInit() {
  }

}
