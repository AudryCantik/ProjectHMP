import { Component, OnInit } from '@angular/core';
import { GameserviceService } from 'src/app/gameservice.service';

@Component({
  selector: 'app-whatweplay',
  templateUrl: './whatweplay.page.html',
  styleUrls: ['./whatweplay.page.scss'],
})
export class WhatweplayPage implements OnInit {

  games:any[] = [];
  constructor(private gameservice:GameserviceService) { }

  ngOnInit() {
    this.gameservice.gameList().subscribe(
      (data)=>{
        this.games = data
      }
    )
  }

}
