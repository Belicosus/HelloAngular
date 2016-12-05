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

    add(name: string): void {
        name = name.trim();

        if (!name) {
            return;
        }

        this.heroService.create(name).then(hero => {
            this.heroes.push(hero);
            this.selectedHero = null;
        });
    }

    delete(hero : Hero) {
        this.heroService.delete(hero.id).then(() => {
            let index = this.heroes.indexOf(hero);

            this.heroes.splice(index, 1);
            if(this.selectedHero === hero) {
this.selectedHero = null;
            }
            
        })

    }
}

