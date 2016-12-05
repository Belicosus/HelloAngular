import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../services/hero.service';

import { Hero } from '../models/hero';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: "hero-detail",
    moduleId: module.id,
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    @Input()
    private hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location) {

        this.hero = new Hero();
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero)
    }

    save() {
        this.heroService.update(this.hero).then(() => {
            this.goBack()
        })
    }

    goBack() {
        this.location.back();
    }

}