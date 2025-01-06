import { Component } from '@angular/core';
import { GameserviceService } from './gameservice.service';
import { defineCustomElements} from '@ionic/pwa-elements/loader';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  id=""
  username=""
  password=""
  fullname=""
  picture=""

  isRegister:boolean=false
  agreed:boolean =false

  new_fname=""
  new_lname=""
  new_username=""
  new_password=""
  new_picture=""
  rePassword = ""

  constructor(private gameservice:GameserviceService) {
    this.id = localStorage.getItem("app_id") ?? ""
    this.username = localStorage.getItem("app_username") ?? ""
    this.fullname = localStorage.getItem("app_fullname") ?? ""
    this.picture = localStorage.getItem("app_image") ?? ""

    defineCustomElements(window)
  }

  goToRegister(){
    this.isRegister=true

    this.username=""
    this.password=""
  }

  goToLogin(){
    this.isRegister=false

    this.new_fname=""
    this.new_lname=""
    this.new_password=""
    this.new_username=""
    this.new_picture=""
    this.rePassword = ""
  }

  login(){
    this.gameservice.login(this.username, this.password).subscribe((response:any) => {
      if(response.result === "success"){
          this.fullname = response.fullname
          this.picture = response.picture
          this.id = response.idmember
          
          localStorage.setItem("app_id", this.id)
          localStorage.setItem("app_username", this.username)
          localStorage.setItem("app_fullname", this.fullname)
          localStorage.setItem("app_image", this.picture)

          alert("Login Successfull! Welcome, "+ this.fullname)

        } else{
          alert(response.message)
        }
    })
  }

  logout(){
    this.username=""
    this.password=""
    this.fullname=""
    localStorage.removeItem("app_username")
    localStorage.removeItem("app_fullname")
  }

  register(){
    if(!this.agreed){
      alert("Please checklist the checkbox");
    }else if(this.new_password=== this.rePassword){
      this.gameservice.register(this.new_fname, this.new_lname, this.new_username, this.new_password, this.new_picture).subscribe((response:any)=>{
        if(response.result === 'success'){
          // console.log("success")
          alert("success")
  
          this.new_fname=""
          this.new_lname=""
          this.new_password=""
          this.new_username=""
          this.new_picture=""
          this.rePassword=""

          this.goToLogin()
        } else{
          alert(response.message)
        }
      });
    }else{
      alert("Passwords do not match.Please re-enter")
    }
   
  }
}
