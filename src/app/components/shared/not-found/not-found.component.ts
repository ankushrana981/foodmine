import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule,NgIf],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  @Input() visible:boolean = false;
  @Input() notFoundMessage: string="Nothing Found!";
  @Input() resetLinkRoute: string= '/';
  @Input() resetLinkText: string="Reset";
}
