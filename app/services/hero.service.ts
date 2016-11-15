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

}