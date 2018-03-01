import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app/app.service';
import { Heroes } from './hero/heroes.service';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-home-container',
  providers: [
    Heroes
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomePageComponent implements OnInit {
  containerName = 'Home container';
  listHeroes: Array<Hero> = [];
  selectedHero: Hero;
  constructor(
    public appState: AppState,
    public heroes: Heroes
  ) {}

  public ngOnInit() {
    this.heroes.getData().subscribe((heroes: Array<Hero>) => {
      this.listHeroes = heroes.sort((a, b) => {
        return b.likes - a.likes;
      });
    });
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
