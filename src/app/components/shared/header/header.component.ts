import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../models/user';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgIf],
  providers:[UserService, CartService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
cardQuantity:number= 2;
user!:User;
username:string=''
constructor(private userService:UserService, private cartService:CartService) {
  this.getCardQuantity()
   this.cartService.getCartObservable().subscribe(cart =>{
    console.log(cart ,"updated cart ")
   })
   this.userService.userObservable.subscribe(newUser=>{
    if(newUser){
      this.user = newUser
      this.username = newUser.name;
    }
  })
} 

ngOnInit() {
  this.getCardQuantity()
}

getCardQuantity(){
let data =  this.cartService.Cart  ;
console.log(data,"data")
}
logout(){
  this.userService.logout()
}
}
