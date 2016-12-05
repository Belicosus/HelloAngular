import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'

import 'rxjs/add/operator/toPromise';

import { Hero } from '../models/hero';


@Injectable()
export class HeroService {

    private heroesUrl = 'app/heroes';
    private headers = new Headers({ 'Content-Type': 'application/json' })

    constructor(private http: Http) {
    }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl).toPromise().then(result => result.json().data as Hero[])
            .catch(this.handleError);
    }


    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(result => result.find(hero => hero.id === id));
    }

    update(hero: Hero) {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http.put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => {
                return hero;
            })
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http.post(this.heroesUrl, { name: name }, { headers: this.headers })
            .toPromise()
            .then(res => {
                return res.json().data
            })
            .catch(this.handleError);

    }

    delete(id : number) {
        const url = `${this.heroesUrl}/${id}`

        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}