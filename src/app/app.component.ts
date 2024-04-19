import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarRatingModule } from 'angular-star-rating';
import { HeaderComponent } from './components/shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,StarRatingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'foodmine';
}
