import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loadingService: LoadingService) {}

  isLoading: boolean = false;

  ngOnInit() {

    this.loadingService.isLoading$.subscribe(isLoading => this.isLoading = isLoading);

    const root = document.documentElement;
    let width = window.innerWidth;

    if (width < 1200) {
      root.style.setProperty('--column-width', (((width - 40) - (5 * 20)) / 6) + 'px');
    }
    else {
      root.style.setProperty('--column-width', (((1200) - (11 * 20)) / 12) + 'px');
    }
  }

}
