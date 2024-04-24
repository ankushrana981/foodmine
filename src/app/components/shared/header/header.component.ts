import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgIf],
  providers:[],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
cardQuantity:number= 0;
user!:User;
username:string=''
constructor(private userService:UserService) {
   this.userService.userObservable.subscribe(newUser=>{
    if(newUser){
      this.user = newUser
      this.username = newUser.name;
    }
  })
} 

ngOnInit() {}
logout(){
  this.userService.logout()
}
}
