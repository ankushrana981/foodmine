import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleComponent } from '../../shared/title/title.component';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf, TitleComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {
  loginform!:FormGroup;
  isSubmitted = false;
  returnUrl:string='';
  constructor(private formBuilder:FormBuilder, private userService:UserService,private route:Router,private router:ActivatedRoute){
  }
  ngOnInit():void{
    this.loginform = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    })
    this.returnUrl = this.router.snapshot.queryParams.returnUrl
  }
  get fc(){
    return this.loginform.controls;
  }
  submit(){
    this.isSubmitted = true
    console.log(this.loginform.value)
    // if(this.loginform.invalid) return;
    this.userService.login(this.loginform.value).subscribe(()=>{
      this.route.navigateByUrl(this.returnUrl)
    }, error => console.log(error))
  }
}
