import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../services/event-service.service';
import { UserService } from '../services/user.service';
import { User } from'../models/user';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
isLogged:boolean;
  username:string;
  selectedIndex:number=1;
  
  c1:string="active";
  c2:string="normal";
  c3:string="normal";
  c4:string="normal";
  loginMessage:string="";
  
  user:User = new User();

  setSelected(id: number) {
    if(id ==1){
      this.c1="active";
      this.c2="normal";
      this.c3="normal";
      this.c4="normal";
    } else if(id ==2){
      this.c1="normal";
      this.c2="active";
      this.c3="normal";
      this.c4="normal";
    }else if(id ==3){
      this.c1="normal";
      this.c2="normal";
      this.c3="active";
      this.c4="normal";
    }else{
      this.c1="normal";
      this.c2="normal";
      this.c3="normal";
      this.c4="active";
    }
  }

  constructor(public es:EventServiceService,public userService:UserService) {
    
    if(JSON.parse(localStorage.getItem('user'))){ 
        this.user=JSON.parse(localStorage.getItem('user'));
        this.isLogged=true;
        this.username="Bienvenue "+this.user.prenom;
    }else{
      this.username="";
      this.isLogged=false;
    }
    //console.log(this.user);
   }

  ngOnInit() {
    this.es.change.subscribe(isOpen => {
      this.selectedIndex = isOpen;
      this.setSelected(this.selectedIndex);
    });
    
  }

  logout(){
    localStorage.setItem("user", null);   
    this.isLogged=false;
    this.username="";
    window.location.reload();
  }

  login(){
     this.userService.login(this.user)
     .then(response => {
      if(response["success"]){
        localStorage.setItem("user", JSON.stringify(response['data']));
        window.location.reload();
      }
      else {
        this.loginMessage=response['message'];
      }
      });
  }

  register(){
    this.userService.register(this.user)
     .then(response => {
      if(response["success"]){
        //localStorage.setItem("user", JSON.stringify(response['data']));
        window.location.reload();
      }
      else {
        this.loginMessage=response['message'];
      }
      });
  }
}
