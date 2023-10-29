import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HomePresentationComponent } from './components/home-presentation/home-presentation.component';
import { HomePokemonsComponent } from './components/home-pokemons/home-pokemons.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { ListPokemonsComponent } from './components/list-pokemons/list-pokemons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomePresentationComponent,
    HomePokemonsComponent,
    SearchInputComponent,
    PokemonCardComponent,
    ListPokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  ngOnInit() {
    const root = document.documentElement;
    let width = window.innerWidth;
    console.log(width)
    if(width < 1200) {
      root.style.setProperty('--column-width', (((width - 40) - (5 * 20)) / 6) + 'px');
    }
    console.log(root.style.getPropertyValue('--column-width'));
  }
}
