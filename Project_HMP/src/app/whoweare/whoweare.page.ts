import { Component, OnInit } from '@angular/core';
import { GameserviceService } from '../gameservice.service';

@Component({
  selector: 'app-whoweare',
  templateUrl: './whoweare.page.html',
  styleUrls: ['./whoweare.page.scss'],
})
export class WhowearePage implements OnInit {

  likes:any=[]
  statusLike:number = 0
  num_like:number = 0
  idmember=""


  constructor(private gameservice: GameserviceService) { }

  set_like() {
    this.statusLike = this.statusLike === 0 ? 1 : 0;

  // Toggle and update like
  this.gameservice.likeAction(parseInt(this.idmember), this.statusLike).subscribe((response: any) => {
    console.log('API Response:', response);

    if (response.result === "success") {
      this.refreshLikesData()
    } else {
      console.error('Error:', response.message);
    }
  });
  }

  refreshLikesData() {
    this.gameservice.numLikes(parseInt(this.idmember)).subscribe((data: any) => {
      this.likes = data;

      if (this.likes.result === "success") {
        this.num_like = this.likes.total; 
        this.statusLike = this.likes.status; 
      }
    });
  }


  ngOnInit() {
    this.idmember = localStorage.getItem("app_id") ?? ""

    if (this.idmember) {
      this.refreshLikesData();  
    }  }

}
