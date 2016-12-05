import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router'


import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
    moduleId: module.id,
    selector: 'heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css']
})

export class HeroesComponent implements OnInit {
    private heroes: Array<Hero>;
    private selectedHero: Hero;


    constructor(
        private heroService: HeroService,
        private router: Router
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

    private gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}

