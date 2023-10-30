import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HomePresentationComponent } from './components/home-presentation/home-presentation.component';
import { HomePokemonsComponent } from './components/home-pokemons/home-pokemons.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { ListPokemonsComponent } from './components/list-pokemons/list-pokemons.component';
import { DefaultButtonComponent } from './components/default-button/default-button.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomePresentationComponent,
    HomePokemonsComponent,
    SearchInputComponent,
    PokemonCardComponent,
    ListPokemonsComponent,
    DefaultButtonComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
