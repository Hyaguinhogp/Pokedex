import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  inputValue: string = '';

  constructor(private router: Router) { }

  submit(pokemon: string) {
    this.router.navigate(['/search/' + pokemon]);
  }
}
