import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { NgIf } from '@angular/common';
import { PasswordMatchValidator } from '../../shared/validators/password_match_validator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [TitleComponent, ReactiveFormsModule, RouterModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  registerForm!:FormGroup;
  returnUrl:string='';
  isSubmitted = false;
  constructor(private formBuilder:FormBuilder,private userService:UserService, private route:ActivatedRoute, private router:Router){
    
  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['',Validators.required],
      confirmPassword:['', Validators.required],
      address:['', Validators.required]
    },{
      validators: PasswordMatchValidator('password', 'confirmPassword')
    })

    this.returnUrl = this.route.snapshot.queryParams.returnURL
  }

  get fc(){
    return this.registerForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    this.userService.register(this.registerForm.value).subscribe((data)=>{
      console.log(data,"regis")
      this.router.navigateByUrl(this.returnUrl);
    })
  }
  
}
