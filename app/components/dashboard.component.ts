import {Component, OnInit} from '@angular/core';

import {Hero} from '../models/Hero';
import {HeroService} from '../services/hero.service';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    private heroes : Array<Hero>;


    constructor(private HeroService : HeroService) {

    }

    ngOnInit() : void {
            this.HeroService.getHeroes().then(result => {
                this.heroes = result.slice(1, 5);
            });
    }
}