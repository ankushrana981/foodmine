import { NgIf } from '@angular/common';
import { Component, OnInit, effect } from '@angular/core';
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
cardQuantity:number= 0;
user!:User;
username:string=''
constructor(private userService:UserService, private cartService:CartService) {
  this.getCardQuantity();
  effect(()=>{
    this.cartService.getCartObservable().subscribe(cart =>{
     console.log(cart.items.length ,"updated cart ")
     this.cardQuantity = cart.items.length
    })
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
