import {Component, Input} from '@angular/core';

import {Hero} from '../models/hero';

@Component( {
    selector: "hero-detail",
    moduleId: module.id,
    templateUrl: 'hero-detail.component.html'
})

export class HeroDetailComponent {

    @Input()
    private hero : Hero;

    constructor() {
        this.hero = new Hero();
    }

}