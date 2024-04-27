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
  constructor(loaderService:LoaderService) {
    loaderService.isLoading.subscribe((isLoading)=>{
      this.isLoading = isLoading;
    })
   }
  ngOnInit(): void {
   
  }

}
