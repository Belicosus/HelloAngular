import { NgModule } from '@angular/core';

import { RouterModule , Routes} from '@angular/router';

//Components:
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroesComponent } from './components/heroes.component';
import {DashboardComponent} from './components/dashboard.component'

const routes : Routes = [
    {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'heroes',
                component: HeroesComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'detail/:id',
                component: HeroDetailComponent
            }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}