import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarRatingModule } from 'angular-star-rating';
import { HeaderComponent } from './components/shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,RouterOutlet,HeaderComponent
    ,StarRatingModule, HttpClientModule
    ,LoadingComponent 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'foodmine';
   ngOnInit(): void {
     
   }
}
