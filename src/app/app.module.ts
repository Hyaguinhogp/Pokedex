import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SvgProviderComponent } from './components/svg-provider/svg-provider.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { PokemonStatComponent } from './components/pokemon-stat/pokemon-stat.component';
import { EvolutionsComponent } from './components/evolutions/evolutions.component';

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
    LoadingComponent,
    SearchPageComponent,
    SvgProviderComponent,
    PokemonComponent,
    PokemonInfoComponent,
    PokemonStatComponent,
    EvolutionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
