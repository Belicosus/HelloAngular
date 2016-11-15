import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


import { Hero } from './models/hero';
import { HeroService } from './services/hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [HeroService]
})

export class AppComponent implements OnInit {
    public title: string = "Tour of Heroes";

    private heroes: Array<Hero>;
    private selectedHero: Hero;


    constructor(
        private heroService: HeroService
    ) {
        this.selectedHero = null;
    }

    private onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    public ngOnInit(): void {
        this.getHeroes();
    }

    private getHeroes() {
        this.heroService.getHeroes().then((result) => {
            this.heroes = result;
        });
    }
}

