import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm: string = '';
  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((param) => {
      if(param.searchTerm) this.searchTerm = param.searchTerm;
    })
  }

  search(term: string) {
    this.router.navigateByUrl('/search/' + term);
  }
}