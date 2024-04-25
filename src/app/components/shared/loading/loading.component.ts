import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [NgIf, RouterModule],
  providers:[LoaderService],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnInit {
  isLoading!:boolean;
  constructor(private loaderService:LoaderService) {
    this.loaderService.isLoading.subscribe((isLoading)=>{
      this.isLoading = isLoading;
      console.log(this.isLoading,"Loading");
    })
   }
  ngOnInit(): void {
   
  }

}
