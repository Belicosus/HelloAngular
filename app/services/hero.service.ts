import { Injectable } from '@angular/core';

import { Hero } from '../models/hero';
import { HEROES } from '../services/mock-heroes';

@Injectable()
export class HeroService {

    private heroes: Array<Hero>;

    constructor() {
        this.heroes = HEROES;
    }

    getHeroes(): Promise<Array<Hero>> {
        return new Promise<Array<Hero>>((resolve) => setTimeout(resolve, 500)).then(() => {
                return Promise.resolve(this.heroes);
            });
    }

    getHero(id : number) : Promise<Hero> {
        return new Promise<Hero>((resolve) => {
        setTimeout(resolve, 500)}).then(() => {
            return Promise.resolve(this.heroes.find(hero => hero.id == id));
        })

        //return this.getHeroes().then(result => result.find(hero => hero.id === id));        
    }
}