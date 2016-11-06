import { Component } from '@angular/core';

import {Hero} from './models/hero';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    public title: string = "Tour of Heroes";

    private heroes : Array<Hero>;
    private selectedHero : Hero;


    constructor() {
        this.heroes = HEROES;
        //this.selectedHero = new Hero();
        this.selectedHero = null;
    }

    private onSelect(hero : Hero) {
        this.selectedHero = hero;
    }
}

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];